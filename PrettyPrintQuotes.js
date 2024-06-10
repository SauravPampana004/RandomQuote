import React from 'react';

const PrettyPrintQuotes = ({ quotes }) => {
  return (
    <pre>
      {JSON.stringify(quotes, null, 2)}
    </pre>
  );
};

export default PrettyPrintQuotes;
