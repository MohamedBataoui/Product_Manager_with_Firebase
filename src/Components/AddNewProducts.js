import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../Actions/ProductActions";

function AddNewProducts() {
  const [product, setProduct] = useState({});
  const disptch = useDispatch();
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const add = () => {
    disptch(addProducts(product));
    setTimeout(() => {
      window.location = "/";
    }, 1000);
  };
  return (
    <div>
      <div className="form-group offset-3 mt-5 col-md-6">
        <h1 className="text-center">Add New Product</h1>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Product Title"
          type="text"
          className="form-control mb-3"
        />
        <input
          onChange={handleChange}
          name="price"
          placeholder="Product Price"
          type="text"
          className="form-control mb-3"
        />
        <input
          onChange={handleChange}
          name="stock_items"
          placeholder="Stock Items"
          type="text"
          className="form-control mb-3"
        />
        <input
          onChange={handleChange}
          name="description"
          placeholder="Description"
          type="text"
          className="form-control mb-3"
        />
        <button onClick={add} className="form-control mb-3 btn btn-success">
          Add New Product
        </button>
      </div>
    </div>
  );
}

export default AddNewProducts;
