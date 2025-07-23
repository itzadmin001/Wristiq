import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



function MyOrder() {
    const [orders, setOrders] = useState([]);
    const Navigate = useNavigate()
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("UserOrder"));
        if (Array.isArray(data) && data.length > 0) {
            setOrders(data);
        }
    }, []);

    if (orders.length === 0) {
        return (
            <div className="min-h-screen  font-[cinzel]  flex items-center justify-center text-center text-2xl font-semibold text-gray-500">
                No Order Found 😔
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8">
            <FaArrowLeft className="text-xl cursor-pointer hover:text-blue-300" onClick={() => Navigate(-1)} />
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Orders</h1>

            <div className="space-y-10">
                {orders.map((order, orderIndex) => (
                    <div key={orderIndex} className="border rounded-xl shadow-sm bg-white p-6">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4 font-[cinzel] ">Order #{orderIndex + 1}</h2>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 font-[cardo]">
                            {order.cart.map((product, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-100 rounded-lg overflow-hidden shadow-sm"
                                >
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        loading="lazy"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-3">
                                        <h3 className="font-semibold">{product.name}</h3>
                                        <p>Price: ₹{product.price}</p>
                                        <p>Qty: {product.qty}</p>
                                        <p className="text-sm text-gray-500">{product.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 font-[cardo]">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Shipping Info:</h3>
                            <div className="grid sm:grid-cols-2 gap-3 text-gray-700">
                                <p><span className="font-semibold">Name:</span> {order.shippingInfo.name}</p>
                                <p><span className="font-semibold">Email:</span> {order.shippingInfo.email}</p>
                                <p><span className="font-semibold">Phone:</span> {order.shippingInfo.phone}</p>
                                <p><span className="font-semibold">City:</span> {order.shippingInfo.city}</p>
                                <p><span className="font-semibold">State:</span> {order.shippingInfo.state}</p>
                                <p><span className="font-semibold">Zip:</span> {order.shippingInfo.zip}</p>
                                <p className="sm:col-span-2"><span className="font-semibold">Address:</span> {order.shippingInfo.address}</p>
                            </div>
                            <p className="mt-4 text-sm text-gray-600">
                                <span className="font-semibold">Order Time:</span> {new Date(order.orderTime).toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold">Cash on Delivery:</span> {order.cod ? "Yes" : "No"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyOrder;
