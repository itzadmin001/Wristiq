import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MainContext } from "../MainContext";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, deleteToCart } from "../Reducers/CartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { OpenCart, SetOpenCart } = useContext(MainContext)
    const toggleCart = () => SetOpenCart(!OpenCart);
    const cart = useSelector(state => state.cart)
    const products = useSelector(state => state.product.product)
    const dispatch = useDispatch()
    const Navigate = useNavigate()



    const cartProducts = products
        ?.filter(product => cart.data?.some(c => c.pId === product.id))
        .map(product => {
            const cartItem = cart.data.find(c => c.pId === product.id);
            return {
                ...product,
                qty: cartItem.qty
            };
        });


    if (!cartProducts) return <h1>Empty cart</h1>



    return (
        <div
            className={` fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-xl translate-x-0 z-50 transition-transform duration-500 ease-in-out ${OpenCart === true ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex justify-between items-center px-4 py-4 border-b">
                <h2 className="text-lg font-semibold font-[cinzel]" >Your Cart</h2>
                <button
                    onClick={toggleCart}
                    className="text-gray-500 hover:text-red-500 transition cursor-pointer"
                >
                    <FaTimes size={20} />
                </button>
            </div>

            {/* Cart Table */}
            <div className="p-4 overflow-y-auto md:h-[calc(100%-170px)] h-[calc(100%-240px)]">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b font-[cinzel] text-gray-600">
                            <th className="pb-2">Product</th>
                            <th className="pb-2">Qty</th>
                            <th className="pb-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartProducts?.map((item, i) => {
                                return (
                                    <tr key={i} className="border-b py-2 font-[cardo]">
                                        <td className="flex items-center gap-2 py-2">
                                            <img
                                                src={item.img}
                                                alt="Product"
                                                loading="lazy"
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                            <span>{item.name}</span>
                                        </td>
                                        <td>
                                            <div className="flex items-center border rounded w-max">
                                                <button className="px-2 text-lg cursor-pointer hover:outline-1" onClick={() => dispatch(deleteToCart({ pId: item.id, price: item.price }))}>-</button>
                                                <span className="px-3">{item.qty}</span>
                                                <button className="px-2 text-lg cursor-pointer hover:outline-1" onClick={() => dispatch(AddToCart({ pId: item.id, price: item.price }))}>+</button>
                                            </div>
                                        </td>
                                        <td>${item.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            {/* Total and Checkout */}
            <div className="p-4 border-t ">
                <div className="flex justify-between mb-2 text-lg font-semibold font-[cinzel]">
                    <span>Total:</span>
                    <span>${cart.total}</span>
                </div>
                <button onClick={() => {
                    Navigate("/shipping")
                    SetOpenCart(false)
                }} className="w-full  cursor-pointer bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
                    Checkout
                </button>
            </div>
        </div>
    );
}


export default Cart;