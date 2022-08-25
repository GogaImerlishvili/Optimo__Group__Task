import React, { useEffect, useState } from "react";
import "./Employee.css";
import { useParams } from "react-router-dom";
import { FcLike } from "react-icons/fc";

const Employee = (props) => {
  const { userId } = useParams();
  const [singleItem, setSingleItem] = useState([]);

  useEffect(() => {
    const fetchSingleEmployee = async () => {
      const response = await fetch(
        `https://test-task-api-optimo.herokuapp.com/employee/${userId}`
      );

      const responseData = await response.json();
      setSingleItem(responseData);
      console.log(responseData);
    };
    fetchSingleEmployee();
  }, [userId]);

  return (
    <div className="single-employee">
      <div className="single-avatar">
        <div className="info">
          <img
            src={`https://test-task-api-optimo.herokuapp.com${singleItem.avatar}`}
            alt="/"
          />
          <h1>{singleItem.name}</h1>
          <p>{singleItem.description}</p>
          <span>
            <FcLike /> {singleItem.liked}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Employee;
