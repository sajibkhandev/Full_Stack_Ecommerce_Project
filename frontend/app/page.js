import CategoryComponent from '@/components/categoryComponent'
import ProductComponent from '@/components/productComponent'
import React from 'react'

const page = () => {
  return (
    <div>
      <CategoryComponent/>
      <h1 className='text-4xl font-bold'>Product </h1>
      <ProductComponent/>
    </div>
  )
}

export default page