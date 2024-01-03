import React from "react";
import CreateUnit from "./unit/CreateUnit";
import { Button } from "antd";
import { RedoOutlined } from "@ant-design/icons";
import DetailsUnit from "./unit/DetailsUnit";

function UnitCard() {
  return (
    <>
      <section className="mx-auto">
        <div className="flex justify-between items-center">
          <span>
            <h1 className="text-2xl font-bold mb-4">Unit</h1>
          </span>
          <span>{/* unit section  */}</span>
        </div>
        <CreateUnit />
        <DetailsUnit />
      </section>
    </>
  );
}

export default UnitCard;
