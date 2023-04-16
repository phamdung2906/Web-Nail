import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/orders/orderSlice";
export default configureStore({
  reducer: {
    orders: orderReducer,
  },
});
