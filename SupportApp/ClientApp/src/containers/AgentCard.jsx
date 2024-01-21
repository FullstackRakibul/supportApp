import { Card } from "antd";
import React, { useEffect, useState } from "react";
import AxiosInstance from "../router/api";

const AgentCard = () => {
  const [supportEngineer, setSupportEngineer] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get("api/Supports");
      //console.log(response.data);
      setSupportEngineer(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <section className=" flex flex-wrap gap-4 p-4">
        {supportEngineer.map((engineer) => (
          <Card
            key={engineer.agentId}
            className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5"
            hoverable
          >
            <div className="">
              <img
                src="https://www.buyerforesight.com/wp-content/uploads/2022/11/IT-Support-Engineer.png"
                alt={engineer.name}
                className="rounded-full h-26 w-32 mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">{engineer.name}</h3>
              <div className="flex flex-row justify-between">
                <p className="text-gray-500">{engineer.empCode}</p>
                <p className="text-gray-500">{engineer.mobile}</p>
              </div>
              <p className="text-gray-500">{engineer.email}</p>
            </div>
          </Card>
        ))}
      </section>
    </>
  );
};

export default AgentCard;
