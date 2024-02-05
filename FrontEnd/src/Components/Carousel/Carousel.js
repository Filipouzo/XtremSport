import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = (props) => {
    const { images } = props;

    return (
        <div className="Carousel">
            <Carousel autoPlay interval={2000} infiniteLoop>
                {images && images.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image} alt="" />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
