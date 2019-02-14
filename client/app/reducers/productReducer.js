const initialState = {
  products: [],
  currentProduct: null
};

// Why name function the same as the reducer?
// https://github.com/gaearon/redux/issues/428#issuecomment-129223274
// Naming the function will help with debugging!
const productReducer = (state = initialState, action) => {
  const { type, preload } = action;

  switch (type) {
    default:
      return state;
  }
  return state;
};

export default productReducer;
