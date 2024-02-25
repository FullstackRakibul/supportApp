import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Upload, message } from "antd";
import { AuthenticateInstance, AxiosInstance } from "../../router/api";
import tokenDetails from "../../utils/tokenDetails";

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
      const { isSuccess, result, message } = response.data;
      //console.log(response.data);
      //const { isSuccess, agentdata, token } = response.data;
      if (isSuccess == false) {
      } else {
        //const { isSuccess, result, message } = response.data;
        //console.log(result);

        // const response = await axios.post(
        //   "http://localhost:7002/api/Auth/login",
        //   values
        // );
        //console.log(response.data);
        //const { isSuccess, result, message } = response.data;

        if (isSuccess) {
          const { token, user } = result;
          console.log(token);
          console.log(user);
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          const { role, EmpCode } = tokenDetails();

          if (role == "ADMIN") {
            {
              history("/");
            }
          } else if (role == "EMPLOYEE") {
            history("/employee");
          } else if (role == "SUPPORTAGENT") {
            history("/agent");
          } else {
            history("/sessionform");
          }
          //window.location.reload();
        }
      }
    } catch (error) {
      console.log(error);
      console.log("User Not Found !!");
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
      <div className="flex flex-col items-center bg-[#f1f1f1] h-screen justify-center bg-white">
        <div class="text-center">
          <img
            src="https://media.licdn.com/dms/image/C4D0BAQFVg4rc_GGKHw/company-logo_200_200/0/1673356091576?e=2147483647&v=beta&t=cg_iA-SIr_FlWkUo0pySCCSAbFOSd0_J2kFi-7oNWNg"
            class="w-20 mx-auto"
            alt="Company Logo"
          />
        </div>
        <div className="max-w-md w-full p-6 bg-[#f1f1f1]  rounded-md shadow-md">
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
