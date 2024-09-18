import React, { useEffect, useState } from 'react';
import TopbarContainer from '../containers/TopbarContainer';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCartItems);
  }, []);

  // Functie pentru pret total
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  // Functie actualizare cantitate produs din cos
  const updateQuantity = (productId, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: Math.max(1, quantity) };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  // Functie pentru a elimina produs din cos
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  // Functie pentru plasarea comanda
  const handleCheckout = () => {
    alert('Order placed successfully!');
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  return (
    <div>
      <TopbarContainer />

      <div className="container mt-5">
        <h2 className="mb-4 text-white">Your Cart</h2>

        {cartItems.length > 0 ? (
          <div>
            <div className="table-responsive">
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>${item.price}</td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          className="form-control"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                        />
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <h4 className="text-white">Total: ${totalPrice.toFixed(2)}</h4>
              <button className="btn btn-success" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-white">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default CartPage;
