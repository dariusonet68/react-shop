import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TopbarContainer from '../containers/TopbarContainer';
import { mockProducts } from '../assets/mockProducts';
import { Carousel } from 'react-bootstrap';

export default function DetailsPage() {
  const { id } = useParams();
  const product = mockProducts.products.find(
    (prod) => prod.id === parseInt(id)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  function addToFavorites(product) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = favorites.some((fav) => fav.id === product.id);

    if (!isAlreadyFavorite) {
      favorites.push(product);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(`${product.title} has been added to favorites!`);
    } else {
      alert(`${product.title} is already in your favorites!`);
    }
  }

  function addToCart(product) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const productInCart = cartItems.find((item) => item.id === product.id);

    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert(`${product.title} has been added to cart!`);
  }

  return (
    <div className="">
      <TopbarContainer />

      <div className="container mt-5">
        <div className="row">
          {/* Carousel pentru imagini produs */}
          <div className="col-md-6">
            <Carousel>
              {product.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Product Image ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* Detalii produs */}
          <div className="col-md-6">
            <div className="card border-0">
              <div className="card-body ">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-text">{product.description}</p>
                <h4 className="text-primary">${product.price}</h4>

                {/* Butoane */}
                <div className="mt-4">
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => addToCart(product)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-cart-fill me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => addToFavorites(product)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-heart-fill me-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                    Add to Favorites
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
