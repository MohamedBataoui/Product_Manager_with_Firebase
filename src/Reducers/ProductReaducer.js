const initialState = {
  products: [],
};

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        products: [...state.products, ...action.payload],
      };
      break;

    case "DELETE_PRODUCTS":
      return {
        products: [
          ...state.products.filter((product) => product.id != action.payload),
        ],
      };
      break;
    case "ADD_PRODUCTS":
      return {
        products: [...state.products, action.payload],
      };
      break;
    case "UPDATE_PRODUCTS":
      return {
        products: [
          ...state.products.map((data) =>
            data.id == action.payload.id ? (data = action.payload) : data
          ),
        ],
      };
      break;
    default:
      return {
        ...state,
      };
      break;
  }
}
