import React, { useState } from "react";
import "../Styles/SideMenu.css";

const SideMenu = ({ filters, setFilters }) => {
  const [click, setClick] = useState(false); // Creates opposite state to open and close menu on click
  const [localFilters, setLocalFilters] = useState(filters); // Local state for form inputs

  const handleClick = () => setClick(!click); // Reverses false click state set

  const handleLabelChange = (event) => {
    const { value, checked } = event.target;
    setLocalFilters((prevFilters) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilters(localFilters);
    setClick(false); // Close the side menu after applying filters
  };

  return (
    <div className={click ? "side-menu active" : "side-menu"}>
      <div className="side-menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fa-solid fa-filter"} />
        {/* ? is equal to true. : creates toggle from one item to another. */}
      </div>
      <form onSubmit={handleSubmit} className="filter-group">
        <h2>Filter Options</h2>
        <div className="options">
          <label htmlFor="label" className="filter-label">Category</label>
          <div>
            <label>
              <input
                className="cbox"
                type="checkbox"
                value="T-Shirt"
                checked={localFilters.label.includes("T-Shirt")}
                onChange={handleLabelChange}
              />
              T-Shirt
            </label>
          </div>
          <div>
            <label>
              <input
                className="cbox"
                type="checkbox"
                value="Jeans"
                checked={localFilters.label.includes("Jeans")}
                onChange={handleLabelChange}
              />
              Jeans
            </label>
          </div>
          <div>
            <label>
              <input
                className="cbox"
                type="checkbox"
                value="Joggers"
                checked={localFilters.label.includes("Joggers")}
                onChange={handleLabelChange}
              />
              Joggers
            </label>
          </div>
          <div>
            <label>
              <input
                className="cbox"
                type="checkbox"
                value="Jackets"
                checked={localFilters.label.includes("Jackets")}
                onChange={handleLabelChange}
              />
              Jackets
            </label>
          </div>
        </div>
        <button type="submit" className="apply-button">Apply Filters</button>
      </form>
    </div>
  );
};

export default SideMenu;
