import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProducts } from "../Actions/ProductActions";

function EditProduct(props) {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    products
      .filter((data) => data.id == props.match.params.id)
      .map((product) => {
        setProduct({
          title: product.title,
          description: product.description,
          price: product.price,
          stock_items: product.stock_items,
        });
      });
  }, []);
  const update = () => {
    dispatch(editProducts(props.match.params.id, product));
    setTimeout(() => {
      window.location = "/";
    }, 1000);
  };

  return (
    <div>
      <div className="form-group offset-3 mt-5 col-md-6">
        <h1 className="text-center">Add New Product</h1>
        <input
          defaultValue={product.title}
          onChange={handleChange}
          name="title"
          placeholder="Product Title"
          type="text"
          className="form-control mb-3"
        />
        <input
          defaultValue={product.price}
          onChange={handleChange}
          name="price"
          placeholder="Product Price"
          type="text"
          className="form-control mb-3"
        />
        <input
          defaultValue={product.stock_items}
          onChange={handleChange}
          name="stock_items"
          placeholder="Stock Items"
          type="text"
          className="form-control mb-3"
        />
        <input
          defaultValue={product.description}
          onChange={handleChange}
          name="description"
          placeholder="Description"
          type="text"
          className="form-control mb-3"
        />
        <button onClick={update} className="form-control mb-3 btn btn-warning">
          Update
        </button>
      </div>
    </div>
  );
}

export default EditProduct;
