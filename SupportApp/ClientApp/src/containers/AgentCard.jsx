import { Card } from "antd";
import React, { useEffect, useState } from "react";
import AxiosInstance from "../router/api";

const AgentCard = () => {
  const [supportEngineer, setSupportEngineer] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get("api/Supports");
      console.log(response.data);
      setSupportEngineer(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <section className=" flex flex-row overflow-clip gap-3">
        {supportEngineer.map((data) => (
          <Card title={data.name}></Card>
        ))}
      </section>
    </>
  );
};

export default AgentCard;
