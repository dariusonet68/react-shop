import React, { useState } from 'react';
import { mockProducts } from '../assets/mockProducts';
import SearchbarComponent from '../components/SearchbarComponent';
import { Link } from 'react-router-dom';
import { ProductComponent } from '../components/ProductComponent';
import SidebarContainer from './SidebarContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductsContainer() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(
    mockProducts.products
  );

  // Functie pentru schimbarea in input
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase(); // Preia valoarea inputului
    setSearchValue(value); // Actualizeaza stateul

    // Filtrarea produselor pe baza textului introdus
    const filtered = mockProducts.products.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered); // Actualizeaza lista produselor filtrate
  };

  // Functie pentru selectarea categoriei
  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);

    if (categoryName === 'All Products') {
      // Afiseaza toate produsele din categoria "All Products"
      setFilteredProducts(mockProducts.products);
    } else {
      // Filtreaza produsele dupa categorie
      const filtered = mockProducts.products.filter(
        (product) => product.category.name === categoryName
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2">
          {/* Sidebar */}
          <SidebarContainer onSelectCategory={handleSelectCategory} />
        </div>

        <div className="col-md-9 col-lg-10">
          {/* Searchbar */}
          <div className="mb-4">
            <SearchbarComponent
              searchValue={searchValue}
              handleInputChange={handleInputChange}
            />
          </div>

          {/* Product List */}
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                  key={product.id}
                >
                  <Link
                    to={'/details/' + product.id}
                    className="text-decoration-none"
                  >
                    <ProductComponent
                      images={product.images[0]}
                      title={product.title}
                      price={product.price}
                    />
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>No products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
