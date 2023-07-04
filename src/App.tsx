/* eslint-disable no-console */
import { useState } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';

interface Data {
  quote: string;
  author: string;
  category: string;
}

function App() {
  const [category, setCategory] = useState('');
  const [data, setData] = useState<Data>();

  const handleClick = () => {
    axios
      .get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
          'X-Api-Key': `${import.meta.env.VITE_KEY}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => setData(res.data[0] as Data))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
  };

  return (
    <section className="flex h-screen flex-col items-center bg-slate-700 ">
      <div className="relative top-1/4">
        <h1 className="mb-8 p-5 text-5xl font-semibold text-orange-500">
          Quotes &apos;R&apos; Us
        </h1>
        <input
          type="text"
          placeholder="Search by category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mb-5 w-full border-b-2 border-b-orange-500 bg-transparent text-center text-base font-light text-gray-400 focus:outline-none"
        />
        <button
          type="button"
          onClick={handleClick}
          className="relative left-11 block w-3/4 rounded-md bg-orange-500 py-1"
        >
          Search
        </button>
      </div>
      {data && <QuoteCard quote={data.quote} author={data.author} />}
    </section>
  );
}

export default App;
