import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProducts, getProducts } from "../Actions/ProductActions";
function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div
            className="card col-md-5 mt-2 mr-5"
            style={{ width: 18 + "rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
              <p className="card-text">{product.description}</p>
              <button
                onClick={() => dispatch(deleteProducts(product.id))}
                className="btn btn-danger"
              >
                Delete
              </button>
              <Link to={"/edit/" + product.id} className="btn btn-warning ml-3">
                Update
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
