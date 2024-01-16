import React from "react";
import { Button, Form, Input, message, Select } from "antd";
import AxiosInstance from "../../router/api";

const TargetCreate = () => {
  const [form] = Form.useForm();
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log(form.validateFields());
      const response = await AxiosInstance.post("/api/Targets");
      console.log(response);
      // if (response.status === 200) {
      //   message.success("Ticket Create Successfully.");
      //   form.resetFields();
      // } else {
      //   message.error("Error in Creating Ticket.");
      // }
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
        <Form.Item label="Ticket ID">
          <Input type="number" name="tickedId" />
        </Form.Item>
        <Form.Item label="Agent ID">
          <Input type="number" name="agentId" />
        </Form.Item>
        <Form.Item label="Department ID">
          <Input type="number" name="departmentId" />
        </Form.Item>
        <Form.Item label="Unit ID">
          <Input type="number" name="unitId" />
        </Form.Item>
        <Form.Item label="Objective">
          <Input name="objective" />
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
