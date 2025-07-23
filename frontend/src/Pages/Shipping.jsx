import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { FaBoxOpen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../MainContext";
import { EmptytoCart } from "../Reducers/CartSlice";

const Shipping = () => {
    const [submitted, setSubmitted] = useState(false);
    const [codChecked, setCodChecked] = useState(false);
    const cart = useSelector(state => state.cart)
    const { notify } = useContext(MainContext)
    const products = useSelector(state => state.product.product)
    const auth = useSelector(state => state.user.data?.auth);
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const isFirstRun = useRef(true);



    const cartProducts = products
        ?.filter(product => cart.data?.some(c => c.pId === product.id))
        .map(product => {
            const cartItem = cart.data.find(c => c.pId === product.id);
            return {
                ...product,
                qty: cartItem.qty
            };
        });

    useEffect(() => {
        if (!auth) {
            notify("Please login to continue", "error");
            navigate("/login");
            return;
        }


    }, [auth, navigate]);


    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;

            if (cartProducts.length === 0) {
                notify("Select Some Product First", "error");
                navigate("/store");
            }
        }
    }, [cartProducts]);






    const ShippingHandler = (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            city: e.target.city.value,
            state: e.target.state.value,
            zip: e.target.zip.value
        }

        for (let key in data) {
            if (!data[key]) {
                notify(`Please enter ${key}`, "error");
                return;
            }
        }
        if (!codChecked) {
            notify("Please accept Cash on Delivery option", "error");
            return;
        }
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false)
            Navigate("/")
        }, 4000);
        const existingOrders = JSON.parse(localStorage.getItem("UserOrder")) || [];

        const newOrder = {
            shippingInfo: data,
            cart: cartProducts,
            cod: codChecked,
            orderTime: new Date().toISOString()
        };
        existingOrders.push(newOrder);
        localStorage.setItem("UserOrder", JSON.stringify(existingOrders));

        dispatch(EmptytoCart())
    }






    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8 flex justify-center items-center">
            <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 font-[cardo]">
                {!submitted ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        <div className="bg-gray-50 p-6 rounded-xl border">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4  font-[cinzel]" >Summary</h3>
                            <div className="space-y-4">
                                {
                                    cartProducts.map((item, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className="flex justify-between items-center border-b pb-2"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={item.img}
                                                        alt="Product"
                                                        loading="lazy"
                                                        className="w-12 h-12 object-cover rounded"
                                                    />
                                                    <span className="text-gray-700 text-sm sm:text-base">{item.name}</span>
                                                </div>
                                                <span className="text-gray-800 font-medium text-sm sm:text-base">
                                                    ${item.price}
                                                </span>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            <div className="flex justify-between font-bold text-base sm:text-lg mt-6">
                                <span>Total</span>
                                <span>${cart.total}</span>
                            </div>
                        </div>
                        <form className="lg:col-span-2 space-y-6" onSubmit={ShippingHandler}>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Step 01 – Shipping</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    name="name"
                                    className="p-3 border rounded-lg w-full"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    className="p-3 border rounded-lg w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    name="phone"
                                    className="p-3 border rounded-lg w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    className="p-3 border rounded-lg w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="State"
                                    name="state"
                                    className="p-3 border rounded-lg w-full"
                                />
                                <input
                                    type="text"
                                    name="zip"
                                    placeholder="Zip / Postal Code"
                                    className="p-3 border rounded-lg w-full"
                                />
                            </div>

                            <textarea
                                placeholder="Full Address"
                                name="address"
                                className="w-full p-3 border rounded-lg"
                                rows={3}
                            ></textarea>

                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={codChecked}
                                    onChange={(e) => setCodChecked(e.target.checked)}
                                />
                                <span className="text-gray-700">Cash on Delivery</span>
                            </label>

                            <button
                                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium w-full"
                            >
                                Process to Buy
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <FaBoxOpen className="text-green-600 text-5xl sm:text-6xl mb-4 animate-bounce" />
                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-green-700">
                            Thank You for Your Order!
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base max-w-md">
                            Your order has been successfully placed. We'll send you a confirmation email shortly.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shipping;
