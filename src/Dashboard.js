import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Example API call to your backend
    axios.get('https://agrolit.onrender.com/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>AgroLit Frontend</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default App;
