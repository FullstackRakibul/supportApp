import React, { useState, useEffect } from "react";
import { Select } from "antd";
import AxiosInstance from "../router/api";

const { Option } = Select;

const TickeTypeDropDown = ({ onTicketTypeChange }) => {
  const [data, setData] = useState([]);

  //useEffect(() => {
  // Fetch data from your API
  //   fetch("https://localhost:7295/api/TicketType")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setData(result);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []); // The empty dependency array ensures that this effect runs once after the initial render

  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get("/api/TicketTypes");
      setData(response.data);
    };
    fetchData();
  }, []);
  const handleChange = (value) => {
    onTicketTypeChange(value);
  };

  return (
    <Select style={{ width: 200 }} onChange={handleChange}>
      {data.map((item) => (
        <Option key={item.id} value={item.id}>
          {item.typeName}
        </Option>
      ))}
    </Select>
  );
};

export default TickeTypeDropDown;
