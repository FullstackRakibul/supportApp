import React from "react";
import { Row } from "antd";
import NoticeBoard from "../NoticeBoard.jsx";
import MarqueeText from "../../../components/global/MarqueeText.jsx";
const EmployeeWelcome = () => {
  return (
    <>
      <Row gutter={16}>
        <div className="container mx-auto">
          <MarqueeText text="we are currently experiencing some technical difficulties with the HRM (Human Resource Management) dashboard due to lower than usual server configuration. As a result, you may encounter some challenges in loading the HRM dashboard.!" />
        </div>
      </Row>
      <Row className="p-3" gutter={16}>
        <NoticeBoard />
      </Row>
    </>
  );
};

export default EmployeeWelcome;
