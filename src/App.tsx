import { useEffect } from "react";
import "./App.css";
import QouteCard from "./components/QouteCard";

const API_URL = "https://api.api-ninjas.com/v1/quotes?category=";
const API_OPTIONS = {
  method: "GET",
  headers: {
    "X-Api-Key": "9QyYdq5qXDAHyKcUccf5jQ==ReqZOszIw72McvDI",
    "Content-Type": "application/json",
  },
};

function App() {
  const searchQuotes = async (category: string) => {
    const response = await fetch(API_URL + category, API_OPTIONS);
    const data = await response.json();

    console.log(data);
  };
  // useEffect(() => {
  //   searchQuotes("inspirational");
  // }, []);

  return (
    <div className="app">
      <h1>Quote Of The Day</h1>
      <QouteCard
        qoute="It's inspirational to see someone who is dying smile."
        author="Arlen Specter"
      />
      <div className="searchbar">
        <input type="text" placeholder="Category of Quote" size={40} />
        <button type="button">Search</button>
      </div>
    </div>
  );
}

export default App;
