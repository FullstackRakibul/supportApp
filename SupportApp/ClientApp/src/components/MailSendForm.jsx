import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

const MailSendForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    onSendEmail(values);
    form.resetFields();
  };

  const onSendEmail = async (event) => {
    event.preventDefault();

    var response = await axios.post("https://localhost:7295/api/", form.values);
    console.log(response);
  };
  return (
    <>
      <Form form={form} name="emailForm" onFinish={onFinish}>
        <Form.Item
          label="To Email"
          name="toEmail"
          rules={[
            { required: true, message: "Please enter the recipient email" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Subject"
          name="subject"
          rules={[
            { required: true, message: "Please enter the email subject" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Body"
          name="body"
          rules={[{ required: true, message: "Please enter the email body" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          {/* <Button type="primary" htmlType="submit">
            Send Email
          </Button> */}
          <Button
            type="submit"
            htmlType="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Send Mail
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default MailSendForm;
