import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Upload, message } from "antd";
import { AuthenticateInstance, AxiosInstance } from "../../router/api";

const SessionForm = () => {
  //const [token, setToken] = useState([]);
  const history = useNavigate();
  const [form] = Form.useForm();
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      //console.log(values);
      // const response2 = await AxiosInstance.post("api/Auth/agent", values);
      const response = await AuthenticateInstance.post(
        "/api/Auth/login",
        values
      );
      console.log(response.data);
      //const { isSuccess, agentdata, token } = response.data;
      const { isSuccess, result, message } = response.data;
      console.log(result);

      // const response = await axios.post(
      //   "http://localhost:7002/api/Auth/login",
      //   values
      // );
      //console.log(response.data);
      //const { isSuccess, result, message } = response.data;

      console.log(isSuccess);
      if (isSuccess) {
        const { token, user } = result;
        //const { token, agentdata } = response.data;
        console.log(token);
        console.log(user);
        localStorage.setItem("token", token);
        //sessionStorage.setItem("token", token);
        //localStorage.setItem("user", JSON.stringify(user));
        //sessionStorage.setItem("user", JSON.stringify(user));
        //message.success("Session in successfully.");
        history("/");
        window.location.reload();
      }

      console.log("code test");
    } catch (error) {
      console.log(error);
      message.error(error);
    }
  };

  useEffect(() => {
    const fetchData = () => {
      //setToken(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className=" h-96 flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Login
          </h2>
          <Form form={form}>
            <Form.Item className="font-sans" name="username" label="username">
              <Input />
            </Form.Item>
            <Form.Item className="font-sans" name="password" label="password">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SessionForm;
