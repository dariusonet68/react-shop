/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export const ProductComponent = ({ title, images, price }) => {
  return (
    <>
      <div
        className="d-flex col-md-4 mb-4 "
        style={{ width: '250px', height: '350px' }}
      >
        <div className="card bg-dark text-light border-light-subtle rounded-4">
          <img
            src={images}
            className="d-flex card-img-top rounded-4"
            alt={title}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="card-body">
            <p className="card-title h5">{title}</p>
            <p className="card-text">${price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
