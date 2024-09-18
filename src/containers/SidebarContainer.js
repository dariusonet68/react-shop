import React, { useState } from 'react';
import { CategoriesContainer } from './CategoriesContainer';
import { Link } from 'react-router-dom';

export default function SidebarContainer({ onSelectCategory }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <button
        className="btn btn-dark d-md-none"
        style={{ top: '15px', left: '15px', zIndex: 1050 }}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        ☰
      </button>
      <div
        className={`bg-dark text-white p-3 vh-100 d-md-block ${
          showSidebar ? 'd-block' : 'd-none'
        }`}
        style={{ width: '250px', transition: '0.3s' }}
      >
        <h4>Categories</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <CategoriesContainer onSelectCategory={onSelectCategory} />
          </li>
        </ul>
      </div>
    </>
  );
}
