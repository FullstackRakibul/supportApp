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
          <Col className="border-l-2 pl-2" span={5}>
            <p className="font-sm">
              <span className="font-sm font-sans">acknowledge by :</span>
              <span> Rakibul</span>
            </p>
            <p>
              <span>status :</span>
              <span>Processing</span>
            </p>
            <p>
              <span>type :</span>
              <span>Mail Issue</span>
            </p>
          </Col>
          <Col className="border-l-2 pl-2" span={11}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
            consectetur ratione hic, nisi cupiditate ex ea recusandae provident
            quibusdam molestiae maiores vero ab voluptate, dolores sunt quia
            accusantium voluptas quis.
          </Col>
          <Col
            className="border-l-2 pl-2 flex gap-1 flex-col items-center justify-around"
            span={5}
          >
            <ViewTicketButton id="69" />
            <DeleteTicketButton id="69" />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SingleIssueDetailsShowCard;
