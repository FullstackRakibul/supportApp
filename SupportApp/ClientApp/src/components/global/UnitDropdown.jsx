import React from "react";
import { useState, useEffect } from "react";
import { Select } from "antd";
import { AxiosInstance } from "../../router/api";
const { Option } = Select;

const UnitDropdown = ({ onUnitSelect }) => {
  const [UnitData, setUnitData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get("/api/Units");
      setUnitData(response.data);
    };
    fetchData();
  }, []);
  const handleChange = (value) => {
    onUnitSelect(value);
  };

  return (
    <>
      <Select style={{ width: 200 }} onChange={handleChange}>
        {UnitData.map((item) => (
          <Option key={item.id} value={item.id}>
            {item.name}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default UnitDropdown;
