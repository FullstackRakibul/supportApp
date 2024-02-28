import React from "react";
import userDetails from "../../utils/userDetails";
import tokenDetails from "../../utils/tokenDetails";

const EmployeeProfile = () => {
  const { name, email, phoneNumber, empCode } = userDetails();
  const { role } = tokenDetails();
  return (
    <>
      <section>
        <div className="p-3 bg-warning mx-auto rounded-lg gap-2">
          <p className="font-sans text-lg">
            <span className="font-semibold">Profile Name : </span>
            <span>{name}</span>
          </p>
          <p className="font-sans text-lg">
            <span className="font-semibold">Employee ID: </span>
            <span>{empCode}</span>
          </p>
          <p className="font-sans text-lg">
            <span className="font-semibold">Phone : </span>
            <span>{phoneNumber}</span>
          </p>
          <p className="font-sans text-lg">
            <span className="font-semibold">User mail : </span>
            <span>{email}</span>
          </p>
          <p className="font-sans text-lg">
            <span className="font-semibold">User Role : </span>
            <span>{role}</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default EmployeeProfile;
