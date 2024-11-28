import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    axios
      .get("https://agrolit.onrender.com/")
      .then((response) => setData(response.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to AgroLit</h1>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export default App;
