import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Select } from "antd";
import AxiosInstance from "../../router/api.js";
const { TextArea } = Input;

const TargetCreate = () => {
  //......................all dropdowndata..................
  const [ticket, setTicket] = useState([]);
  const [supportEngineer, setSupportEngineer] = useState([]);
  const [department, setDepartment] = useState([]);
  const [unit, setUnit] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseForTicket = await AxiosInstance.get("/api/Tickets");
      const responseForSupportEngineer = await AxiosInstance.get(
        "/api/Supports"
      );
      const responseForDepartment = await AxiosInstance.get("/api/Departments");
      const responseForUnit = await AxiosInstance.get("/api/Units");

      setTicket(responseForTicket.data);
      setSupportEngineer(responseForSupportEngineer.data);
      setDepartment(responseForDepartment.data);
      setUnit(responseForUnit.data);
    };
    fetchData();
  }, []);
  //.................end here .......................

  const [form] = Form.useForm();
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      const response = await AxiosInstance.post("/api/Targets", values);
      console.log(response.data);
      console.log(`this is a response code : ${response.status}`);
      if (response.status === 200) {
        message.success("Ticket Assign Successfully.");
        form.resetFields();
      } else {
        message.error("Error in Creating Ticket.");
      }
    } catch (error) {
      console.log(`create target record error : ${error}`);
      message.error("Error in Creating Ticket.");
    }
  };
  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Ticket ID" name="ticketId" key="ticketId">
          <Select style={{ width: 200 }}>
            {ticket.map((item) => (
              <Select.Option key={item.id} value={item.id}>
                {item.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Agent ID" name="agentId" key="agentId">
          <Select style={{ width: 200 }}>
            {supportEngineer.map((item) => (
              <Select.Option key={item.agentId} value={item.agentId}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Department ID" name="departmentId" key="departmentId">
          <Select style={{ width: 200 }}>
            {department.map((item) => (
              <Select.Option key={item.id} value={item.id}>
                {item.departmentName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Unit ID" name="unitId" key="unitId">
          <Select style={{ width: 200 }}>
            {unit.map((item) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Objective" name="objective" key="objective">
          <TextArea
            style={{
              height: 120,
              resize: "can resize",
            }}
          ></TextArea>
        </Form.Item>
        <Form.Item>
          <Button type="dashed" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default TargetCreate;
