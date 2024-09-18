import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopbarContainer from '../containers/TopbarContainer';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  // Recuperam produsele favorite din localStorage cand componenta se monteaza
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Functie pentru a elimina produsul din favorite
  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter(
      (product) => product.id !== productId
    );
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <TopbarContainer />

      <div className="container mt-5">
        <h2 className="mb-4 text-white">Your Favorites</h2>

        {favorites.length > 0 ? (
          <div className="row">
            {favorites.map((product) => (
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-4"
                key={product.id}
              >
                <div className="card h-100">
                  <img
                    src={product.images[0]}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>

                    <Link
                      to={`/details/${product.id}`}
                      className="btn btn-primary me-2"
                    >
                      View Details
                    </Link>

                    {/* Buton pentru stergere din favorite */}
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromFavorites(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white">No favorites added.</p>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
