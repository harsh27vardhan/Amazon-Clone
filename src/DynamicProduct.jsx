import React from 'react'
import { useParams } from 'react-router-dom'
import sampleData from './constants.js';

const Product = () => {
    const { productId } = useParams();
    console.log(productId);
    const currentProduct = sampleData.find((item) => item.product_id === productId) || { key: "Product Not Available" }
    // find returns undefined if there is no object available.
    return (
        <div className='productIdCard flex flex-col justify-center items-start my-10 mx-auto w-[400px] gap-4 border-2 border-solid p-5'>
            {/* <h1>{JSON.stringify(currentProduct)}</h1> */}
            <img src={currentProduct.img_link} alt="" className='w-[150px]' />
            <h1 className='font-bold text-base'>{currentProduct.product_name}</h1>
            <h3 className='text-2xl'>{currentProduct.discounted_price}</h3>
            <p className='text-xl'>Rating : {currentProduct.rating}</p>
        </div>
    )
}

export default Product
