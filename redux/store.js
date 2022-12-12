import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/counterSlice";
import ecommerceReducer from "../redux/features/counter/ecommerceSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    ecommerce: ecommerceReducer,
  },
});
