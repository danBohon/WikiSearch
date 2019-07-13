import React from "react";

const Result = ({ title, description, url }) => {
  return (
    <div href={`${url}`} className="result">
      <a href={`${url}`}>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </a>
    </div>
  );
};

export default Result;
