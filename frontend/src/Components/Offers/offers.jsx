import React  from "react";
import './offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <p>Offers on best selling products!</p>
                <button>See Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt='exclusive_img' />
            </div>

        </div>
    )
}

export default Offers