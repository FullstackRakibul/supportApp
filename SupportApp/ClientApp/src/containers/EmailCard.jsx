import React, { useState } from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import EmailList from "./EmailList";
import MailSendForm from "../components/MailSendForm";




const EmailCard = () => {
    const handleSendEmail = async (values) => {
        try {
          const mailRequest = {
            toEmail: values.toEmail,
            subject: values.subject,
            body: values.body,
          };
    
          // Make a POST request to your API endpoint to send the email
          await axios.post('https://localhost:7295/api/Email/sendMail', mailRequest);
          message.success('Email sent successfully');
        } catch (error) {
          console.error('Error sending email:', error);
          message.error('Failed to send email');
        }
      };

  return (
    <>
      <section className="flex flex-row items-center justify-center">
        <div className="container p-10 bg-white rounded-md shadow-md">
          <h1 className="p-3 font-sans text-2xl my-5 ">Send Mail From Here </h1>
          <MailSendForm onSendEmail={handleSendEmail} />
        </div>
      </section>
    </>
  );
};

// const EmailCard = () => {

//     const [formData, setFormData] = useState({
//         from: '',
//         to: '',
//         subject: '',
//         message: '',
//         attachment: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add logic for sending mail with formData
//         console.log('Sending mail with data:', formData);
//     };

//     return (
//         <>
//             <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-6 mb-6">
//                 <h2 className="text-2xl font-semibold mb-4">Compose Mail</h2>

//                 <form onSubmit={handleSubmit}>
//                     {/* Sender Information */}
//                     <div className="mb-4">
//                         <label className="block text-gray-600 text-sm font-medium mb-2">From:</label>
//                         <input
//                             type="text"
//                             name="from"
//                             value={formData.from}
//                             onChange={handleChange}
//                             className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
//                             placeholder="Your Name"
//                         />
//                     </div>

//                     {/* Recipient Information */}
//                     <div className="mb-4">
//                         <label className="block text-gray-600 text-sm font-medium mb-2">To:</label>
//                         <input
//                             type="text"
//                             name="to"
//                             value={formData.to}
//                             onChange={handleChange}
//                             className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
//                             placeholder="Recipient's Email"
//                         />
//                     </div>

//                     {/* Subject */}
//                     <div className="mb-4">
//                         <label className="block text-gray-600 text-sm font-medium mb-2">Subject:</label>
//                         <input
//                             type="text"
//                             name="subject"
//                             value={formData.subject}
//                             onChange={handleChange}
//                             className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
//                             placeholder="Subject"
//                         />
//                     </div>

//                     {/* Message Body */}
//                     <div className="mb-4">
//                         <label className="block text-gray-600 text-sm font-medium mb-2">Message:</label>
//                         <textarea
//                             name="message"
//                             rows="4"
//                             value={formData.message}
//                             onChange={handleChange}
//                             className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
//                             placeholder="Type your message here..."
//                         ></textarea>
//                     </div>
//                     <div className="mb-4">
//                     <label className="block text-gray-600 text-sm font-medium mb-2">
//                         Attachment:
//                     </label>
//                     <Upload
//                         action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
//                         value={formData.attachment}
//                         listType="picture"
//                     >
//                         <Button icon={<UploadOutlined />}>Upload</Button>
//                     </Upload>
//                     </div>

//                     {/* Send Button */}
//                     <button
//                         type="submit"
//                         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
//                     >
//                         Send Mail
//                     </button>
//                 </form>
//             </div>
//         </>
//     );
// };

// const EmailList = ({ emails, onSelectEmail }) => (
//     <div className="w-1/4 p-4 border-r overflow-y-auto">
//         <h2 className="text-xl font-semibold mb-4">Inbox</h2>
//         <ul>
//             {emails.map((email) => (
//                 <li
//                     key={email.id}
//                     className="cursor-pointer p-2 mb-2 rounded-md hover:bg-gray-100"
//                     onClick={() => onSelectEmail(email)}
//                 >
//                     <div className="font-bold">{email.sender}</div>
//                     <div className="truncate">{email.subject}</div>
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

// const EmailContent = ({ selectedEmail }) => (
//     <div className="flex-1 p-4">
//         {selectedEmail ? (
//             <div>
//                 <p className="font-bold">{selectedEmail.sender}</p>
//                 <p className="mb-4">{selectedEmail.subject}</p>
//                 <p>{selectedEmail.body}</p>
//             </div>
//         ) : (
//             <p>Select an email from the inbox.</p>
//         )}
//     </div>
// );
// const EmailCard = () => {
//     const [emails] = useState([
//         { id: 1, sender: 'John Doe', subject: 'Meeting Tomorrow', body: 'Hey, let\'s meet tomorrow.' },
//         { id: 2, sender: 'Alice Smith', subject: 'Project Update', body: 'Here is the latest project update.' },
//         { id: 3, sender: 'Bob Johnson', subject: 'Party Invitation', body: 'You\'re invited to the party on Friday.' },
//         // Add more emails as needed
//     ]);

//     const [selectedEmail, setSelectedEmail] = useState(null);

//     const handleSelectEmail = (email) => {
//         setSelectedEmail(email);
//     };

//   return (
//       <>
//           <div className="flex h-screen">
//               <EmailList emails={emails} onSelectEmail={handleSelectEmail} />
//               <EmailContent selectedEmail={selectedEmail} />
//           </div>
//       </>
//   )
// }

export default EmailCard;
