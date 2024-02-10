import React from "react";
import { Card, List, Typography } from "antd";

const { Title, Text } = Typography;

const NoticeBoard = () => {
  const notices = [
    {
      title: "New Department add notice !",
      content:
        "In order to add a new department, it is mandatory to provide the corresponding UNIT NAME. This ensures accurate organization and alignment of departments within our system. Thank you for your cooperation.",
    },
    {
      title: "New Section add notice !",
      content:
        "In order to add a new Section, it is mandatory to provide the corresponding UNIT NAME & DEPARTMENT NAME. This ensures accurate organization and alignment of departments within our system. Thank you for your cooperation.",
    },
    {
      title: "New Designation add notice !",
      content:
        "In order to add a new Designation, it is mandatory to provide the corresponding UNIT NAME. This ensures accurate organization and alignment of departments within our system. Thank you for your cooperation.",
    },
    {
      title: "New Wing add notice !",
      content:
        "In order to add a new Wing, it is mandatory to provide the corresponding UNIT NAME , DEPARTMENT NAME & SECTION NAME. This ensures accurate organization and alignment of departments within our system. Thank you for your cooperation.",
    },
    {
      title: "New Team add notice !",
      content:
        "In order to add a new Team, it is mandatory to provide the corresponding UNIT NAME , DEPARTMENT NAME , SECTION NAME & WING NAME. This ensures accurate organization and alignment of departments within our system. Thank you for your cooperation.",
    },
  ];
  return (
    <>
      <section>
        <div className="container mx-auto py-4">
          <Title level={3} className="mb-4 font-sans">
            Notice Board
          </Title>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notices.map((notice, index) => (
              <Card key={index} title={notice.title}>
                <Text>{notice.content}</Text>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NoticeBoard;
