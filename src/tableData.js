import React, { useState, useEffect } from "react";
import axios from "axios";
const TableData = () => {
  const [users, setUsers] = useState([]);
  const getApi = async () => {
    try {
      const response = await axios
        .get(
          "https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=be8c5d2db3fe41e8935d30f6a4a667a0"
        )
        .setUsers(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <table></table>
    </div>
  );
};
export default TableData;
