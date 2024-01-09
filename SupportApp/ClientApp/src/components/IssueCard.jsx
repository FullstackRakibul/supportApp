import React from "react";

import { Card } from "antd";
const { Meta } = Card;

const IssueCard = (props) => {
  return (
    <>
      <Card
        className="mx-auto font-sans font-semibold"
        size="small"
        title={props.issueTitle}
        //extra={props.issueCreateDate}
        extra={
          <span style={{ color: "white", cursor: "pointer" }}>
            {props.issueCreateDate}
          </span>
        }
        // style={{
        //   width: 600,
        // }}
        style={{ width: 600, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        headStyle={{
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "Montserrat",
        }}
      >
        <p>{props.issueDescription}</p>
        <Meta
          title={`acknowledge by : ${props.assignAgent}`}
          description={`status : ${props.issueStatus}`}
        />
      </Card>
    </>
  );
};

export default IssueCard;
