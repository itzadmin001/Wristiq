import { lazy, useContext, useState } from "react";
import { FaShippingFast, FaShieldAlt, FaTags, FaStar } from "react-icons/fa";
import { GiCrystalBars } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AddToCart } from "../Reducers/CartSlice";
import { MainContext } from "../MainContext";
const Container = lazy(() => import("../Components/Container"));



function Product() {
    const Products = useSelector(state => state.product.product)
    const { id } = useParams()
    const [changeImg, SetChangeImg] = useState("")
    const { SetOpenCart } = useContext(MainContext)
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    const product = Products.find((item) => item.id == id);


    return (
        <section className=" bg-white text-gray-800">
            <div className=" bg-black py-2 px-3 w-full text-center text-white font-semibold font-[cinzel] "> Discount For Limited times %</div>
            <div className=" w-full h-[50vh] bg-red-400 ">
                <img src={product?.bgImg} loading="lazy" className="w-full h-full object-cover" alt="Image Not found" />
            </div>

            <Container>
                <div className="grid md:grid-cols-2 gap-8 items-start mt-20 font-[cardo]">

                    <div className="space-y-4">
                        <img
                            src={changeImg || product?.img}
                            alt="OLTO-8 KING 3D Watch"
                            loading="lazy"
                            className="rounded-2xl shadow-lg md:w-[42vw]"
                        />
                        <div className="flex gap-2 items-center justify-center">
                            {product?.relatedImages?.map((item) => (
                                <img
                                    key={item}
                                    src={item}
                                    loading="lazy"
                                    alt="Thumb"
                                    className="w-20 h-20 rounded-xl object-cover cursor-pointer border"
                                    onClick={() => SetChangeImg(item)} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-2 font-[cinzel] ">{product?.name}</h2>
                        <p className="text-xl text-green-600 font-semibold mb-4">${product?.price}</p>

                        <ul className="space-y-2 text-sm">
                            <li><span className="font-semibold">Movement:</span> {product?.specifications.movement}</li>
                            <li><span className="font-semibold">Energy Storage:</span> {product?.specifications.energyStorage}</li>
                            <li><span className="font-semibold">Case Size:</span> {product?.specifications.caseSize}</li>
                            <li><span className="font-semibold">Material:</span> {product?.specifications.material}</li>
                            <li><span className="font-semibold">Lens:</span> {product?.specifications.lens}</li>
                            <li><span className="font-semibold">Water Resistance:</span> {product?.specifications.waterResistance}</li>
                            <li><span className="font-semibold">Strap:</span> {product?.specifications.strap}</li>
                        </ul>

                        <div>
                            <button onClick={(e) => {
                                e.stopPropagation()
                                dispatch(AddToCart({ pId: product.id, price: product.price }))
                                SetOpenCart(true)
                            }} className="mt-6 w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-lg font-semibold transition-all">
                                Add to Cart
                            </button>

                            <button onClick={() => {
                                dispatch(AddToCart({ pId: product.id, price: product.price }))
                                Navigate("/shipping")
                            }} className="mt-6 w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition-all">
                                Buy Now
                            </button>

                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 mt-10">
                            <div className="flex flex-col items-center text-center">
                                <FaShieldAlt className="text-2xl text-blue-600 mb-1" />
                                <p className="text-sm font-medium">2 Year Warranty</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <GiCrystalBars className="text-2xl text-purple-600 mb-1" />
                                <p className="text-sm font-medium">Born to Be Unique</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <FaShippingFast className="text-2xl text-green-600 mb-1" />
                                <p className="text-sm font-medium">Free Shipping</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <FaTags className="text-2xl text-yellow-600 mb-1" />
                                <p className="text-sm font-medium">Affordable Price</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Product;
