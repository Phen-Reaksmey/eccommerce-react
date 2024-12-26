import React from 'react';
import BestSellingImage1 from '../components/asset/images/product-item-1.jpg'; // Update paths as necessary
import BestSellingImage2 from '../components/asset/images/product-item-2.jpg';
import BestSellingImage3 from '../components/asset/images/product-item-3.jpg';
import BestSellingImage4 from '../components/asset/images/product-item-4.jpg';


const BestSellingItems = () => {
  return (
    <div>
      <section id="best-sellers" className="best-sellers product-carousel py-5 position-relative overflow-hidden">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
            <h4 className="text-uppercase">Best Selling Items</h4>
            <a href="index.html" className="btn-link">View All Productsasas</a>
          </div>
          <div className="swiper product-swiper open-up" data-aos="zoom-out">
            <div className="swiper-wrapper d-flex">
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img src={BestSellingImage1} alt="Dark Florish Onepiece" className="product-image img-fluid"/>
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <use href="#heart"></use>
                      </svg>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Dark Florish Onepiece</a>
                      </h5>
                      <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$952.00</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img src={BestSellingImage2} alt="Baggy Shirt" className="product-image img-fluid"/>
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <use href="#heart"></use>
                      </svg>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Baggy Shirt</a>
                      </h5>
                      <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$55.00</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img src={BestSellingImage3} alt="Cotton Off-White Shirt" className="product-image img-fluid"/>
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <use href="#heart"></use>
                      </svg>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Cotton Off-White Shirt</a>
                      </h5>
                      <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$65.00</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img src={BestSellingImage4} alt="Handmade Crop Sweater" className="product-image img-fluid"/>
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <use href="#heart"></use>
                      </svg>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Handmade Crop Sweater</a>
                      </h5>
                      <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$50.00</span></a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Add more slides as needed */}
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className="icon-arrow icon-arrow-left">
            <svg width="50" height="50" viewBox="0 0 24 24">
              <use href="#arrow-left"></use>
            </svg>
          </div>
          <div className="icon-arrow icon-arrow-right">
            <svg width="50" height="50" viewBox="0 0 24 24">
              <use href="#arrow-right"></use>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSellingItems;