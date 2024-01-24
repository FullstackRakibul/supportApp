import React from "react";
import { useState, useEffect } from "react";
import { Select } from "antd";
import AxiosInstance from "../../router/api";
const { Option } = Select;

const DepartmentDropdown = ({ onDepartmentSelect }) => {
  const [departmentData, setDepartmentData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get("/api/Departments");
      setDepartmentData(response.data);
    };
    fetchData();
  }, []);
  const handleChange = (value) => {
    onDepartmentSelect(value);
  };
  return (
    <>
      <Select style={{ width: 200 }} onChange={handleChange}>
        {departmentData.map((item) => (
          <Option key={item.id} value={item.id}>
            {item.departmentName}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default DepartmentDropdown;
