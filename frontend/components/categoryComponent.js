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
           <Link key={item._id} href={`/category/${item._id}`}>
             <li className='group'>{item.name}---{item.ownerId.username}
                { item.subcategorylist&& item.subcategorylist.map(item2=>(
                  <ul className='hidden group-hover:block bg-red-500 w-[150px]'>
                  <li>{item2.name}</li>
                  
                </ul>
                ))}
           
             </li>
             </Link>
          ))

        }
      </ul>
    </div>
  )
}

export default CategoryComponent