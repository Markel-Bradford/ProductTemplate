import React from 'react'
import "../Styles/SideMenu.css"

const SideMenu = ({filters, setFilters}) => {
  const handleLabelChange = (event) => {
    setFilters(prevFilters => ({
        ...prevFilters,
        label: event.target.value,
    }));
  };

  return (
    <div className='side-menu'>
      <h2>Filter Options</h2>
      <div className='filter-group'>
        <label htmlFor="label">
            Category
        </label>
        <select name="label" id="label" value={filters.label} onChange={handleLabelChange}>
            <option value="">All</option>
            <option value="T-Shirt">t-Shirt</option>
            <option value="Jeans">Jeans</option>
            <option value="Joggers">Joggers</option>
            <option value="Jackets">Jackets</option>
        </select>
      </div>
    </div>
  )
}

export default SideMenu
