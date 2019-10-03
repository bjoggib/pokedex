import React from "react";

const SearchBar = ({ searchTerm, handleInputChange }) => (
  <div className="col-md-6 mt-3 mb-3">
    <form>
      <div className="form-group">
        <input
          className="form-control"
          type="search"
          name="searchTerm"
          value={searchTerm}
          placeholder="Search by name or number"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </div>
    </form>
  </div>
);

export default SearchBar;
