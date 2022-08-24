import React, { useState } from "react";
import "./EmployeesItem.css";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const EmployeesItem = (props) => {
  const [singleItem, setSingleItem] = useState([]);
  const [click, setClick] = useState(false);

  const singleEmployee = () => {
    const fetchSingleEmployee = async () => {
      const response = await fetch(
        `https://test-task-api-optimo.herokuapp.com/employee/${props.id}`
      );

      const responseData = await response.json();
      setSingleItem(responseData);
      console.log(responseData);
    };
    fetchSingleEmployee();
  };

  return (
    <>
      <div className="employee-items">
        <div className="avatar" onClick={singleEmployee}>
          <div className="info">
            <img
              key={props.id}
              src={"https://test-task-api-optimo.herokuapp.com" + props.avatar}
              alt="avatar"
            />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <span>
              <FcLike /> {props.liked}
            </span>
            <Link className="details-button" to={`/employee/${props.id}`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeesItem;
