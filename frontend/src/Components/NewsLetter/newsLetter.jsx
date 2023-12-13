import React  from "react";
import './newsLetter.css';

const NewsLetter = () => {
    return (
        <div className="news-letter">
            <h1>Recieve Exclusive Offers</h1>
            <p>Subcribe to our News Letter and Stay Updated on Future Collections</p>
            <div>
                <input type="email" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter