import React from 'react'
import Carousel from '../Carousel/Carousel'
import ProductCard from './ProductCard'
import HomeCard from '../../HomeCard'

import item1 from "../../assets/item1.jpg"
import item2 from "../../assets/item2.jpg"
import item3 from "../../assets/item3.jpg"
import item4 from "../../assets/item4.jpg"
import sampleData from '../../constants.js'

const Home = ({ totalCartCount, setCartCount }) => {
    return (
        <div>
            <Carousel />
            <div className="container">
                <div className="home-card-container">
                    {[data, data, data, data, data, data, data, data]
                        .flat() // Flat converts the 2d or 3d array into 1d array OR can use spread operator multipe times in ...data, ...data
                        .map((currentData, index) => (
                            <HomeCard
                                key={"HomeCard-" + index}
                                xyz="abc"
                                data={currentData}
                            />
                        ))}
                </div>
                <div className="product-card-container">
                    <ProductCard
                        data={sampleData[0]}
                        totalCartCount={totalCartCount}
                        setCartCount={setCartCount}
                    />
                    <ProductCard
                        data={sampleData[1]}
                        totalCartCount={totalCartCount}
                        setCartCount={setCartCount}
                    />
                    <ProductCard
                        data={sampleData[2]}
                        totalCartCount={totalCartCount}
                        setCartCount={setCartCount}
                    />
                    <ProductCard
                        data={sampleData[3]}
                        totalCartCount={totalCartCount}
                        setCartCount={setCartCount}
                    />
                    <ProductCard
                        data={sampleData[4]}
                        totalCartCount={totalCartCount}
                        setCartCount={setCartCount}
                    />
                    <ProductCard
                        data={sampleData[5]}
                        totalCartCount={totalCartCount}
                        setCartCount={setCartCount}
                    />
                    <ProductCard
                        data={sampleData[6]}
                        totalCartCount={totalCartCount}
                        setCartCount={setCartCount}
                    />
                    <ProductCard
                        data={sampleData[7]}
                        totalCartCount={totalCartCount}
                        setCartCount={setCartCount}
                    />
                    <ProductCard
                        data={sampleData[8]}
                        totalCartCount={totalCartCount}
                        setCartCount={setCartCount}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

const data = [
    {
        title: " Custom Appliances for your home | Up to 55% off",
        items: [
            {
                image: item1,
                title: "Air Conditioner",
            },
            {
                image: item2,
                title: "Refrigirator",
            },
            {
                image: item3,
                title: "Microwaves",
            },
            {
                image: item4,
                title: "Washing Machine",
            },
        ],
        redirect: {
            label: "See more",
            url: "https://www.explorin.io",
        },
    },
];