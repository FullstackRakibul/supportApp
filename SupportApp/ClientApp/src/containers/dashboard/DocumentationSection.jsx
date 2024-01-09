import React from "react";
import { Col, Row, message, Card, List, Avatar } from "antd";
import { NavLink } from "react-router-dom";

const data = [
  {
    title: "Submit an Issue",
    avatar: <span className="material-symbols-outlined text-black">draw</span>,
  },
  {
    title: "Issue form mail",
    avatar: (
      <span className="material-symbols-outlined text-black">contact_mail</span>
    ),
  },
  {
    title: "Issue Type",
    avatar: (
      <span className="material-symbols-outlined text-black">
        checklist_rtl
      </span>
    ),
  },
];

function DocumentationSection() {
  return (
    <>
      <Row className="flex flex-col gap-3">
        <h3 className="text-xl font-sans font-semibold"> Documentation </h3>
        <p className="font-sans"> Explore All the features on your own. </p>
        <div className="flex flex-row gap-2">
          <Col span={4} className="">
            <Card title="Open Ticket" className="">
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item className="hover:bg-[#f1f1f1] hover:rounded-sm hover:bg-clip-padding">
                    <NavLink to="/" className="w-full">
                      <List.Item.Meta
                        className="font-sans font-semibold"
                        avatar={<Avatar src={item.avatar} />}
                        title={item.title}
                      />
                    </NavLink>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={3}></Col>
        </div>
      </Row>
    </>
  );
}

export default DocumentationSection;
