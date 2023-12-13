import React  from "react";
import Hero from '../Components/Hero/hero';
import Popular from "../Components/Popular/popular";
import Offers from "../Components/Offers/offers";
import NewCollections from "../Components/NewCollections/newCollections";
import NewsLetter from "../Components/NewsLetter/newsLetter";

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Shop