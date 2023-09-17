import { createSlice } from "@reduxjs/toolkit";

const fetchLocalStorage = () => {
  let carts = localStorage.getItem("carts");
  if (carts) {
    return JSON.parse(localStorage.getItem("carts"));
  } else {
    return [];
  }
};
const storageInLocalStorage = (data) => {
  localStorage.setItem("carts", JSON.stringify(data));
};

const initialState = {
  carts: fetchLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty + item.price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        storageInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storageInLocalStorage(state.carts);
      }
    },

    removeFromCart: (state, action) => {
      const removedItem = state.carts.find(
        (item) => item.id === action.payload
      );

      if (removedItem) {
        state.totalAmount -= removedItem.totalPrice;
        const tempCart = state.carts.filter(
          (item) => item.id !== action.payload
        );
        state.carts = tempCart;
        storageInLocalStorage(state.carts);
      }
    },

    clearCart: (state) => {
      state.carts = [];
      storageInLocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price * cartItem.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },

    incrementQuantity: (state, action) => {
      const cartItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (cartItemIndex !== -1) {
        const updatedCartItem = {
          ...state.carts[cartItemIndex],
          quantity: state.carts[cartItemIndex].quantity + 1,
          totalAmount:
            state.carts[cartItemIndex].totalAmount + action.payload.price,
        };

        const updatedCart = [...state.carts];
        updatedCart[cartItemIndex] = updatedCartItem;

        return {
          ...state,
          carts: updatedCart,
          totalAmount: state.totalAmount + action.payload.price,
        };
      }
      return state;
    },

    decrementQuantity: (state, action) => {
      const cartItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (cartItemIndex !== -1 && state.carts[cartItemIndex].quantity > 1) {
        const updatedCartItem = {
          ...state.carts[cartItemIndex],
          quantity: state.carts[cartItemIndex].quantity - 1,
          totalAmount:
            state.carts[cartItemIndex].totalAmount - action.payload.price,
        };

        const updatedCart = [...state.carts];
        updatedCart[cartItemIndex] = updatedCartItem;

        return {
          ...state,
          carts: updatedCart,
          totalAmount: state.totalAmount - action.payload.price,
        };
      }
      return state;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  getCartTotal,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
