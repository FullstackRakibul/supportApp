import React, { useState } from "react";
import { Modal, Button, Select, message } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { AxiosInstance } from "../../router/api";

const UpdateTicketStatusModal = ({ visible, onCancel, issueId }) => {
  const [loading, setLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const { Option } = Select;

  const handleStatusChange = (value) => {
    setSelectedStatus(value);
  };

  const handleUpdateStatus = async () => {
    try {
      setLoading(true);
      const response = await AxiosInstance.put(
        `/api/Targets/updateStatus/${issueId}`,
        {
          status: selectedStatus,
        }
      );
      message.success("Ticket status updated successfully");
      setLoading(false);
      onCancel();
    } catch (error) {
      message.error("Error updating ticket status");
      setLoading(false);
    }
  };
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const [statusModalVisible, setStatusModalVisible] = useState(false);

  const handleUpdateTicketStatus = (id) => {
    setSelectedTicketId(id);
    setStatusModalVisible(true);
  };

  return (
    <>
      <Button
        type="primary"
        className="bg-primary w-32  text-white font-sans font-xl font-normal hover:bg-white"
        icon={<EditOutlined />}
        onClick={() => handleUpdateTicketStatus(issueId)}
      >
        Update
      </Button>

      <Modal
        visible={visible}
        title="Update Ticket Status"
        onCancel={onCancel}
        footer={[
          <Button key="cancel" onClick={onCancel}>
            Cancel
          </Button>,
          <Button
            key="update"
            type="primary"
            loading={loading}
            onClick={handleUpdateStatus}
          >
            Update
          </Button>,
        ]}
      >
        <p>Select status:</p>
        <Select
          defaultValue="Select status"
          style={{ width: 200 }}
          onChange={handleStatusChange}
        >
          <Option value="InProgress">In Progress</Option>
          <Option value="Resolved">Resolved</Option>
          <Option value="Closed">Closed</Option>
        </Select>
      </Modal>
    </>
  );
};

export default UpdateTicketStatusModal;
