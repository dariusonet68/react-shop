import React from 'react';

export default function SearchbarComponent({ searchValue, handleInputChange }) {
  return (
    <div className="container-fluid p-2">
      <div className="d-flex justify-content-end">
        <div className="position-relative w-50">
          <input
            type="search"
            className="form-control bg-dark text-white"
            placeholder="Search..."
            value={searchValue} // Leaga valoarea inputului de searchValue din state-ul ProductsContainer
            aria-label="Search"
            onChange={handleInputChange} // Apeleaza handleInputChange cand utilizatorul tasteaza
          />
          <span className="position-absolute top-50 end-0 translate-middle-y me-2 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
