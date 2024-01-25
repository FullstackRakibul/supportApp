import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Row, Input, Upload, message } from "antd";
import axios from "axios";
import AxiosInstance from "../router/api";

const { TextArea } = Input;

const EmailCard = () => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);

      const response = await AxiosInstance.post(
        "/api/Email/ComposeMail",
        values
      );

      if (response.status === 200) {
        message.success("Mail Sent Successfully.");
        form.resetFields();
      } else {
        message.error("Sending Mail Failed !");
      }
    } catch (error) {
      console.log(`Form validation error : ${error}`);
      message.error("Mail Validation Error !!!");
    }
  };

  // form design
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const footerLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const uploadButtonProps = {
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  };

  return (
    <>
      <section className="container mx-auto">
        <Row className="flex justify-center items-center ">
          <Col span={12} className="">
            <Card
              type="inner"
              title="Compose Mail"
              headStyle={{
                backgroundColor: "#000",
                color: "#fff",
                fontFamily: "Montserrat",
              }}
            >
              <Form form={form} {...layout} labelAlign="left">
                <Form.Item
                  className="font-sans"
                  name="toEmail"
                  label="Email to"
                  rules={[
                    {
                      required: true,
                      message: "Please input email address!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  className="font-sans"
                  name="subject"
                  label="Subject"
                  rules={[
                    {
                      required: true,
                      message: "Please input mail subject!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="body"
                  label="Mail body"
                  rules={[
                    {
                      required: true,
                      message: "Please input Issue Description!",
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                  className="font-sans"
                  name="attachment"
                  label="Upload attachment"
                >
                  <Upload {...uploadButtonProps}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
                </Form.Item>
                <Form.Item {...footerLayout}>
                  <Button
                    onClick={handleSubmit}
                    type="primary"
                    className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white"
                  >
                    Send Mail
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default EmailCard;
