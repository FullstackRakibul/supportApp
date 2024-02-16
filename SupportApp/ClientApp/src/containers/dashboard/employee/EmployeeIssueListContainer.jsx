import React, { useEffect, useState } from "react";
import SingleIssueDetailsShowCard from "../../../components/global/SingleIssueDetailsShowCard";
import { AxiosInstance } from "../../../router/api";

const EmployeeIssueListContainer = () => {
  const [ticketData, setTicketData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get("/api/Tickets");
      console.log(response.data);
      setTicketData(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {ticketData.map((ticket) => (
        <SingleIssueDetailsShowCard
          key={ticket.id}
          id={ticket.id}
          title={ticket.title}
          description={ticket.description}
          status={ticket.status}
        />
      ))}
    </>
  );
};

export default EmployeeIssueListContainer;
