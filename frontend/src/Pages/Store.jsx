
import { lazy, useRef, useState } from "react"
import WatchVideo from "../assets/Images/video.mp4"
const ProductCard = lazy(() => import("../Components/ProductCard"))
const Container = lazy(() => import("../Components/Container"))
import { FaGripVertical } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";


import { useSelector } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Store() {
    const products = useSelector(state => state.product.product)
    const LeftDivRef = useRef()
    const RightDivRef = useRef()
    const TriggerRef = useRef()
    const ProductRef = useRef()



    return (
        <>
            <BunnerSection />
            <ProductSection products={products} ProductRef={ProductRef} TriggerRef={TriggerRef} LeftDivRef={LeftDivRef} RightDivRef={RightDivRef} />
        </>
    )
}


const BunnerSection = () => {
    return (
        <section className="w-full h-[100vh]">
            <div className="w-full h-full bg-black" >
                <video src={WatchVideo} autoPlay muted loop className="w-full h-full object-cover"> </video>
            </div>
        </section>
    )
}


const ProductSection = ({ products, RightDivRef, ProductRef, TriggerRef, LeftDivRef }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [Horizontal, SetHorizontal] = useState(false)
    const [collectionFilter, setCollectionFilter] = useState(["All"])
    const [materialFilter, setMaterialFilter] = useState(["All"]);
    const [sizeFilter, setSizeFilter] = useState(["All"]);


    const [tempCollectionFilter, setTempCollectionFilter] = useState(collectionFilter);
    const [tempMaterialFilter, setTempMaterialFilter] = useState(materialFilter);
    const [tempSizeFilter, setTempSizeFilter] = useState(sizeFilter);


    const filters = {
        Collection: ["Chrono Gate", "Tide X", "King", "Coral Steward", "Roto"],
        Material: ["Stainless Steel", "Ceramic", "Leather Strap", "Rubber Strap"],
        Size: ["38mm", "42mm", "46mm"],
    };

    const handleFilterChange = (value, filterType) => {
        const updateFilter = (prev) => {
            if (value === "All") return ["All"];
            const exists = prev.includes(value);
            let newFilter = exists
                ? prev.filter((item) => item !== value)
                : [...prev.filter((i) => i !== "All"), value];

            return newFilter.length === 0 ? ["All"] : newFilter;
        };

        if (filterType === "collection") setCollectionFilter(updateFilter);
        if (filterType === "material") setMaterialFilter(updateFilter);
        if (filterType === "size") setSizeFilter(updateFilter);
    };

    const handleTempFilterChange = (value, type) => {
        const updateFilter = (prev) => {
            if (value === "All") return ["All"];
            const exists = prev.includes(value);
            const updated = exists
                ? prev.filter((item) => item !== value)
                : [...prev.filter((item) => item !== "All"), value];
            return updated.length === 0 ? ["All"] : updated;
        };

        if (type === "collection") setTempCollectionFilter(updateFilter);
        if (type === "material") setTempMaterialFilter(updateFilter);
        if (type === "size") setTempSizeFilter(updateFilter);
    };

    const filteredProducts = products.filter((product) => {
        const matchesCollection = collectionFilter.includes("All") || collectionFilter.includes(product.category);

        const material = product?.specifications?.material || "";
        const matchesMaterial =
            materialFilter.includes("All") || materialFilter.includes(material);

        const size = product?.specifications?.caseSize || "";
        const matchesSize =
            sizeFilter.includes("All") || sizeFilter.includes(size);

        return matchesCollection && matchesMaterial && matchesSize;
    });

    const applyMobileFilters = () => {
        setCollectionFilter(tempCollectionFilter);
        setMaterialFilter(tempMaterialFilter);
        setSizeFilter(tempSizeFilter);
        setIsOpen(false);
    };



    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: TriggerRef.current,
                start: "top 80%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",

            }
        });

        tl.from(LeftDivRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        tl.from(RightDivRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(ProductRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

    }, []);


    return (
        <section ref={TriggerRef} className="w-full min-h-[100vh] p-4 mt-10 grid md:grid-cols-5">
            <div ref={LeftDivRef} className="p-4 md:block hidden col-span-1 rounded-xl shadow-xl text-black space-y-6">
                <div>
                    <h3 className="font-bold text-lg mb-2 font-[cinzel]">Collection</h3>
                    <div className="flex flex-col space-y-1 font-[cardo]">
                        {filters.Collection.map((item, i) => (
                            <label key={i} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="accent-white w-4 h-4"
                                    checked={collectionFilter.includes(item)}
                                    onChange={() => handleFilterChange(item, "collection")}
                                />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2 font-[cinzel]">Material</h3>
                    <div className="flex flex-col space-y-1 font-[cardo]">
                        {filters.Material.map((item, i) => (
                            <label key={i} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="accent-white w-4 h-4"
                                    checked={materialFilter.includes(item)}
                                    onChange={() => handleFilterChange(item, "material")}
                                />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2 font-[cinzel]">Size</h3>
                    <div className="flex flex-col space-y-1 font-[cardo]">
                        {filters.Size.map((item, i) => (
                            <label key={i} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="accent-white w-4 h-4"
                                    checked={sizeFilter.includes(item)}
                                    onChange={() => handleFilterChange(item, "size")}
                                />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                </div>




            </div>
            <Container clasess="w-full col-span-4 ">
                <div ref={RightDivRef} className="w-full md:flex hidden rounded-lg font-semibold bg-gray-100 shadow-xl p-4 text-black  items-center justify-between">
                    <div className="flex items-center gap-8 font-[cinzel] font-[800]">
                        <h1 >{filteredProducts.length} Results</h1>
                        <div className=" flex items-center gap-2 text-2xl">
                            <FaGripVertical onClick={() => SetHorizontal(false)} className={`cursor-pointer hover:text-blue-500 ${Horizontal === true ? "text-black" : "text-blue-800 "} `} />
                            <BsFillGrid3X3GapFill onClick={() => SetHorizontal(true)} className={`cursor-pointer hover:text-blue-500 ${Horizontal === true ? " text-blue-800" : "text-black"}`} />
                        </div>
                    </div>
                    <div>
                        <select className="bg-transparent text-lg focus:outline-none font-[cardo]">
                            <option>Newest Arrivals</option>
                            <option>Most Desired</option>
                            <option >Exclusive Editions</option>
                            <option>Curated For You</option>
                            <option>By Value</option>
                            <option>Collector’s Picks</option>
                        </select>
                    </div>
                </div>
                <div ref={ProductRef} className={`product grid font-[cardo] gap-2 grid-cols-2 ${Horizontal === true ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                    {
                        filteredProducts.length === 0 ? (
                            <div className="col-span-full text-center text-gray-500 text-xl py-10">
                                No products found.
                            </div>
                        ) : (
                            filteredProducts.map((item, i) => (
                                <ProductCard item={item} key={i} title="All" Horizontal={Horizontal} />
                            ))
                        )
                    }

                </div>
                {/* 🔽 Bottom Fixed Bar */}
                <div className="fixed bottom-0 left-0 w-full font-[cinzel] bg-white flex items-center justify-between p-4 border-t border-gray-300 md:hidden z-50">
                    <span className="font-semibold text-gray-800 ">Sort By</span>
                    <button
                        className="bg-black text-white px-4 py-2 rounded-lg"
                        onClick={() => setIsOpen(true)}
                    >
                        Filter
                    </button>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 font-[cinzel] bg-black/40  backdrop-blur-sm z-50 md:hidden" onClick={() => setIsOpen(false)}>
                        <div
                            className="absolute bottom-0 left-0 w-full bg-white max-h-[80vh] rounded-t-2xl py-3 px-5 overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold">Filters</h2>
                                <button className="text-sm text-gray-500" onClick={() => setIsOpen(false)}>Close</button>
                            </div>

                            {/* 👇 Yahan aap apna filter content daal sakte ho */}
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold">Collection</h3>
                                    <div className="flex flex-col space-y-1 mt-2">
                                        {Object.entries(filters).map(([category, items]) => (
                                            <div key={category}>
                                                <h3 className="font-bold text-lg mb-2">{category}</h3>
                                                <div className="flex flex-col space-y-1">
                                                    {items.map((item, i) => (
                                                        <label key={i} className="flex items-center space-x-2 cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                className="accent-white w-4 h-4"
                                                                checked={(() => {
                                                                    if (category === "Collection") return tempCollectionFilter.includes(item);
                                                                    if (category === "Material") return tempMaterialFilter.includes(item);
                                                                    if (category === "Size") return tempSizeFilter.includes(item);
                                                                })()}
                                                                onChange={() => handleTempFilterChange(item, category.toLowerCase())}
                                                            />

                                                            <span>{item}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    className="py-3 px-5 bg-blue-400 text-center w-full mx-auto text-white rounded-2xl"
                                    onClick={applyMobileFilters}
                                >
                                    Submit
                                </button>

                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </section>
    )
}

export default Store
