import React from "react";
import DepartmentWiseTicket from "./department/DepartmentWiseTicket";
import DepartmentListTable from "./department/DepartmentListTable";

function Department() {
  return (
    <>
      <section className=" mx-auto">
        <div className="py-3">
          <h3 className="text-2xl font-sans font-bold ">
            {" "}
            All Department List
          </h3>
          <p className="font-sans font-semibold">
            {" "}
            Here you will find all the department list.{" "}
          </p>
        </div>
        <DepartmentListTable />
      </section>
    </>
  );
}

export default Department;
