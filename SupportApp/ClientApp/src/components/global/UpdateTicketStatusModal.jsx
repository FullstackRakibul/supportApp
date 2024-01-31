import { useState, React, useEffect } from "react";
import { Modal, Form, Select, Button, message, Input } from "antd";
import AxiosInstance from "../../router/api";

const UpdateTicketStatusModal = ({ visible, onCancel, issueId }) => {
  const [form] = Form.useForm();
  const [ticketStatus, setTicketStatus] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get("/api/Tickets/ticketStatus");
      setTicketStatus(response.data);
    };
    fetchData();
  }, []);

  const handleStatusUpdate = async () => {
    try {
      const values = await form.validateFields();
      values.ticketId = issueId;
      console.log(values);

      message.success("Ticket Status Updated!");
    } catch (error) {
      console.log("status update error on form.");
    }
  };

  return (
    <>
      <Modal
        title="Ticket Status"
        open={visible}
        onCancel={onCancel}
        footer={[
          <Button
            className="bg-primary"
            type="primary"
            key="cancel"
            onClick={onCancel}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            className="bg-primary"
            type="primary"
            onClick={handleStatusUpdate}
          >
            Assign Agent
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Select Status"
            name="status"
            rules={[{ required: true, message: "Please select an status" }]}
          >
            {/* Replace the options with your actual data source for agents */}
            <Select style={{ width: 470 }}>
              {ticketStatus.map((item) => (
                <Select.Option key={item.id} value={item}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateTicketStatusModal;
