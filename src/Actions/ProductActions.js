import { db } from "../FireBase/config";

export const getProducts = () => async (dispatch) => {
  // select the collection
  db.collection("products")
    //get the return
    .get()
    // get the response data
    .then((response) => {
      // map trought the docs and store data in constent
      const data = response.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      // send data to reducer
      dispatch({
        type: "GET_PRODUCTS",
        payload: data,
      });
    });
};

export const deleteProducts = (id) => (dispatch) => {
  db.collection("products").doc(id).delete();
  dispatch({
    type: "DELETE_PRODUCTS",
    payload: id,
  });
};

export const addProducts = (product) => (disptach) => {
  db.collection("products").add(product);
  disptach({
    type: "ADD_PRODUCTS",
    payload: product,
  });
};

export const editProducts = (id, product) => (disptach) => {
  db.collection("products").doc(id).update(product);
  disptach({
    type: "UPDATE_PRODUCTS",
    payload: product,
  });
};
