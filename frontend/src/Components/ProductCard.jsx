import React from "react"
import { FaShoppingCart } from "react-icons/fa"
import { FaHeart, FaRegHeart } from "react-icons/fa6"
import { FaStar, FaRegStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { MainContext } from "../MainContext"
import { useDispatch, useSelector } from "react-redux"
import { AddToCart } from "../Reducers/CartSlice"




function ProductCard({ item, title, Horizontal }) {
    const { WistList, SetWistList, SetOpenCart } = useContext(MainContext)
    const cart = useSelector(state => state.cart.data)
    const dispatch = useDispatch()
    const Navigate = useNavigate()


    const renderStars = (rating) => {
        const totalStars = 5;
        let stars = [];
        for (let i = 1; i <= totalStars; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-black" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-gray-400" />);
            }
        }
        return stars;
    }


    const toggleWishlist = (productId) => {
        let updatedWishlist = [];

        if (WistList.includes(productId)) {
            updatedWishlist = WistList.filter(id => id !== productId);
        } else {
            updatedWishlist = [...WistList, productId];
        }

        SetWistList(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };


    if (title === "popularwatch") {
        return (
            <div className="p-4 md:w-[18rem] cursor-pointer hover:shadow-2xl duration-300 shadow-md flex flex-col items-center mt-10 rounded-2xl relative">
                <img src={item.img} loading="lazy" alt="" className="md:w-[8vw]" />
                <div className="flex flex-col gap-2 items-center" onClick={() => Navigate(`/product/${item.id}`)}>
                    <h1 className=" text-xl font-bold font-[cinzel]"> {item.name}</h1>
                    <p className="text-xs text-center font-[cardo] text-gray-900">{item.description.slice(0, 100)}</p>

                    {/* Rating Stars */}
                    <div className="flex gap-1">
                        {renderStars(item.rating)}
                    </div>

                    <h2 className="text-red-600 font-semibold font-[cinzel]">$899<span className="text-gray-700 line-through"> $784</span></h2>
                    <div className="w-full flex  items-center gap-5 ">
                        <div onClick={(e) => {
                            e.stopPropagation()
                            dispatch(AddToCart({ pId: item.id, price: item.price }))
                            SetOpenCart(true)
                        }} className="w-full  font-[cardo] cursor-pointer flex justify-center font-semibold items-center text-white gap-2  bg-gradient-to-b from-[#111112] to-[#2E2F32] hover:to-[#0e0f13] duration-300 py-2 px-4 rounded-lg">
                            <button>Add To Cart</button>
                            <FaShoppingCart />
                        </div>
                    </div>
                </div>
                <div className="absolute top-2 right-5 p-2 bg-gray-500 blue-300 rounded-full" >
                    {
                        WistList.includes(item.id)
                            ? <FaHeart onClick={(e) => {
                                e.stopPropagation();
                                toggleWishlist(item.id)
                            }} className="text-red-500 cursor-pointer" />
                            : <FaRegHeart onClick={(e) => {
                                e.stopPropagation();
                                toggleWishlist(item.id)
                            }} className="cursor-pointer" />
                    }
                </div>
            </div>
        )
    } else if (title === "review") {
        return (
            <div className="bg-white p-5 md:w-[22rem] shadow-lg flex flex-col gap-3 " >
                <div className="flex items-center gap-3" >
                    <div className="rounded-full overflow-hidden md:w-[4vw] w-[16vw] aspect-square">
                        <img
                            src={item.img}
                            loading="lazy"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex">
                        {renderStars(item.rating)}
                    </div>
                </div>
                <h1 className="md:text-lg text-2xl font-bold font-[cinzel]">{item.heading}</h1>
                <p className="text-sm text-gray-700 font-[cardo]">{item.description}</p>
                <p className="font-semibold font-[cardo]">{item.username}</p>
            </div>
        )
    } else if (title === "All") {
        return (
            <div className={` cursor-pointer  p-4  shadow-md flex ${Horizontal === true ? "flex-row" : "flex-col"}  items-center mt-10 rounded-2xl relative`}>
                <img src={item.img} loading="lazy" alt="" className="md:w-[8vw] " />
                <div className="flex flex-col gap-2 items-center" onClick={() => Navigate(`/product/${item.id}`)}>
                    <h1 className=" text-sm font-semibold font-[cinzel]"> {item.name}</h1>
                    <p className="text-xs text-center text-gray-900 font-[cardo]">{item.description.slice(0, 100)}</p>

                    {/* Rating Stars */}
                    <div className="flex gap-1">
                        {renderStars(item.rating)}
                    </div>

                    <h2 className="text-red-600 font-semibold font-[cinzel]">${item.price}<span className="text-gray-700 line-through"> ${item.discountPrice}</span></h2>
                    <div className="w-full flex  items-center gap-5 ">
                        <div onClick={(e) => {
                            e.stopPropagation()
                            dispatch(AddToCart({ pId: item.id, price: item.price }))
                            SetOpenCart(true)
                        }} className="w-full cursor-pointer flex justify-center font-semibold items-center text-white gap-2  bg-gradient-to-b from-[#111112] to-[#2E2F32] hover:to-[#0e0f13] duration-300 py-2 px-4 rounded-lg">
                            <button>Add To Cart</button>
                            <FaShoppingCart />
                        </div>
                    </div>
                </div>
                <div className="absolute top-2 right-5 p-2 bg-gray-500 rounded-full">
                    {
                        WistList.includes(item.id)
                            ? <FaHeart onClick={(e) => {
                                e.stopPropagation();
                                toggleWishlist(item.id)
                            }} className="text-red-500 cursor-pointer" />
                            : <FaRegHeart onClick={(e) => {
                                e.stopPropagation();
                                toggleWishlist(item.id)
                            }} className="cursor-pointer" />
                    }
                </div>
            </div>
        )
    }

}

export default React.memo(ProductCard)
