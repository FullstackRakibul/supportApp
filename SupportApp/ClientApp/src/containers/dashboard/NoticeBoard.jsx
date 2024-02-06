import React from "react";
import { Card, List, Typography } from "antd";

const { Title, Text } = Typography;

const NoticeBoard = () => {
  const notices = [
    {
      title: "Important Notice",
      content:
        "Please be advised that the office will be closed on Friday, January 14th, due to inclement weather.",
    },
    {
      title: "Maintenance Alert",
      content:
        "Scheduled maintenance will be performed on our servers this Saturday from 9:00 PM to 11:00 PM. Expect temporary service interruptions.",
    },
    {
      title: "Holiday Closure",
      content:
        "In observance of Martin Luther King Jr. Day, our office will be closed on Monday, January 17th. Normal business hours will resume on Tuesday.",
    },
  ];
  return (
    <>
      <section>
        <div className="container mx-auto py-8">
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
