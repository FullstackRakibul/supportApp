import { Row, Col } from "antd";
import React from "react";
import ViewTicketButton from "../CRUD/ViewTicketButton";
import DeleteTicketButton from "../CRUD/DeleteTicketButton";
import { Typography } from "antd";
const { Paragraph } = Typography;
const SingleIssueDetailsShowCard = (props) => {
  return (
    <>
      <section className="border-l-2 border-blue-500 pl-4 py-2 bg-white rounded-lg shadow-md">
        <div className="pb-2">
          <h3 className="font-sans font-semibold">{props.title}</h3>
        </div>

        <Row className="justify-around">
          <Col className="pl-4" xs={24} sm={24} md={8}>
            <p className="text-sm">
              <span className="font-semibold">Acknowledged By:</span> Rakibul
            </p>
            <p>
              <span className="font-semibold">Status:</span> {props.status}
            </p>
            <p>
              <span className="font-semibold">Type:</span> Mail Issue
            </p>
            <p>
              <span className="font-semibold">Raised By:</span> employee01
            </p>
          </Col>
          <Col className="border-l-2 pl-2" span={11}>
            <Paragraph ellipsis={{ rows: 3 }}>{props.description}</Paragraph>
          </Col>
          <Col
            className="flex gap-1 flex-col items-center justify-around"
            span={5}
          >
            <ViewTicketButton id={props.id} />
            <DeleteTicketButton id={props.id} />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SingleIssueDetailsShowCard;
