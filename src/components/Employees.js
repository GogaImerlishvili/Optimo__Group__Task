import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Employees.css";
import EmployeesItem from "./EmployeesItem";
import Card from "./UI/Card";
import Filters from "./Filters";

const Employees = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [locations, setLocations] = useState();
  const [positions, setPositions] = useState();

  const myItems = filteredItems.length > 0 ? filteredItems : items;

  const getLocations = async () => {
    const response = await fetch(
      "https://test-task-api-optimo.herokuapp.com/location"
    );

    const responseData = await response.clone().json();
    setLocations(responseData);
  };

  const getJob = async () => {
    const response = await fetch(
      "https://test-task-api-optimo.herokuapp.com/job"
    );

    const responseData = await response.clone().json();
    setPositions(responseData);
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch(
        "https://test-task-api-optimo.herokuapp.com/employee"
      );

      const responseData = await response.clone().json();

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

      const sorted = loadedEmployees.sort((a, b) => b.liked - a.liked);
      setItems(sorted);
      setIsLoading(false);
    };

    getLocations();
    getJob();

    fetchEmployees().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const filterByDescriptions = (desc) => {
    if (desc) {
      const filtered = items.filter((t) => t.job_id == desc);
      setFilteredItems(filtered);
    }
  };

  const filterByLocation = (loc) => {
    if (loc) {
      const filtered = items.filter((t) => t.location_id == loc);
      setFilteredItems(filtered);
    }
  };

  const filterByLike = (filter) => {
    if (filter === "ascending") {
      const filtered = items.sort((a, b) => b.liked - a.liked);
      setFilteredItems([...filtered]);
    }
    if (filter === "descending") {
      const filtered = items.sort((a, b) => a.liked - b.liked);
      setFilteredItems([...filtered]);
    }
  };

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

  const employeesList = myItems.map((item) => (
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
        <div className="filter">
          <Filters
            filterValueSelected={filterByDescriptions}
            data={positions}
          />
          <Filters filterValueSelected={filterByLocation} data={locations} />
          <Filters
            filterValueSelected={filterByLike}
            data={[
              { id: "ascending", name: "ascending" },
              { id: "descending", name: "descending" },
            ]}
            hideAll={true}
          />
        </div>
        <div className="grid-container">{employeesList}</div>
      </Card>
    </div>
  );
};

export default Employees;
