import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        if (!res || res.length === 0) {
          setData([]); 
        } else {
          setData(res);
        }
      })
      .catch((err) => {
        setError("An error occurred: " + err.message);
      });
  }, []); 

  if (error) {
    return <p>{error}</p>;
  }

  if (data === null) {
    return <p>Loading...</p>;
  }

  if (Array.isArray(data) && data.length === 0) {
    return <pre>[]</pre>; 
  }

  return (
    <div>
      <h1>Data Fetched from API</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default App;
