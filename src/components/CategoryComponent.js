import React from 'react';

export const CategoryComponent = ({ name }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card bg-dark text-white">
        <div className="card-body d-flex align-items-center justify-content-center">
          <button className="m-0">{name}</button>
        </div>
      </div>
    </div>
  );
};
