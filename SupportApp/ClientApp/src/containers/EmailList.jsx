import React, { useEffect, useState } from "react";
import axios from "axios";

import { Table } from "antd";

const EmailList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get("https://localhost:7295/api/Ticket");
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);
  console.log(tickets);

  const columns = [
    {
      title: "Ticket Number",
      dataIndex: "ticketNumber",
      key: "ticketNumber",
    },
    {
      title: "Ticket Description",
      dataIndex: "description",
      key: "description",
      render: (text) => truncateWords(text, 20),
    },
    {
      title: "MessageId",
      dataIndex: "messageId",
      key: "messageId",
    },
    {
      title: "From",
      dataIndex: "fromEmail",
      key: "fromEmail",
    },
  ];

  return (
    <section className="flex items-center justify-center">
      <div className="container p-3 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Ticket List</h1>
        <Table dataSource={tickets} columns={columns} />
      </div>
    </section>
  );
};

// const EmailList = () => {
//   const [tickets, setTickets] = useState([]);
//   useEffect(() => {
//     const fetchTickets = async () => {
//       try {
//         const response = await axios.get("https://localhost:7295/api/Ticket");
//         setTickets(response.data);
//       } catch (error) {
//         console.error("Error fetching tickets:", error);
//       }
//     };
//     fetchTickets();
//   }, []);

//   return (
//     <>
//       <section className="flex items-center justify-center">
//         <div className="container p-3 rounded-md shadow-lg">
//           <h1 className="text-2xl font-bold mb-4">Ticket List</h1>
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b">Ticket Number</th>
//                 <th className="py-2 px-4 border-b">Ticket Description</th>
//                 <th className="py-2 px-4 border-b">MessageId</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tickets !== null &&
//                 tickets.map((ticket) => (
//                   <tr key={ticket.id} className="border-b">
//                     <td className="py-2 px-4">{ticket.ticketNumber}</td>
//                     <td className="py-2 px-4">{truncateWords(ticket.description, 20)}</td>
//                     <td className="py-2 px-4">{ticket.messageId}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   );
// };

const truncateWords = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

export default EmailList;
