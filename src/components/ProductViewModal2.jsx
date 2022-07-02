import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import ProductView2 from "./ProductView2";

import Button from "./Button";

import { remove } from "../redux/product-modal/productModalSlice2";

import productData2 from "../assets/fake-data/products2";

const ProductViewModal2 = () => {
  const productSlug2 = useSelector((state) => state.productModal2.value2);
  const dispatch2 = useDispatch();

  const [product2, setProduct2] = useState(undefined);

  useEffect(() => {
    setProduct2(productData2.getProductBySlug2(productSlug2));
  }, [productSlug2]);

  return (
    <div
      className={`product-view__modal ${
        product2 === undefined ? "" : "active"
      }`}
    >
      <div className="product-view__modal__content">
        <ProductView2 product={product2} />
        <div className="product-view__modal__content__close">
          <Button size="sm" onClick={() => dispatch2(remove())}>
            Закрыть
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal2;
