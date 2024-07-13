import React, { useState } from "react";
import "../Styles/SideMenu.css";

const SideMenu = ({ filters, setFilters }) => {
  const [click, setClick] =
  useState(false); /*creates opposite state to open and close menu on click*/

  const handleClick = () => setClick(!click); /*reverses false click state set*/

  const handleLabelChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prevFilters) => {
      if (checked) {
        return {
          ...prevFilters,
          label: [...prevFilters.label, value],
        };
      } else {
        return {
          ...prevFilters,
          label: prevFilters.label.filter((label) => label !== value),
        };
      }
    });
  };

  return (
    <div className={click ? "side-menu active" : "side-menu"}>
      <div className="side-menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fa-solid fa-filter"} />{" "}
        {/*? is equal to true. : creates toggle from one item to another.  */}
      </div>
      <div className="filter-group">
        <h2>Filter Options</h2>
        <div className="options">
        <label htmlFor="label" className="filter-label">Category</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="T-Shirt"
              checked={filters.label.includes("T-Shirt")}
              onChange={handleLabelChange}
            />
            T-Shirt
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="Jeans"
              checked={filters.label.includes("Jeans")}
              onChange={handleLabelChange}
            />
            Jeans
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="Joggers"
              checked={filters.label.includes("Joggers")}
              onChange={handleLabelChange}
            />
            Joggers
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="Jackets"
              checked={filters.label.includes("Jackets")}
              onChange={handleLabelChange}
            />
            Jackets
          </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
