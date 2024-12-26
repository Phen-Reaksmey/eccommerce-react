import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './Hero';
//import Popular from './Popular';
import Categories from './Categories';
import Product from './Product';

const Home = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]); // State to hold products

  // Fetch products from API
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
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
    <div className="homepage">
      <Hero />
      
      <Categories />
      <Product  products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
