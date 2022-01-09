import { addItemToCart, removeItemFromCart } from "./cart.utils";

const { createSlice } = require("@reduxjs/toolkit");


const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}

const cart = createSlice({
    name: 'cartIcon',
    initialState: INITIAL_STATE,
    reducers: {
        toggleCartDropdown: (state, action) => {
            state.hidden = !state.hidden
        },
        addItem: (state, action) => {
            state.cartItems = addItemToCart(state.cartItems, action.payload);
        },
        removeItem:(state, action) => {
            state.cartItems = removeItemFromCart(state.cartItems, action.payload);
        },
        clearItem: (state, action) => {
            const clearItemId = action.payload;
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== clearItemId)
        }


    }
})

const { reducer, actions } = cart;
export const { toggleCartDropdown, addItem, clearItem, removeItem } = actions;
export default reducer;