import React, { useState, useEffect } from "react";
import AxiosInstance from "../../router/api";
import useAuthCheck from "../../utils/useAuthCheck";

const DashboardDetails = () => {
  useAuthCheck();
  const [detailsData, setDetailsdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get(
          "/dashboard/Dashboards/DashboardDetails"
        );
        setDetailsdata(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(`data fatching error ! Error : ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section>
        <div className="bg-gray-200 p-8">
          <img
            src="https://placekitten.com/300/200"
            alt="Sample Image"
            className="rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            Your Heading Here
          </h2>
        </div>
      </section>
    </>
  );
};

export default DashboardDetails;
