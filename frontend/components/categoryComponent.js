import Link from 'next/link';
import React from 'react'

const CategoryComponent = async () => {
  const data = await fetch('http://localhost:8000/api/v1/product/viewcategory')
  const posts = await data.json()
  console.log(posts);
  


  return (
    <div className='py-10'>
      <ul>
        {
          posts.map(item=>(
           <Link key={item._id} href={`/category/${item._id}`}> <li >{item.name}---{item.ownerId.username}</li></Link>
          ))

        }
      </ul>
    </div>
  )
}

export default CategoryComponent