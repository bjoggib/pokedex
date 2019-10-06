import React from "react";

const SearchBar = ({ searchTerm, handleChange }) => (
  <div className="row justify-content-center">
    <div className="col-md-6 mt-4 mb-5">
      <form className="search-bar" onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <input
            className="form-control"
            type="search"
            placeholder="Search by name or number"
            autoComplete="off"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  </div>
);

export default SearchBar;
