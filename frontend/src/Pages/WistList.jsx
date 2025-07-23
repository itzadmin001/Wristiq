import React, { useContext } from "react";
import { MainContext } from "../MainContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LikedProductsSection = () => {
    const { WistList } = useContext(MainContext)
    const products = useSelector(state => state.product.product)
    const Navigate = useNavigate()

    const likedProducts = products.filter(product => WistList.includes(product.id));


    return (
        <section className="w-full min-h-screen font-[cardo]  bg-black text-white py-10 px-4 md:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center font-[cinzel]">Your Wishlist ❤️</h2>

                {likedProducts.length === 0 ? (
                    <p className="text-center text-gray-400 text-lg mt-20 font-[cinzel]">
                        No Wishlist Products Found 😔
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {likedProducts.map((product, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition duration-300"
                            >
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    loading="lazy"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2 font-[cinzel]">{product.name}</h3>
                                <p className="text-sm text-gray-300 mb-2">{product.description}</p>
                                <p className="text-lg font-bold text-white">₹{product.price}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <button onClick={() => Navigate(-1)} className="text-xl font-[cinzel] font-bold w-full py-3 px-5 rounded-2xl mx-auto mt-20 bg-blue-500 ">Back</button>
        </section>
    );
};

export default LikedProductsSection;
