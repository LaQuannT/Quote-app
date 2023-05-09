import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Quote Of The Day</h1>
      <div className="quoteCard">
        <p className="cardText">
          "It's inspirational to see someone who is dying smile."
        </p>
        <p className="cardAuthor">"Arlen Specter"</p>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Category of Quote" size={40} />
        <button type="button">Search</button>
      </div>
    </div>
  );
}

export default App;
