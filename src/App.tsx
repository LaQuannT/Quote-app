import { useState } from "react";
import "./App.css";
import Key from "./apiKey";
import QouteCard from "./components/QouteCard";

const API_URL = "https://api.api-ninjas.com/v1/quotes?category=";
const API_OPTIONS = {
  method: "GET",
  headers: {
    "X-Api-Key": Key,
    "Content-Type": "application/json",
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [quote, setQuote] = useState({ text: "", author: "" });

  const searchQuotes = async (category: string) => {
    const response = await fetch(API_URL + category, API_OPTIONS);
    const data = await response.json();

    setQuote({ text: data[0].quote, author: data[0].author });
  };

  const handleClick = (text: string) => {
    searchQuotes(text);
  };

  return (
    <div className="app">
      <h1>Quotes</h1>
      {quote.text ? (
        <QouteCard qoute={quote.text} author={quote.author} />
      ) : null}
      <div className="searchbar">
        <input
          type="text"
          value={searchTerm}
          placeholder="Category of Quote"
          size={40}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={() => handleClick(searchTerm)}>
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
