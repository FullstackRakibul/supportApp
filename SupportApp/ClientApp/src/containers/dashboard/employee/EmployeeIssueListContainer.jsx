import React, { useEffect, useState } from "react";
import SingleIssueDetailsShowCard from "../../../components/global/SingleIssueDetailsShowCard";
import tokenDetails from "../../../utils/tokenDetails";
import { AxiosInstance } from "../../../router/api";

const EmployeeIssueListContainer = ({ handleFunction }) => {
  const { role, EmpCode } = tokenDetails();
  const [ticketData, setTicketData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log(EmpCode);
      // const response = await AxiosInstance.get(
      //   "/api/Tickets/getTicketByCreator",
      //   EmpCode
      // );
      //console.log(response.data);
      //setTicketData(response.data);
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
          handleFunction={handleFunction}
        />
      ))}
    </>
  );
};

export default EmployeeIssueListContainer;
