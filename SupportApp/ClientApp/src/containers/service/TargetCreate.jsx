import React from "react";
import { Button, Form, Input, message, Select } from "antd";
import AxiosInstance from "../../router/api";

const TargetCreate = () => {
  const [form] = Form.useForm();
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      const response = await AxiosInstance.post("/api/Targets");
      console.log(response.data);
      if (response.status === 200) {
        message.success("Ticket Create Successfully.");
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
        <Form.Item label="Ticket ID" name="tickedId">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Agent ID" name="agentId">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Department ID" name="departmentId">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Unit ID" name="unitId">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Objective" name="objective">
          <Input />
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
