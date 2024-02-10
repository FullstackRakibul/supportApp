import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const MarqueeText = ({ text }) => {
  return (
    <>
      <div className="marquee-container">
        <Title level={5} className="marquee-text font-sans">
          {text}
        </Title>
      </div>
    </>
  );
};

export default MarqueeText;
