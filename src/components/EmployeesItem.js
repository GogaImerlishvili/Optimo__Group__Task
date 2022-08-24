import React from "react";
import "./EmployeesItem.css";
import { FcLike } from "react-icons/fc";

const EmployeesItem = (props) => {
  return (
    <>
      <div className="employee-items">
        <div className="avatar">
          <div className="info">
            <img
              src={"https://test-task-api-optimo.herokuapp.com" + props.avatar}
              alt="avatar"
            />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <span>
              <FcLike /> {props.liked}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeesItem;
