import React from "react";
import Result from "./Result";

const Results = ({ results }) => {
  return (
    <div>
      {results.length === 0 ? (
        <div />
      ) : (
        <div className="results">
          {results[1].map((result, index) => (
            <Result
              key={result}
              title={result}
              description={results[2][index]}
              url={results[3][index]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
