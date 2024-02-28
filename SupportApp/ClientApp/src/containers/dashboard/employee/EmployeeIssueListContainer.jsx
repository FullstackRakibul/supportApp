import React, { useEffect, useState } from "react";
import SingleIssueDetailsShowCard from "../../../components/global/SingleIssueDetailsShowCard";
import tokenDetails from "../../../utils/tokenDetails";
import { AxiosInstance } from "../../../router/api";

const EmployeeIssueListContainer = ({ handleFunction }) => {
  const { role, EmpCode } = tokenDetails();
  const [ticketData, setTicketData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get(
        `/api/Tickets/getRecentRaisedTicketByCreator/${EmpCode}`
      );
      console.log(response.data);
      setTicketData(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {/* {ticketData.map((ticket) => (
        <SingleIssueDetailsShowCard
          key={ticket.id}
          id={ticket.id}
          title={ticket.title}
          description={ticket.description}
          status={ticket.status}
          handleFunction={handleFunction}
        />
      ))} */}
      {Array.isArray(ticketData) ? (
        ticketData.map((ticket) => (
          <SingleIssueDetailsShowCard
            key={ticket.id}
            id={ticket.id}
            title={ticket.title}
            description={ticket.description}
            status={ticket.status}
            raisedBy={ticket.createdBy}
            handleFunction={handleFunction}
          />
        ))
      ) : (
        <SingleIssueDetailsShowCard
          key={ticketData.id}
          id={ticketData.id}
          title={ticketData.title}
          description={ticketData.description}
          status={ticketData.status}
          raisedBy={ticketData.createdBy}
          handleFunction={handleFunction}
        />
      )}
    </>
  );
};

export default EmployeeIssueListContainer;
