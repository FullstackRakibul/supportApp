import React, { useState } from "react";
import { Button, Upload, Form, Input } from "antd";
const { TextArea } = Input;
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "axios";
const Dashboard = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    attachment: "",
    ticketNumber: "",
    userId: "",
    agentId: "",
    priority: "",
    updatedAt: "",
  });
  const handleInput = (data) => {
    //data.persist();
    setFormData({ ...formData, [data.target.name]: data.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "https://localhost:7295/api/Ticket",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className=" flex justify-between">
        <div className="mx-auto p-2 bg-white rounded-md shadow-md ">
          <h2 className="text-2xl font-semibold mb-4">Create a Ticket</h2>
          <Form
            onSubmit={handleSubmit}
            className="p-5"
            encType="multipart/form-data"
          >
            <Form.Item
              // wrapperCol={{
              //   span: 16,
              // }}

              colon={false}
              name="title"
              label="Issue Title"
              rules={[
                {
                  required: true,
                },
              ]}
              labelAlign={"left"}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Issue Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item name="attachment" label="Attachment">
              <Upload.Dragger name="attachment">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
            <Button
              type="primary"
              htmlType={"submit"}
              className="text-md bg-primary text-white font-semibold rounded-sm hover:bg-white hover:text-primary hover:border-primary"
            >
              Create Ticket
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

// <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded">
//     <h2 className="text-2xl font-semibold mb-4">Create Ticket</h2>
//     <form onSubmit={handleSubmit}>
//         {/* Add form fields for each property in the Ticket model */}
//         {/* Example: */}
//         <div className="mb-4">
//             <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
//                 Title
//             </label>
//             <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={ticketData.title}
//                 onChange={handleChange}
//                 className="border rounded w-full p-2"
//                 required
//             />
//         </div>
//
//         {/* Repeat this pattern for other form fields */}
//
//         <button
//             type="submit"
//             className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700"
//         >
//             Create Ticket
//         </button>
//     </form>
// </div>
