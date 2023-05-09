import "./App.css";
import QouteCard from "./components/QouteCard";

function App() {
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
