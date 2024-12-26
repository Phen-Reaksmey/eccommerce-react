import React from 'react';
import catItem1 from "../components/asset/images/cat-item1.jpg";
import catItem2 from "../components/asset/images/cat-item2.jpg"; // Update this path
import catItem3 from "../components/asset/images/cat-item3.jpg";

const Categories = () => {
  return (
    <div>
      <section className="categories overflow-hidden">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="cat-item image-zoom-effect">
                <div className="image-holder">
                  <a href="index.html">
                    <img src={catItem1} alt="Shop for men" className="product-image img-fluid" />
                  </a>
                </div>
                <div className="category-content">
                  <div className="product-button">
                    <a href="index.html" className="btn btn-common text-uppercase">Shop for men</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="cat-item image-zoom-effect">
                <div className="image-holder">
                  <a href="index.html">
                    <img src={catItem2} alt="Shop for women" className="product-image img-fluid" />
                  </a>
                </div>
                <div className="category-content">
                  <div className="product-button">
                    <a href="index.html" className="btn btn-common text-uppercase">Shop for women</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="cat-item image-zoom-effect">
                <div className="image-holder">
                  <a href="index.html">
                    <img src={catItem3} alt="Shop accessories" className="product-image img-fluid" />
                  </a>
                </div>
                <div className="category-content">
                  <div className="product-button">
                    <a href="index.html" className="btn btn-common text-uppercase">Shop accessories</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;