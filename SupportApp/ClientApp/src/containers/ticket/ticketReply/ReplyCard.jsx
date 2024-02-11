import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../../../router/api";
import { Button, Input, Form, Tabs } from "antd";
import SingleReplyCard from "./SingleReplyCard";
import CreateReply from "./CreateReply";

const ReplyCard = () => {
  const [reply, setReply] = useState([]);
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      //console.log(values);
      //console.log(ticketId.value);
      const response = await AxiosInstance.get(
        `/api/Reviews/TicketWiseReply?id=${ticketId.value}`
      );
      //console.log(response.data);
      setReply(response.data);
    } catch (error) {
      console.log(error);
    }

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await AxiosInstance.get(
    //       `/api/Reviews/TicketWiseReply?id=${ticketId}`
    //     );
    //     console.log(response.data);
    //     setReply(response.data);
    //   };
    //   fetchData();
    // }, []);
    // console.log(reply);
  };
  return (
    <>
      <section>
        <h3 className="font-sans text-2xl">Reply Card</h3>
        <Form form={form}>
          <Form.Item name="ticketId" label="Enter Ticket ID">
            <Input />
          </Form.Item>
          <Button
            type="primary"
            className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white"
            onClick={handleSubmit}
          >
            see messages
          </Button>
        </Form>
        <div className="container p-3">
          {reply.map((item) => (
            <div key={item.id} className="flex flex-col">
              <SingleReplyCard
                reviewNote={item.reviewNote}
                reviewerId={item.reviewerId}
                createdAt={item.createdAt}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <CreateReply />
      </section>
    </>
  );
};

export default ReplyCard;
