import { Card } from "antd";
import React from "react";
import DocumentationSection from "./dashboard/DocumentationSection";

function Dashboard() {
  const handleClick = () => {
    console.log("Button has been clicked.");
  };
  return (
    <>
      <section className="container">
        <DocumentationSection />
      </section>
    </>
  );
}

export default Dashboard;

{
  /* <Card
type="inner"
title="Create Issue Ticket"
headStyle={{
  backgroundColor: "#000",
  color: "#fff",
  fontFamily: "Montserrat",
}}
>
<p className=" text-xl font-semibold "> 846+ </p>
</Card> */
}
