import React from "react";
import userDetails from "../../utils/userDetails";

const AgentOverview = () => {
  const { email, name, empCode, phoneNumber } = userDetails();

  return (
    <>
      <section>
        <div className="p-3 bg-warning">
          <p className="font-sans text-primary">{email}</p>
          <p className="font-sans text-primary">{name}</p>
          <p className="font-sans text-primary">{empCode}</p>
          <p className="font-sans text-primary">{phoneNumber}</p>
        </div>
      </section>
    </>
  );
};

export default AgentOverview;
