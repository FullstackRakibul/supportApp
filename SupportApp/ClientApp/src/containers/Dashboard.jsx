import { Card } from "antd";
import React from "react";

function Dashboard() {
  return (
    <>
      <section className="container mx-auto">
        <div className="flex flex-row justify-center items-center gap-3">
          <Card
            type="inner"
            title="Create Issue Ticket"
            headStyle={{
              backgroundColor: "#000",
              color: "#fff",
              fontFamily: "Montserrat",
            }}
          >
            <p className=" text-xl font-semibold "> 846+ </p>
          </Card>
          <Card
            type="inner"
            title="Issue Solved"
            headStyle={{
              backgroundColor: "#000",
              color: "#fff",
              fontFamily: "Montserrat",
            }}
          >
            <p className=" text-xl font-semibold "> 829+ </p>
          </Card>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
