import React, { useState, useEffect } from "react";
import Axios from "axios";
import Results from "./Results";
import Footer from "./Footer";

export default function Search() {
  const [searchWord, setSearchWord] = useState("");
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (results[1]) {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      loadMore();
    }
  };

  async function getResults(word, limitParam) {
    const { data } = await Axios.get(
      `//en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${word}&origin=*&limit=${limitParam}`
    );
    data.error ? setResults([]) : setResults(data || []);
  }

  async function loadMore() {
    if (results[1].length >= limit) setLoading(true);
    let addToLimit = limit + 15;
    await setLimit(addToLimit);
    await getResults(searchWord, addToLimit);
    setLoading(false);
  }

  return (
    <div className="search">
      <input
        className="search-bar"
        type="text"
        value={searchWord}
        placeholder="search anything..."
        onChange={e => {
          setSearchWord(e.target.value);
          getResults(e.target.value, limit);
          setLimit(20);
        }}
      />
      <Results results={results} />
      {loading && <div className="loading">Loading...</div>}
      {!results && <Footer />}
    </div>
  );
}
