import React from "react";
import userDetails from "../../utils/userDetails";
import { Card, Col, Row, Statistic, Typography } from "antd";
import MarqueeText from "../../components/global/MarqueeText";
import Statistics from "../../components/global/Statistics";
const AgentOverview = () => {
  const { email, name, empCode, phoneNumber } = userDetails();

  return (
    <>
      <section>
        <Row gutter={16}>
          <div className="container mx-auto">
            <MarqueeText text="we are currently experiencing some technical difficulties with the HRM (Human Resource Management) dashboard due to lower than usual server configuration. As a result, you may encounter some challenges in loading the HRM dashboard.!" />
          </div>
        </Row>
        <Statistics />
        <div className="p-3 bg-warning">
          <p className="font-sans text-primary">{email}</p>
          <p className="font-sans text-primary">{name}</p>
          <p className="font-sans text-primary">{empCode}</p>
          <p className="font-sans text-primary">{phoneNumber}</p>
        </div>
      </section>
    </>
  );
};

export default AgentOverview;
