import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

function DetailsUnit() {
  const [allUnit, setAllUnit] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7295/api/Units");
        setAllUnit(response.data);

        console.log(response.data);
        //message.success("data loaded successfully");
      } catch (error) {
        console.log(`unit table data fatching error. ${error}`);
        message.error("Unit Data fatching error !!!");
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <section>
        <h3 className="font-sans text-2xl">All Unit Names</h3>
        <ul>
          {allUnit.map((unit) => (
            <li className="font-sans" key={unit.id}>
              {unit.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default DetailsUnit;
