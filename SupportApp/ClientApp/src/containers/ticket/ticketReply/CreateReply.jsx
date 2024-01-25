import { Form, Button, Input, message } from "antd";
import React from "react";
import AxiosInstance from "../../../router/api";

const CreateReply = () => {
  const [form] = Form.useForm();
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      values.ticketId = 5;
      values.reviewerId = 53324;
      //values.createdAt = new Date();

      //console.log(values);
      const response = await AxiosInstance.post("/api/Reviews", values);
      console.log(response.data);
      message.success("reply create successfully.");
    } catch (error) {
      message.error("Reply create failed");
      //console.log(error);
    }
  };

  return (
    <>
      <div className="container ax-auto">
        <Form form={form}>
          <Form.Item
            name="reviewNote"
            label="reply to this ticket"
            className="font-sans text-xl font-semibold gap-5 "
          >
            <Input />
          </Form.Item>
          <Button
            onClick={handleSubmit}
            type="primary"
            className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white"
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateReply;
