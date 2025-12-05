
import React from 'react'
import SingleProductComponent from "@/components/singleProductComponent";


const SingleProduct = async ({ params }) => {
    let slug = await params
    // console.log(slug.slug);

    const data1 = await fetch('http://localhost:8000/api/v1/product/viewproduct')
    const product = await data1.json()

    const data2 = await fetch('http://localhost:8000/api/v1/product/vieweaddtocart')
    const cart = await data2.json()
  
    
  

    

    return (
        <SingleProductComponent product={product} cart={cart} slug={slug.slug}/>
        

     

    )
}

export default SingleProduct