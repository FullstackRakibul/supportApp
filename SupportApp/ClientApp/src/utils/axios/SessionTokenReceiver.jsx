import axios from "axios";
import React, { useEffect, useState } from "react";

const SessionTokenReceiver = () => {
  const [token, setToken] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        "http://localhost:7002/api/Auth/login",
        values
      );
      console.log(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="container p-3 mx-auto">
        <h3></h3>
      </section>
    </>
  );
};

export default SessionTokenReceiver;
