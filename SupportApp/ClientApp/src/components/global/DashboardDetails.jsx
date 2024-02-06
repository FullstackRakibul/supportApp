import React, { useState, useEffect } from "react";
import AxiosInstance from "../../router/api";
import useAuthCheck from "../../utils/useAuthCheck";

import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import Clock from "./Clock";
import styled from "styled-components";

import NoticeBoard from "../../containers/dashboard/NoticeBoard.jsx";

const DashboardDetails = () => {
  useAuthCheck();
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
        <Row className="p-3" gutter={16}>
          <Clock />
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Completion of Issues"
                value={86.48}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Idle Issues"
                value={13.52}
                precision={2}
                valueStyle={{
                  color: "#cf1322",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
        <Row className="p-3" gutter={16}>
          <NoticeBoard />
        </Row>
      </section>
    </>
  );
};

export default DashboardDetails;
