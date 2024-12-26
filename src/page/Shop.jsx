import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Shop = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  // Fetch products from API
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Function to add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <Product products={products} addToCart={addToCart} />
    </>
  );
};

export default Shop;
