import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import the Link component from react-router-dom

const Product = ({ products, addToCart }) => {
  // Track the added products to change the button color
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (item) => {
    // Add to cart logic
    addToCart(item);
    // Update the added state to change button color
    setAddedToCart((prevState) => ({
      ...prevState,
      [item.id]: true, // Mark the item as added
    }));
  };

  return (
    <div>
      <section id="new-arrival" className="new-arrival py-5">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
            <h4 className="text-uppercase">Our New Arrivals</h4>
            <a href="index.html" className="btn-link text-primary">View All Products</a>
          </div>
          <div className="row">
            {products.map((item) => {
              const { id, image, title, price, category } = item;
              const isAdded = addedToCart[id]; // Check if the product is added to the cart
              return (
                <div key={id} className="col-md-3 mb-4">
                  <div className="product-item card shadow-sm rounded border-0">
                    <div className="image-holder position-relative">
                      {/* Link to the product details page */}
                      <Link to={`/product/${id}`}>
                        <img
                          style={{
                            height: "200px",
                            width: "auto",
                            display: "block", // Fix for centering
                            margin: "0 auto",
                          }}
                          src={image}
                          alt={title}
                          className="product-image img-flimuid card-img-top"
                        />
                      </Link>
                      <a href="#" className="btn-icon btn-wishlist position-absolute top-0 end-0 p-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
                          <use xlinkHref="#heart"></use>
                        </svg>
                      </a>
                    </div>
                    <div className="card-body text-center">
                      <p className="card-text text-muted">{category}</p>
                      <h5 className="card-title text-uppercase fs-6 mt-3">
                        {/* Link to the product details page */}
                        <Link
                          to={`/product/${id}`}
                          style={{
                            whiteSpace: "nowrap",  // Prevent text from wrapping
                            overflow: "hidden",    // Hide overflowed text
                            textOverflow: "ellipsis", // Add ellipsis for overflowed text
                            display: "block",  // Ensure the text is on a single line
                            maxWidth: "100%", // Allow for a responsive max width
                          }}
                          className="text-decoration-none text-dark"
                        >
                          {title}
                        </Link>
                      </h5>
                      <p className="card-text text-muted">${price}</p>
                      <button
                        style={{
                          width: "100%",
                          backgroundColor: isAdded ? "#28a745" : "#007bff",  // Green when added, blue otherwise
                          color: "white",  // White text for better contrast
                          border: "none",  // No border
                          padding: "10px",
                          fontSize: "16px", // Slightly larger font for better readability
                          borderRadius: "5px", // Rounded corners
                          cursor: "pointer", // Cursor change on hover
                          transition: "background-color 0.3s ease", // Smooth color transition
                        }}
                        className="btn"
                        onClick={() => handleAddToCart(item)}
                      >
                        {isAdded ? "Added to Cart" : "Add to Cart"}  {/* Change text when added */}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
