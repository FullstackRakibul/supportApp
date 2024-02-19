import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../../router/api";
import { useParams } from "react-router-dom";
import userRole from "../../utils/userRole";
import {
  Button,
  Input,
  Form,
  Tabs,
  List,
  Tooltip,
  Tag,
  Avatar,
  message,
} from "antd";
import moment from "moment";
import { UserOutlined } from "@ant-design/icons";

const ReviewCard = (ticketId) => {
  const [replies, setReplies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch reviews on component mount and ticket ID change
  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      setError(null);

      try {
        const ticketId = 5;
        const response = await AxiosInstance.get(
          `/api/Reviews/TicketWiseReply?id=${ticketId}`
        );
        console.log(response.data);
        setReplies(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [ticketId]);

  const handleSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
    // if (!values.reviewNote) {
    //   return console.error("Reply content is required");
    // }

    try {
      values.ticketId = 5;
      values.reviewerId = userRole();
      const response = await AxiosInstance.post("/api/Reviews", values);
      console.log(response.data);
      setReplies([...replies, response.data]);
      form.resetFields();
    } catch (error) {
      console.error(error);
    }
  };

  const [form] = Form.useForm();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {loading && (
          <p className="text-center mt-4 font-normal">Loading comments...</p>
        )}
        {error && (
          <p className="text-center mt-4 text-red-500">Error: {error}</p>
        )}
        {replies.length > 0 && (
          <List
            itemLayout="horizontal"
            dataSource={replies}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                      <span className="font-semibold text-xl">
                        <Avatar
                          style={{
                            backgroundColor: "#87d068",
                          }}
                          icon={<UserOutlined />}
                        />
                      </span>
                    </div>
                  }
                  title={
                    <div className="font-semibold font-sans text-primary">
                      ID : {item.reviewerId} -
                      <Tooltip
                        title={moment(item.createdAt).format(
                          "MMMM Do YYYY, hh:mm a"
                        )}
                      >
                        <span className="ml-2 text-gray-500 font-normal">
                          {moment(item.createdAt).fromNow()}
                        </span>
                      </Tooltip>
                    </div>
                  }
                  description={
                    <span className="font-sans text-primary ">
                      {item.reviewNote}
                    </span>
                  }
                />
                {item.tags && (
                  <List.Item.Meta
                    avatar={
                      <span className="w-7 h-7 rounded-full bg-green-100 text-green-500 font-bold">
                        {item.tags.join(", ")}
                      </span>
                    }
                    title={<span className="font-semibold">Tags:</span>}
                  />
                )}
              </List.Item>
            )}
          />
        )}
        <div className="  bg-white p-4 border-t border-gray-200">
          <h3 className="text-2xl font-semibold mb-4">
            Review and Conversation
          </h3>
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              name="reviewNote"
              label="Write a review or reply"
              rules={[
                {
                  required: true,
                  message: "Please enter your review or reply",
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-primary text-white"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
