import { Row, Col } from "antd";
import React from "react";
import ViewTicketButton from "../CRUD/ViewTicketButton";
import DeleteTicketButton from "../CRUD/DeleteTicketButton";

const SingleIssueDetailsShowCard = () => {
  return (
    <>
      <section className="p-3 rounded border">
        <div className="pb-2">
          <h3 className="font-sans font-semibold">
            Single Issue Details Show Card{" "}
          </h3>
        </div>

        <Row className="justify-around">
          <Col className="bg-primary" span={7}>
            test 01
          </Col>
          <Col className="bg-primary" span={7}>
            test 01
          </Col>
          <Col className="border rounded flex justify-around p-1" span={7}>
            <ViewTicketButton id="69" />
            <DeleteTicketButton id="69" />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SingleIssueDetailsShowCard;
