import React, { useState, useEffect } from "react";
import { AxiosInstance } from "../../router/api";
import useAuthCheck from "../../utils/useAuthCheck";

import { Card, Col, Row, Statistic, Typography } from "antd";
const { Title, Text } = Typography;

import NoticeBoard from "../../containers/dashboard/NoticeBoard.jsx";
import MarqueeText from "./MarqueeText.jsx";
import Statistics from "./Statistics.jsx";

const DashboardDetails = () => {
  // useAuthCheck();
  const [detailsData, setDetailsdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get(
          "/dashboard/Dashboards/DashboardDetails"
        );
        setDetailsdata(response.data);

        console.log(response.data);
      } catch (error) {
        console.log(`data fatching error ! Error : ${error}`);
      }
    };
    fetchData();
  }, []);

  // Dashboard Details .....
  const calculateStatus5Tickets = () => {
    if (!detailsData || !detailsData.Tickets) return 0;

    return detailsData.Tickets.values.filter((ticket) => ticket.status === 5)
      .length;
  };

  return (
    <>
      <section>
        <Row gutter={16}>
          <div className="container mx-auto">
            <MarqueeText text="we are currently experiencing some technical difficulties with the HRM (Human Resource Management) dashboard due to lower than usual server configuration. As a result, you may encounter some challenges in loading the HRM dashboard.!" />
          </div>
        </Row>

        <Row className="p-3" gutter={16}>
          <NoticeBoard />
          <Statistics />
        </Row>
      </section>
    </>
  );
};

export default DashboardDetails;
