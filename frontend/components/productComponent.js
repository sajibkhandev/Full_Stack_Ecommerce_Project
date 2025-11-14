import Image from 'next/image';
import React from 'react'

const ProductComponent = async () => {
    const data = await fetch('http://localhost:8000/api/v1/product/viewproduct')
    const posts = await data.json()
    console.log(posts);

    return (
        <div className='flex'>
            {
                posts.map(item => (
                    <div className='bg-blue-300 p-3 mx-5'>
                        <p>{item.name}</p>
                        <Image
                            src={`http://localhost:8000${item.image}`}
                            alt="Picture of the author"
                            width={300}
                            height={300}
                            unoptimized
                        />
                        <p>{item.sellprice?
                        <span><del>{item.regularprice} </del>{item.sellprice}</span>
                        :item.regularprice}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductComponent