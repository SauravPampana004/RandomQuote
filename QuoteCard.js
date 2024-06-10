import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <button onClick={onSave}>Save to List</button>
    </div>
  );
};

export default QuoteCard;
