import { Row, Col } from "antd";
import React from "react";

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
          <Col className="bg-primary" span={7}>
            test 01
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SingleIssueDetailsShowCard;
