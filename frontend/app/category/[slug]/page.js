import React from 'react'

const Category = async ({params}) => {
    let slug=await params

    const data = await fetch(`http://localhost:8000/api/v1/product/viewsinglecategory?slug=${slug.slug}`)
  const posts = await data.json()
  console.log(posts);
  
    
    
  return (
    <div>
      <h1 className='pb-10'>Here is All Subcategory :</h1>
        <ul>
            {posts.map(item=>(
                <li>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Category