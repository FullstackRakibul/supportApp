import React, {useState} from "react";
import {Button, Upload} from "antd";
import {InboxOutlined, UploadOutlined} from "@ant-design/icons";
import axios from "axios";
const Dashboard = () => {

    // State to track form values
    const [formData, setFormData] = useState({

        title: '',
        description: '',
        userId: null,
        agentId: null,
        chatId: null,
        attachment: '',
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTicketData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7295/api/Ticket');
            console.log(response.data);
            // Handle success, e.g., show a success message or redirect
        } catch (error) {
            console.error('Error creating ticket:', error);
            // Handle error, e.g., show an error message to the user
        }
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
                          listType="file"
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
