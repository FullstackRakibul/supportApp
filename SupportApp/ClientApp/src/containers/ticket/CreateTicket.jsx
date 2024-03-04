import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const { TextArea } = Input;
import { InboxOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Col, Row, Card, Form, Input, Button, Upload, message } from "antd";
import tokenDetails from "../../utils/tokenDetails.jsx";

const { Dragger } = Upload;

// component load

import TickeTypeDropDown from "../../components/TicketTypeDropDown.jsx";
import { AxiosInstance } from "../../router/api.js";
import DepartmentDropdown from "../../components/global/DepartmentDropdown.jsx";
import UnitDropdown from "../../components/global/UnitDropdown.jsx";
import useAuthCheck from "../../utils/useAuthCheck.jsx";
import axios from "axios";

const props = {
  name: "attachment",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} attachment uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} attachment upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const CreateTicket = () => {
  useAuthCheck();
  const { role, EmpCode } = tokenDetails();
  const [form] = Form.useForm();
  const [selectedTicketTypeId, setSelectedTicketTypeId] = useState(null);
  const [selectedDepartmentId, setselectedDepartmentId] = useState(null);
  const [selectedUnitId, setselectedUnitId] = useState(null);

  const handleTicketTypeChange = (ticketTypeId) => {
    setSelectedTicketTypeId(ticketTypeId);
  };

  const handleDepartmentSelect = (departmentId) => {
    setselectedDepartmentId(departmentId);
  };

  const handleUnitSelect = (unitId) => {
    setselectedUnitId(unitId);
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      values.ticketTypeId = selectedTicketTypeId;
      values.departmentId = selectedDepartmentId;
      values.unitId = selectedUnitId;
      values.createdBy = EmpCode;

      console.log(values);
      const response = await AxiosInstance.post(
        "/api/Tickets/createTicketWithTarget",
        values
      );

      console.log(response.data);
      console.log(`status code :${response.status}`);
      if (response.status === 200) {
        message.success("Ticket Create Successfully.");
        form.resetFields();
      } else {
        message.error("Error in Creating Ticket.");
      }
    } catch (error) {
      console.log(`catching formData error : ${error}`);
      message.error("catch Error in Creating Ticket.");
    }
  };

  // form design
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const footerLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const uploadButtonProps = {
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  };

  return (
    <>
      <section className="conatainer mx-auto">
        <h3 className="font-bengali font-normal text-xl">
          নতুন টিকেট তৈরী করুন :
        </h3>
        <Row className="flex justify-center items-center ">
          <Col span={12} className="">
            <Card
              type="inner"
              title="Create Issue Ticket"
              headStyle={{
                backgroundColor: "#002A53",
                color: "#fff",
                fontFamily: "Montserrat",
              }}
            >
              <Form form={form} {...layout} labelAlign="left">
                <Form.Item
                  className="font-sans gap-5 "
                  label="Select Ticket Type"
                  name="ticketTypeId"
                >
                  <TickeTypeDropDown
                    onTicketTypeChange={handleTicketTypeChange}
                  />

                  <NavLink to="/createTicketType">
                    <Button
                      type="primary"
                      className="font-sans font-semibold bg-primary"
                      icon={<PlusCircleOutlined />}
                    ></Button>
                  </NavLink>
                </Form.Item>
                <Form.Item
                  className="font-sans gap-5 "
                  label="Select Department"
                  name="departmentId"
                >
                  <DepartmentDropdown
                    onDepartmentSelect={handleDepartmentSelect}
                  />
                </Form.Item>
                <Form.Item
                  className="font-sans gap-5 "
                  label="Select Unit"
                  name="unitId"
                >
                  <UnitDropdown onUnitSelect={handleUnitSelect} />
                </Form.Item>

                <Form.Item
                  className="font-sans"
                  name="title"
                  label="Issue Title"
                  rules={[
                    {
                      required: true,
                      message: "Please input Issue Title!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="description"
                  label="Issue Description"
                  rules={[
                    {
                      required: true,
                      message: "Please input Issue Description!",
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                  className="font-sans"
                  name="attachment"
                  label="Upload Files"
                >
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibited
                      from uploading company data or other banned files.
                    </p>
                  </Dragger>
                </Form.Item>
                <Form.Item {...footerLayout}>
                  <Button
                    onClick={handleSubmit}
                    type="primary"
                    className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default CreateTicket;
