import { Row, Col } from "antd";
import React from "react";

const SingleIssueDetailsShowCard = () => {
  return (
    <>
      <section className="p-3 rounded border">
        <div>
          <h3 className="font-sans font-semibold">Issue Title</h3>
        </div>

        <Row className="justify-around mx-auto gap-2">
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
