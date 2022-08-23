import React, { useState, useEffect } from "react";
import "./Employees.css";
import EmployeesItem from "./EmployeesItem";
import Card from "./UI/Card";
import axios from "axios";

const Employees = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch(
        "https://test-task-api-optimo.herokuapp.com/employee"
        // {
        //   mode: "no-cors",
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   // body: JSON.stringify(),
        // }
      );
      // const res = await response.clone().json();

      // console.log(res);

      // if (!response.ok) {
      //   throw new Error("Something went wrong");
      // }

      const responseData = await response.clone().json();

      console.log(responseData);

      const loadedEmployees = [];

      for (const key in responseData) {
        loadedEmployees.push({
          id: key,
          name: responseData[key].name,
          liked: responseData[key].liked,
          description: responseData[key].description,
          avatar: responseData[key].avatar,
          job_id: responseData[key].job_id,
          location_id: responseData[key].location_id,
        });
      }

      setItems(loadedEmployees);
      setIsLoading(false);
    };

    fetchEmployees().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="meals-loading">
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="meals-error">
        <p>{httpError}</p>
      </section>
    );
  }

  const employeesList = items.map((item) => (
    <EmployeesItem
      key={item.id}
      id={item.id}
      name={item.name}
      liked={item.liked}
      description={item.description}
      avatar={item.avatar}
      job_id={item.job_id}
      location_id={item.location_id}
    />
  ));
  return (
    <div>
      <Card>
        <ul>{employeesList}</ul>
      </Card>
    </div>
  );
};

export default Employees;
