import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'features/SignInSignUp/userSlice'
import cartReducer from 'features/Cart/cartSlice'
const rootReducer = {
    users: userReducer,
    cart: cartReducer,
}
const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
   
})
export default store