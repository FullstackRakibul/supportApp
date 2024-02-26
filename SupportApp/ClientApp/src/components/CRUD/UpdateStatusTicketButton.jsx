import { useState, React, useEffect } from "react";
import { Modal, Form, Select, Button, message, Input } from "antd";
import { AxiosInstance } from "../../router/api";

const UpdateStatusTicketButton = ({ visible, onCancel, issueId }) => {
  const [form] = Form.useForm();
  const [ticketStatus, setTicketStatus] = useState([]);
  const [ticketPriority, setTicketPriority] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const responseStatus = await AxiosInstance.get(
        "/api/Tickets/ticketStatus"
      );
      const responsePriority = await AxiosInstance.get(
        "/api/Tickets/ticketPriority"
      );
      setTicketStatus(responseStatus.data);
      setTicketPriority(responsePriority.data);
    };
    fetchData();
  }, []);

  const handleStatusUpdate = async () => {
    try {
      const values = await form.validateFields();
      values.id = issueId;
      console.log(values);
      const response = AxiosInstance.put(
        "/api/Tickets/updateTicketStatus",
        values
      );
      console.log(response);
      message.success("Ticket Status Updated!");
      window.location.reload();
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
            Update Status
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Select Status"
            name="status"
            rules={[{ required: true, message: "Please select an status" }]}
          >
            <Select style={{ width: 470 }}>
              {ticketStatus.map((item, index) => (
                <Select.Option key={index} value={index}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Select Priority" name="priority">
            <Select style={{ width: 470 }}>
              {ticketPriority.map((item, index) => (
                <Select.Option key={index} value={index}>
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

export default UpdateStatusTicketButton;
