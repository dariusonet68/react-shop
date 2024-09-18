import React, { useState, useEffect } from 'react';
import { mockProducts } from '../assets/mockProducts';

export const CategoriesContainer = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [
      { name: 'All Products' },
      ...mockProducts.products
        .map((product) => product.category)
        .filter(
          (value, index, self) =>
            index === self.findIndex((cat) => cat.id === value.id)
        ),
    ];

    setCategories(uniqueCategories);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 d-flex flex-column mt-3">
          {categories.length > 0
            ? categories.map((category, index) => (
                <div
                  className="btn text-light mb-2"
                  key={index}
                  onClick={() => onSelectCategory(category.name)}
                >
                  {category.name}
                </div>
              ))
            : 'NO DATA AVAILABLE'}
        </div>
        <div className="col-md-9 col-lg-10"></div>
      </div>
    </div>
  );
};
