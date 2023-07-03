import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('');

  const clickHandler = () => {
    return null;
  };

  return (
    <section>
      <h1>Quotes &apos;R&apos; Us</h1>
      <input
        type="text"
        placeholder="Search by category..."
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="button" onClick={clickHandler}>
        Search
      </button>
    </section>
  );
}

export default App;
