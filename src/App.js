import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getApi = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=be8c5d2db3fe41e8935d30f6a4a667a0"
      );
      setUsers(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  for (let i = 0; i <= response.data.length; i++) {}
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Title.</th>
            <th>Image.</th>
          </tr>
        </thead>
        {response.data.articles.map(index, title, urlToImage)}
      </table>
    </div>
  );
}

export default App;
