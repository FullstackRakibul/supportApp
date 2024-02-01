import React, { useEffect, useState } from "react";
import {
  FilePdfOutlined,
  MessageOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import AxiosInstance from "../../router/api";

const SingleTicketCard = () => {
  const [singleTicketData, setSingleTicketData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      // const response = AxiosInstance.get(
      //   "/api/Tickets/getTicketDetails",
      // );
      // setSingleTicketData(response.data);
      // console.log(`single ticket data : ${response}`);
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="container p-3">
        <div className="">
          <h3 className="font-sans font-semibold text-xl">
            Here will be issue title
          </h3>
          <div className=" flex gap-2">
            <span className="font-sans font-semibold "> 23 Jan 2024</span>
            <span className="font-sans font-semibold">
              status : working on it
            </span>
          </div>
        </div>
        <Tabs
          defaultActiveKey="1"
          items={[MessageOutlined, FilePdfOutlined, ReconciliationOutlined].map(
            (Icon, i) => {
              const id = String(i + 1);
              return {
                key: id,
                label: `Chat ${id}`,
                children: `attachment ${id}`,
                icon: <Icon />,
              };
            }
          )}
        />
      </section>
    </>
  );
};

export default SingleTicketCard;
