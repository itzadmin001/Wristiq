import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
    name: 'Product',
    initialState: {
        product: []
    },
    reducers: {
        SetProduts: (state, action) => {
            state.product = action.payload
        },
    }
})

export const { SetProduts } = ProductSlice.actions

export default ProductSlice.reducer