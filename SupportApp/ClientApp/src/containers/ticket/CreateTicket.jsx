import React from "react";
import { NavLink } from "react-router-dom";
const { TextArea } = Input;
import { InboxOutlined, PlusCircleOutlined } from "@ant-design/icons";
import {
  Col,
  Row,
  Card,
  Form,
  Input,
  Button,
  Upload,
  message,
  Select,
} from "antd";
const { Dragger } = Upload;
import axios from "axios";

// component load

import TickeTypeDropDown from "../../components/TicketTypeDropDown.jsx";

const props = {
  name: "attachment",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} attachment uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} attachment upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

function CreateTicket() {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      //console.log(values);
      const response = await axios.post(
        "https://localhost:7295/api/Ticket",
        values
      );
      //console.log(` This is a request error ${response.data}`);

      //   const formData = new FormData();
      //   formData.append("title", values.title);
      //   formData.append("description", values.description);
      //   formData.append("attachment", values.attachment[0]);
      //   const response = await axios.post(
      //     "https://localhost:7295/api/Ticket",
      //     formData,
      //     {
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //       },
      //     }
      //   );

      if (response.status === 200) {
        message.success("Ticket Create Successfully.");
        form.resetFields();
      } else {
        message.error("Error in Creating Ticket.");
      }

      //console.log("Form values", values);
    } catch (error) {
      console.log(`this is formData error ${error}`);
      message.error("Error in Creating Ticket.");
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
      <section className="conatainer mx-auto">
        <Row className="flex justify-center items-center ">
          <Col span={12} className="">
            <Card
              type="inner"
              title="Create Issue Ticket"
              headStyle={{
                backgroundColor: "#000",
                color: "#fff",
                fontFamily: "Montserrat",
              }}
            >
              <Form form={form} {...layout} labelAlign="left">
                <Form.Item
                  className="font-sans gap-5 "
                  name="ticketTypeId"
                  label="Select Ticket Type"
                  rules={[
                    {
                      required: true,
                      message: "Please input Issue Type!",
                    },
                  ]}
                >
                  {/* <Select /> */}
                  <TickeTypeDropDown name="ticketTypeId" />

                  <NavLink to="/createTicketType">
                    <Button
                      type="primary"
                      className="font-sans font-semibold bg-primary"
                      icon={<PlusCircleOutlined />}
                    ></Button>
                  </NavLink>
                </Form.Item>
                <Form.Item
                  className="font-sans"
                  name="title"
                  label="Issue Title"
                  rules={[
                    {
                      required: true,
                      message: "Please input Issue Title!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="description"
                  label="Issue Description"
                  rules={[
                    {
                      required: true,
                      message: "Please input Issue Description!",
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
                {/* <Form.Item
                  name="updatedAt"
                  label="UpdatedAt"
                  rules={[
                    {
                      required: true,
                      message: "Please input Issue Description!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item> */}
                <Form.Item
                  className="font-sans"
                  name="attachment"
                  label="Upload Files"
                >
                  {/* <Upload {...uploadButtonProps}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload> */}
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibited
                      from uploading company data or other banned files.
                    </p>
                  </Dragger>
                </Form.Item>
                <Form.Item {...footerLayout}>
                  <Button
                    onClick={handleSubmit}
                    type="primary"
                    className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white"
                  >
                    Submit
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

export default CreateTicket;

// const response = await axios.post("https://your-api-endpoint", values);

//         // Check if the request was successful
//         if (response.status === 200) {
//             // Show a success message
//             message.success("Ticket created successfully");

//             // Reset the form
//             form.resetFields();
//         } else {
//             // Show an error message
//             message.error("Error creating ticket. Please try again.");
//         }
