import React from "react";

const Filters = (props) => {
  const onFilterValueChanged = (event) => {
    props.filterValueSelected(event.target.value);
  };

  const data = () => {
    return props.data.map((desc) => (
      <option value={desc.id}>{desc.name}</option>
    ));
  };

  return (
    <div className="filter-area">
      <select name="isAvailable" onChange={onFilterValueChanged}>
        {!props?.hideAll && <option value="all">All</option>}
        {props.data?.length > 0 && data()}
      </select>
    </div>
  );
};

export default Filters;
