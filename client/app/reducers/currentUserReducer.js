// This will always get set
const initialState = null;

// Why name function the same as the reducer?
// https://github.com/gaearon/redux/issues/428#issuecomment-129223274
// Naming the function will help with debugging!
/* eslint-disable no-unused-vars */
export default function currentUserReducer(state = initialState, action) {
  return state;
}
