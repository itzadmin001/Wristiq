import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./Reducers/ProductSlice"
import CartReducer from "./Reducers/CartSlice"
import UserReducer from "./Reducers/UserSlice"


export default configureStore({
    reducer: {
        product: ProductReducer,
        cart: CartReducer,
        user: UserReducer
    }
})