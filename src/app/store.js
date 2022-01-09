import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from 'features/SignInSignUp/userSlice'
import cartReducer from 'features/Cart/cartSlice'
import directoryReducer from 'features/Home/directorySlice'
import shopReducer from 'features/Shop/shopSlice'
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['users', 'cart'] 
}
const rootReducer = combineReducers({
    users: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);

export default store;