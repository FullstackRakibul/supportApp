import React, {useState} from "react";
import {Button, Upload} from "antd";
import {InboxOutlined, UploadOutlined} from "@ant-design/icons";
const Dashboard = () => {

    // State to track form values
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        attachment:'',
        priority: 'Low',
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform actions with formData (e.g., send to server)
        console.log(formData);
        // Reset form after submission
        setFormData({
            title: '',
            description: '',
            priority: 'Low',
        });
    };
    
  return (
    <>
      <section className=" flex justify-between">
          <div className=" w-1/2 mx-auto p-4 bg-white rounded-md shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Create a Ticket</h2>
              <form onSubmit={handleSubmit}>
                  {/* Title */}
                  <div className="mb-4">
                      <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                          Title
                      </label>
                      <input
                          type="text"
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full border rounded-md"
                          required
                      />
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                          Problem Description
                      </label>
                      <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full border rounded-md resize-none"
                      ></textarea>
                  </div>
                  <div className="mb-4">
                      <label htmlFor="Attachment" className="block text-sm font-medium text-gray-600">
                          Attachment
                      </label>
                      <Upload
                          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                          value={formData.attachment}
                          listType="picture"
                      >
                          <Button icon={<UploadOutlined />}>Upload</Button>
                      </Upload>
                  </div>
                  <div>
                      <Button htmlType="submit" className="text-black text-md h-full  px-4 py-2 rounded-md ">Create Ticket</Button>
                  </div>
              </form>
          </div>
      </section>
    </>
  );
};

export default Dashboard;
