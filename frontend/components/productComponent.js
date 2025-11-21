
import React from 'react'
import ProductCard from './productCard';

const ProductComponent = async () => {
    const data = await fetch('http://localhost:8000/api/v1/product/viewproduct')
    const posts = await data.json()
    // console.log(posts);

    return (
        <ProductCard alldata={posts}/>
        
    )
}

export default ProductComponent