import React from 'react';
import './SavedQuotes.css';

const SavedQuotes = ({ quotes }) => {
  return (
    <div className="saved-quotes">
      <h2>Saved Quotes</h2>
      {quotes.length > 0 ? (
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      ) : (
        <p>No saved quotes yet.</p>
      )}
    </div>
  );
};

export default SavedQuotes;
