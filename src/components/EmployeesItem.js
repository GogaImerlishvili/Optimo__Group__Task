import React from "react";

const EmployeesItem = (props) => {
  return (
    <div className="employee-items">
      <div className="avatar">
        <div>
          <img
            src={"https://test-task-api-optimo.herokuapp.com" + props.avatar}
            alt="avatar"
          />
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeesItem;
