import React from "react";
import {
  FilePdfOutlined,
  MessageOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";

const SingleTicketCard = (props) => {
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
