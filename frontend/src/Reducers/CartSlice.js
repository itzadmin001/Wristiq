import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        total: 0
    },
    reducers: {
        AddToCart: (currentState, { payload }) => {
            const Founditem = currentState.data.find(i => i.pId === payload.pId);
            console.log(Founditem, payload)
            if (!Founditem) {
                currentState.data.push({
                    pId: payload.pId,
                    qty: 1
                });
            } else {
                Founditem.qty++;
            }
            currentState.total = Math.round(currentState.total + parseInt(payload.price));
            localStorage.setItem("cart", JSON.stringify(currentState));
        },

        lsToCart: (currentState, { payload }) => {
            const Getitem = JSON.parse(localStorage.getItem("cart"));
            if (Getitem) {
                currentState.data = Getitem.data;
                currentState.total = Math.round(parseInt(Getitem.total));
            }
        },
        EmptytoCart(currentState) {
            currentState.data = [];
            currentState.total = 0;
            localStorage.removeItem("cart");
        },
        deleteToCart(currentState, { payload }) {
            const { pId, price } = payload;

            const existingItemIndex = currentState.data.findIndex(item => item.pId === pId);

            if (existingItemIndex !== -1) {
                const item = currentState.data[existingItemIndex];

                if (item.qty > 1) {
                    item.qty -= 1;
                    currentState.total = Math.max(0, currentState.total - parseInt(price));
                } else {
                    // Quantity is 1, remove item completely
                    currentState.data.splice(existingItemIndex, 1);
                    currentState.total = Math.max(0, currentState.total - parseInt(price));
                }

                // Update localStorage
                localStorage.setItem("cart", JSON.stringify(currentState));
            }
        }
    }
})

export const { AddToCart, lsToCart, EmptytoCart, deleteToCart } = CartSlice.actions

export default CartSlice.reducer