import React from 'react'

const Category = async ({params}) => {
    let slug=await params

    const data = await fetch(`http://localhost:8000/api/v1/product/viewsinglecategory?slug=${slug.slug}`)
  const posts = await data.json()
  console.log(posts);
  
    
    
  return (
    <div>
        <ul>
            {posts.map(item=>(
                <li>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Category