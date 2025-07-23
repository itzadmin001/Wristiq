
import { use, useRef } from 'react'
import Container from '../Components/Container'
import About1 from "../assets/Images/AboutImg.jpg"
import About2 from "../assets/Images/Aboutimg-2.jpg"
import About4 from "../assets/Images/Image-9.webp"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



function About() {

    const TriggerRef = useRef()
    const FirstHeadingRef = useRef()
    const FirstDesRef = useRef()
    const FirstImageRef = useRef()
    const SecondHeadingRef = useRef()
    const SecondDesRef = useRef()
    const SecondImageRef = useRef()
    const HeadingRef = useRef()
    const ThirdRef = useRef()
    const ThirdSecondRef = useRef()
    const ThirdImgRef = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: TriggerRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",

            }
        });

        tl.from(FirstHeadingRef.current, {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(FirstDesRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(FirstImageRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(HeadingRef.current, {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(SecondImageRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(SecondHeadingRef.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(SecondDesRef.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(ThirdRef.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(ThirdSecondRef.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        tl.from(ThirdImgRef.current, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });



    }, []);


    return (
        <section className='w-full min-h-[100vh] mb-10 ' ref={TriggerRef}>
            <Container clasess="w-full px-6">
                <div className='md:flex justify-between items-center pt-10'>
                    <div className='text-center'>
                        <h1 className='md:text-[2vw] text-[6vw] font-semibold font-[cinzel]' ref={FirstHeadingRef}>Mastering Time with Unmatched Elegance</h1>
                        <p className='md:w-[38vw] text-gray-800 mt-5 mb-10 font-[cardo]' ref={FirstDesRef}>
                            At Wristiq, we create more than timepieces—we craft enduring symbols of sophistication. Each watch reflects a legacy of precision, artistry, and understated luxury for those who value timeless excellence.
                        </p>
                    </div>
                    <img src={About1} loading="lazy" alt="" className='md:w-[18rem] rounded-lg' ref={FirstImageRef} />
                </div>

                <div>
                    <h1 className='md:text-[3vw] text-[6vw]  text-center mt-10 mb-5 font-[cinzel] font-[800]' ref={HeadingRef} >Our Philosophy</h1>
                    <div className='md:flex items-center justify-between'>
                        <img src={About2} ref={SecondImageRef} loading="lazy" alt="" className='md:w-[18rem] rounded-lg' />
                        <div>
                            <h1 className='md:text-[2vw] text-[6vw] text-center font-semibold mt-5 font-[cinzel]' ref={SecondHeadingRef}>Where Heritage Meets Modern Precision</h1>
                            <p ref={SecondDesRef} className='md:w-[38vw] text-center text-gray-800 mb-10 font-[cardo]'>
                                Every Wristiq creation embodies the spirit of fine watchmaking—blending mechanical mastery with contemporary design. We believe in crafting timepieces that resonate with connoisseurs of both tradition and innovation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col items-center gap-4'>
                    <h1 className='md:text-[2vw] text-[6vw] font-bold text-center mt-5 font-[cinzel]' ref={ThirdRef}>Precision Crafted for the Modern Collector</h1>
                    <p ref={ThirdSecondRef} className='text-center text-gray-800 md:w-[38vw] font-[cardo]'>
                        Each watch is meticulously engineered using premium materials—from polished steel and sapphire glass to intricate gear systems. Wristiq stands for excellence, offering a seamless blend of elegance, performance, and durability.
                    </p>
                    <img src={About4} ref={ThirdImgRef} loading="lazy" alt="" className='w-full rounded-2xl' />
                </div>
            </Container>
        </section>

    )
}

export default About
