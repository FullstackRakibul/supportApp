import { Button, message } from "antd";
import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { AxiosInstance } from "../../router/api";

const AssignSupportEngineerModal = (props) => {
  const [supportEngineer, setSupportEngineer] = useState([]);
  const [selectedEngineerId, setSelectedEngineerId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/api/Supports");
        setSupportEngineer(response.data);
        //console.log(response.data);
      } catch (error) {
        message.error(`data fetch error: ${error}`);
      }
    };
    fetchData();
  }, []);

  const handleEngineerSelection = (value) => {
    setSelectedEngineerId(value);
  };

  const handleClick = async () => {
    if (!selectedEngineerId) {
      message.error("Please select a support engineer");
      return;
    }

    try {
      // Use AxiosInstance or axios directly based on your preference
      await axios.post(
        `https://localhost:7295/api/ticket/${props.ticketId}/assignsupportengineer/${SupportEngineerId}`,
        {
          SupportEngineerId: selectedEngineerId,
          // Add other properties as needed
        }
      );

      message.success("Support engineer assigned successfully");
    } catch (error) {
      message.error(`Assignment failed: ${error}`);
    }
  };
  return (
    <>
      {/* <form>
        <Select style={{ width: 200 }} onChange={handleEngineerSelection}>
          {supportEngineer.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
        <Button onClick={handleClick()}>Assign Support Engineer</Button>
      </form> */}
    </>
  );
};

export default AssignSupportEngineerModal;
