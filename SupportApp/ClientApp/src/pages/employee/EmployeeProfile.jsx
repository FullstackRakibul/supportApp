import React from "react";

const EmployeeProfile = () => {
  return (
    <>
      <section>
        <div className="p-3 bg-warning mx-auto rounded-lg gap-2">
          <p className="font-sans text-lg">
            <span className="font-semibold">Profile Name : </span>
            <span>Test Name</span>
          </p>
          <p className="font-sans text-lg">
            <span className="font-semibold">User Role : </span>
            <span>Test Role</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default EmployeeProfile;
