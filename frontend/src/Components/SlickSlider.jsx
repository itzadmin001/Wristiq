import { lazy } from "react";
import Slider from "react-slick";
const ProductCard = lazy(() => import("../Components/ProductCard"))

function SlickSlider({ data, WistList, settings, title }) {



    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    data.map((item, i) => {

                        return (
                            <ProductCard key={i} item={item} WistList={WistList} title={title} />
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default SlickSlider
