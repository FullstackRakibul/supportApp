import { Row, Col, Card, Form, Input, Button, message } from "antd";
import React from "react";
import { AxiosInstance } from "../../router/api";

function CreateTicketType() {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      const response = await AxiosInstance.post("/api/TicketTypes", values);
      //message.success(response.status);

      if (response.status === 201) {
        message.success("Type Create Successfully.");
        form.resetFields();
      } else {
        message.error("Type Create Failed !!!");
      }

      //message.success(`This form is submitted. ${response.data}`);
    } catch (error) {
      console.log(`this is formData error ${error}`);
      message.error("Error in Creating Type.");
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

  return (
    <>
      <section className="conatainer mx-auto">
        <Row className="flex justify-center items-center ">
          <Col span={12} className="">
            <Card
              type="inner"
              title="Add Ticket Type"
              headStyle={{
                backgroundColor: "#000",
                color: "#fff",
                fontFamily: "Montserrat",
              }}
            >
              <Form form={form} {...layout} labelAlign="left">
                <Form.Item
                  className="font-sans gap-5 "
                  name="typeName"
                  label="Add Type Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input Ticket Type Name !",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item {...footerLayout}>
                  <Button
                    onClick={handleSubmit}
                    type="primary"
                    className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white"
                  >
                    Create Issue Type
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default CreateTicketType;
