import { createSlice } from '@reduxjs/toolkit';
import SHOP_DATA from 'constants/shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA,
}

const shop = createSlice({
    name: 'shop',
    initialState: INITIAL_STATE,
    reducers: {}
})
const { reducer, } = shop;
export default reducer;