import React from 'react';
import ProductsContainer from '../containers/ProductsContainer';
import TopbarContainer from '../containers/TopbarContainer';
import SidebarContainer from '../containers/SidebarContainer';

export default function HomePage() {
  return (
    <div className="container-fluid bg-dark">
      <TopbarContainer />
      <div className="d-flex justify-content-end">
        <ProductsContainer />
      </div>
    </div>
  );
}
