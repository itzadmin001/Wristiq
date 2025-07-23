import { lazy, useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRightLong, FaHeart } from "react-icons/fa6";

import Container from "../Components/Container";
import SlickSlider from "../Components/SlickSlider";
import Masonry from "../../ReactBits/Masonry/Masonry"
import About from "./About"

import BgBunner from "../assets/Images/bg-2.webp"
import ManReview from "../assets/Images/Review-image.avif"
import WomenReview from "../assets/Images/Woman-image.avif"
import MenImage1 from "../assets/Images/MenImage-1.webp"
import MenImage2 from "../assets/Images/Menimage-2.webp"
import MenImage3 from "../assets/Images/MenImage-3.webp"
import MenImage4 from "../assets/Images/MenImage-4.webp"
import MenImage5 from "../assets/Images/MenImage-5.webp"
import MenImage6 from "../assets/Images/MenImage-6.webp"
import MenImage7 from "../assets/Images/MenImage-7.webp"
import MenImage8 from "../assets/Images/MenImage-8.webp"
import MenImage9 from "../assets/Images/MenImage-9.webp"
import MenImage10 from "../assets/Images/MenImage-10.webp"
import MenImage11 from "../assets/Images/MenImage-11.webp"
import MenImage12 from "../assets/Images/MenImage-12.webp"
import MenImage13 from "../assets/Images/MenImage-13.webp"
import MenImage14 from "../assets/Images/MenImage-14.webp"
import Image3 from "../assets/Images/image-3.webp"
import Image8 from "../assets/Images/Image-8.avif"
import { lsToCart } from "../Reducers/CartSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function Home() {
    const products = useSelector(state => state.product.product)
    const Navigate = useNavigate()
    const dispatch = useDispatch()


    // hero refs 
    const HeadingRef = useRef();
    const FirstButton = useRef();

    // popularWatch refs 
    const NewLunchRef = useRef()
    const TriggerRef = useRef()
    const PopularWaatchRef = useRef()


    // exploreFirst refs 
    const ExploreRef = useRef()
    const detailsRef = useRef()
    const TargetRef = useRef()

    // customer review ref 
    const headingRef = useRef()
    const DesRef = useRef()
    const SliderRef = useRef()
    const Trigger2Ref = useRef()


    // Explole second refs 
    const ImageRef = useRef()
    const DetailsRef = useRef()
    const triggerRef = useRef()


    // pictuer explore refs last 
    const TrigerRef = useRef()
    const ShowRef = useRef()








    useEffect(() => {
        dispatch(lsToCart())
    }, [])



    return (
        <>
            <Hero Navigate={Navigate} HeadingRef={HeadingRef} FirstButton={FirstButton} />
            <OurPopularWatch Navigate={Navigate} products={products} PopularWaatchRef={PopularWaatchRef} TriggerRef={TriggerRef} NewLunchRef={NewLunchRef} />
            <ExploreFirst TargetRef={TargetRef} detailsRef={detailsRef} ExploreRef={ExploreRef} />
            <CustomersReview headingRef={headingRef} DesRef={DesRef} SliderRef={SliderRef} Trigger2Ref={Trigger2Ref} />
            <ExploreSecond ImageRef={ImageRef} DetailsRef={DetailsRef} triggerRef={triggerRef} />
            <PicutesExplore TrigerRef={TrigerRef} ShowRef={ShowRef} />
            <About />
        </>
    )
}




const Hero = ({ Navigate, FirstButton, HeadingRef }) => {



    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(HeadingRef.current, {
            x: "-100%",
            y: "100%",
            duration: 2,
            opacity: 0,
            ease: "power3.out",
        }).from(FirstButton.current, {
            y: 30,
            opacity: 0,
            duration: 2,
            ease: "power3.out"
        },)

    }, []);


    return (
        <section className="w-full h-[100vh] bg  text-white relative">
            <img src={BgBunner} alt="" className="w-full h-full  object-cover" />
            <div className=" overlay absolute w-full h-full top-0 left-0 bg-black/40 ">
                <Container clasess="flex flex-col justify-center h-[100vh] ">
                    <div className="px-4 md:text-start text-center">
                        <div className="flex flex-col gap-2 md:w-1/2  mt-20" ref={HeadingRef}>
                            <h1 className="md:text-6xl text-[8vw] uppercase md:normal-case font-[cinzel] font-[600]">The Art of Smart Timekeeping.</h1>
                            <p className="md:w-[25rem] text-gray-200 font-[cardo] font-[300]">Designed for those who appreciate precision, heritage, and timeless elegance. Each timepiece is more than just a watch—it’s a symbol of legacy and refined craftsmanship.</p>
                        </div>
                        <div ref={FirstButton} className="flex items-center md:justify-normal justify-center gap-5  mt-10 uppercase font-semibold">
                            <div onClick={() => Navigate("/store")} className="flex font-[cinzel]  items-center gap-3 py-3 px-4 uppercase rounded-lg bg-black text-white hover:bg-gray-800  duration-300 cursor-pointer">
                                <button >Shop Now</button>
                                <FaArrowRightLong />
                            </div>
                            <button className=" py-2 px-4 rounded-lg  bg-white font-[cinze] text-black cursor-pointer" >Learn More</button>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

const OurPopularWatch = ({ Navigate, products, PopularWaatchRef, TriggerRef, NewLunchRef }) => {



    var settings = {
        className: "center",
        centerMode: true,
        rows: 2,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerPadding: "20px",
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    rows: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    centerPadding: "50px",
                }
            }
        ]
    };

    const PopularWatch = products.filter(item => {
        return item.isPopular === true
    })

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: TriggerRef.current,
                    start: "top 80%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse",
                }
            });

            tl.from(NewLunchRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });

            tl.from(PopularWaatchRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        });

        return () => ctx.revert(); // ye zaroori h, cleanup ke liye
    }, []);



    return (
        <section className="w-full min-h-[100vh] " ref={TriggerRef}>
            <Container>

                <div className=" w-full mt-10 pb-10 text-center">
                    <div className="w-full text-center">
                        <h1 className=" md:text-[2vw] text-[6vw] uppercase font-[cinzel] font-[800]" ref={NewLunchRef}>New Launches</h1>
                        <p></p>
                    </div>
                    <div ref={PopularWaatchRef}>
                        <SlickSlider data={PopularWatch} settings={settings} title="popularwatch" />
                    </div>

                    <button onClick={() => Navigate("/store")} className="py-2 px-6 text-center bg-black text-white rounded-md mt-10 cursor-pointer hover:text-[#4C3A2D] duration-300       " > Show More</button>
                </div>
            </Container>
        </section>
    )
}

const ExploreFirst = ({ TargetRef, detailsRef, ExploreRef, }) => {



    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: TargetRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",

            }
        });

        tl.from(ExploreRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(detailsRef.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });


    }, []);

    return (
        <section ref={TargetRef} className=" w-full flex items-center h-[100vh] bg-gradient-to-b from-[#111112] to-[#2E2F32]  text-white " >
            <Container clasess="w-full grid md:grid-cols-2 items-center px-5">
                <img src={Image3} alt="" loading="lazy" ref={ExploreRef} className="md:w-[24rem] w-[10rem] mx-auto rounded-lg " />
                <div className="text-start " ref={detailsRef} >
                    <h1 className=" md:text-2xl text-[6vw] font-semibold mt-5 font-[cinzel]">The Precision Symphony of Haute Horology</h1>
                    <p className="text-gray-100 mt-2 font-[cardo] ">Inspired by the relentless pursuit of perfection, this timepiece unveils the intricate ballet of mechanical mastery. Each element is meticulously crafted, reflecting the harmony between bold innovation and timeless tradition. A true symbol of prestige, engineered for those who wear time with distinction.</p>
                    <button className="  font-[cinzel] py-3 px-4 bg-white text-black font-bold mt-5 cursor-pointer hover:bg-gray-300 duration-300">Explore More</button>
                </div>
            </Container>
        </section>
    )
}

const CustomersReview = ({ headingRef, DesRef, SliderRef, Trigger2Ref }) => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        arrows: false,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "40px",
                }
            }
        ]

    };

    const reviews = [
        {
            img: ManReview,
            rating: 5,
            heading: "Timeless Beauty",
            description: "The deep green dial is breathtaking. Gifted it to my fiancé—he wears it every day with pride.",
            username: "Emily Dant"
        },
        {
            img: WomenReview,
            rating: 4,
            heading: "Refined Comfort",
            description: "An elegant timepiece with a perfectly balanced strap. Slightly wish for a slimmer profile, but still exceptional.",
            username: "James Carter"
        },
        {
            img: WomenReview,
            rating: 5,
            heading: "Craftsmanship Meets Performance",
            description: "Wears comfortably during active hours yet maintains the elegance of fine horology.",
            username: "Sophia Lee"
        },
        {
            img: ManReview,
            rating: 3,
            heading: "Luxury Worth the Price",
            description: "The craftsmanship is excellent, though it’s an investment piece for true collectors.",
            username: "Michael Johnson"
        },
        {
            img: WomenReview,
            rating: 5,
            heading: "Sophisticated Statement",
            description: "Exceptional design and build quality. Friends keep asking where I got it from.",
            username: "Arjun Mehta"
        },
        {
            img: ManReview,
            rating: 4,
            heading: "Precision with Elegance",
            description: "The mechanical detailing is stunning, and the sapphire crystal adds a luxurious touch.",
            username: "Lara Smith"
        },
        {
            img: ManReview,
            rating: 5,
            heading: "A Collector’s Delight",
            description: "Feels exclusive on the wrist—superb finishing and an heirloom-worthy design.",
            username: "Daniel Wu"
        },
        {
            img: WomenReview,
            rating: 4,
            heading: "Daily Luxury",
            description: "Elegant enough for formal events, yet versatile for everyday wear. A perfect balance.",
            username: "Nisha Patel"
        }
    ];



    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: Trigger2Ref.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",

            }
        });

        tl.from(headingRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(DesRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(SliderRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

    }, []);

    return (
        <section className=" w-full h-[80vh] pt-10 flex items-center justify-center" ref={Trigger2Ref}>
            <Container clasess="w-full px-4">
                <div className="text-center mb-10 md:w-1/2 mx-auto mt-10">
                    <h1 className=" md:text-[2vw] text-[6vw] font-semibold font-[cinzel]" ref={headingRef}> What Our Customers Are Saying</h1>
                    <p className="text-sm mt-5 font-[cardo] font-[800]" ref={DesRef}>We take pride in crafting smartwatches that people love. Here’s what real users say about their experience—trusted by thousands worldwide for style, technology, and performance.</p>
                </div>
                <div ref={SliderRef}>
                    <SlickSlider data={reviews} title="review" settings={settings} />
                </div>
            </Container>
        </section>
    )
}

const ExploreSecond = ({ triggerRef, DetailsRef, ImageRef }) => {



    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",

            }
        });

        tl.from(ImageRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(DetailsRef.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });


    }, []);


    return (
        <section ref={triggerRef} className=" w-full flex items-center min-h-[100vh] bg-gradient-to-b from-[#1c2335] to-[#1F2024] text-white " >
            <Container clasess="w-full grid md:grid-cols-2 items-center px-4">
                <img src={Image8} loading="lazy" alt="" ref={ImageRef} className="md:w-[28vw] w-[90%] mx-auto mt-5 rounded-lg " />
                <div className=" text-start " ref={DetailsRef}>
                    <h1 className=" md:text-[1.5vw] text-[6vw] font-semibold mt-5 font-[cinzel]">The Legacy of Precision Engineering</h1>
                    <p className="text-gray-100 mt-2 font-[cardo]">A masterpiece born from the fusion of heritage and innovation. This timepiece reveals the art of mechanical perfection, where every component moves in flawless harmony. An emblem of prestige, crafted for those who define their moments with elegance</p>
                    <button className="mb-5 py-3 font-[cinzel] px-4 bg-white text-black font-bold mt-5 cursor-pointer hover:bg-gray-300 duration-300">Explore More</button>
                </div>
            </Container>
        </section>
    )
}


const PicutesExplore = ({ ShowRef, TrigerRef }) => {
    const items = [
        { id: "1", img: MenImage1, url: null, height: 800 },
        { id: "2", img: MenImage2, url: null, height: 400 },
        { id: "3", img: MenImage3, url: null, height: 600 },
        { id: "4", img: MenImage4, url: null, height: 500 },
        { id: "5", img: MenImage5, url: null, height: 350 },
        { id: "6", img: MenImage6, url: null, height: 700 },
        { id: "7", img: MenImage7, url: null, height: 300 },
        { id: "8", img: MenImage8, url: null, height: 600 },
        { id: "9", img: MenImage9, url: null, height: 400 },
        { id: "10", img: MenImage10, url: null, height: 550 },
        { id: "11", img: MenImage11, url: null, height: 350 },
        { id: "12", img: MenImage12, url: null, height: 800 },
        { id: "13", img: MenImage13, url: null, height: 450 },
        { id: "14", img: MenImage14, url: null, height: 650 },
    ];



    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: TrigerRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",

            }
        });

        tl.from(ShowRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });


    }, []);



    return (
        <section ref={TrigerRef} className="w-full min-h-[100vh] px-5 text-white bg-black md:overflow-hidden overflow-x-auto ">
            <Container clasess="w-full pt-10 h-full" >
                <div ref={ShowRef}>

                    <Masonry
                        items={items}
                        ease="power3.out"
                        duration={0.8}
                        stagger={0.10}
                        animateFrom="Random"
                        scaleOnHover={true}
                        hoverScale={0.95}
                        blurToFocus={true}
                        colorShiftOnHover={true}
                    />
                </div>
            </Container>
        </section>

    )

}

export default Home
