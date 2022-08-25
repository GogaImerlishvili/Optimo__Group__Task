import React, { useState } from "react";
import "./EmployeesItem.css";
import { FcLike } from "react-icons/fc";
import { Link, useParams } from "react-router-dom";

const EmployeesItem = (props) => {
  const [singleItem, setSingleItem] = useState([]);
  const { userId } = useParams();
  const singleEmployee = () => {
    const fetchSingleEmployee = async () => {
      const response = await fetch(
        `https://test-task-api-optimo.herokuapp.com/employee/${userId}`
      );

      const responseData = await response.clone().json();
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
            <Link className="details-button" to={`/${props.id}/employee`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeesItem;
