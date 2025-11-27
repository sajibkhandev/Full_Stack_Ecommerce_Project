import AddToCartComponent from '@/components/addToCartComponent'
import React from 'react'

const Cart = async () => {
   const data = await fetch('http://localhost:8000/api/v1/product/vieweaddtocart')
  const posts = await data.json()
  // console.log(posts);
  
  return (
    <div>
        <AddToCartComponent posts={posts}/>
    </div>
  )
}

export default Cart