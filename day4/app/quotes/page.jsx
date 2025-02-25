'use client'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotesRequest, fetchQuotesSuccess, fetchQuotesFailure } from '../../redux/store';

const Home = () => {
  const dispatch = useDispatch();
  const { quotes, loading, error } = useSelector((state) => state);

  useEffect(() => {
    const fetchQuotes = async () => {
      dispatch(fetchQuotesRequest());
      try {
        const res = await fetch('https://dummyjson.com/quotes');
        const data = await res.json();
        dispatch(fetchQuotesSuccess(data.results));  
      } catch (err) {
        dispatch(fetchQuotesFailure('Failed to fetch quotes'));
      }
    };

    fetchQuotes();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote._id}>{quote.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
