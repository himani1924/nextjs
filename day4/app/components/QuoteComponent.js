"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuotes, setError } from "../../redux/quotesSlice";

const QuoteComponent = () => {
  const dispatch = useDispatch();
  const { quotes, error } = useSelector((state) => state.quotes);
  const [loading, setLoading] = useState(false);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/quotes"); // Replace with your actual API URL
      const data = await response.json();
      if (data.quotes) {
        dispatch(setQuotes(data.quotes));
      } else {
        dispatch(setError("No quotes found"));
      }
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-3xl text-center underline my-4 ">Quotes List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id} className="mx-5 my-2 border border-gray-500 p-2 rounded hover:bg-sky-700 hover:text-white">
            <p className="font-bold">{quote.quote}</p>
            <p className="italic">-{quote.author}</p>
          </li>
        ))}
      </ul>
      <button onClick={fetchQuotes}>Fetch New Quotes</button>
    </div>
  );
};

export default QuoteComponent;
