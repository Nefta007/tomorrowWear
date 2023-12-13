import React  from "react";
import "./hero.css";
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero-image.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals</h2>
                <div>
                    <p>New</p>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt='arrow_icon' />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt='heroImg' />
            </div>
        </div>
    )
}

export default Hero