import "./index.css";
import axios from "axios";
import React from "react";

function Mainpage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://61ee8b32-ddba-48d6-9dba-d7fe833ab536.mock.pstmn.io/products"
      )
      .then(function (answer) {
        const products = answer.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log("에러발생:", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/images/banners/banner1.png" alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">{product.name}</div>
                <span className="product-price">{product.price}원</span>
                <div className="seller">
                  <img
                    className="product-avatar"
                    src="images/images/icons/avatar.png"
                  />
                  <span>{product.seller}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default Mainpage;
