import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addedOrder: (state, actions) => {
      const { order } = actions.payload;
      const index = state.orders.findIndex((od) => od.id === order.id);
      if (index !== -1) {
        state.orders.map((od) =>
          od.id === order.id ? { ...od, quantity: (od.quantity += 1) } : od
        );
      }else{
        state.orders.push(order)
      }
    },
    deleteOrder: (state, action) => {
      const { orderId } = action.payload;
      const indexToRemove = state.orders.findIndex(
        (order) => order.id === orderId
      );
      state.orders.splice(indexToRemove, 1);
    },
    handleQuantity: (state, action) => {
      const { orderId, type } = action.payload;
      const existOrder = state.orders.find((order) => order.id === orderId);
      if (existOrder && type === 0) {
        if (existOrder.quantity > 1) {
          existOrder.quantity -= 1;
        }
      } else if (existOrder && type === 1) {
        existOrder.quantity += 1;
      }
    },
  },
});

export default orderSlice.reducer;
export const { addedOrder, deleteOrder, handleQuantity } = orderSlice.actions;
export const allOrder = (state) => state.orders.orders;
