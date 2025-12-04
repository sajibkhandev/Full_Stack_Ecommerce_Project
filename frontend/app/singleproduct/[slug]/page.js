'use client'

import Image from 'next/image';
import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap';

const SingleProduct = async ({ params }) => {
    let slug = await params
    console.log(slug.slug);

    const data = await fetch('http://localhost:8000/api/v1/product/viewproduct')
    const posts = await data.json()

    let handleAddToCart = (item) => {
    // console.log(item._id);

    fetch("http://localhost:8000/api/v1/product/addtocart",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(
          {
            productId: item._id,
            quantity: 1,
            cartOwnerId: "68d52225e87e60b4edb71e76"
          }
        )
      })
      .then(function (res) { console.log(res) })
      .catch(function (res) { console.log(res) })

  }







    return (
        posts.map(item => (
            item._id == slug.slug
            &&
            <section key={item._id} className='py-20'>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <Image
                                    src={`http://localhost:8000${item.image}`}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    unoptimized

                                />

                            </div>
                        </Col>
                        <Col>
                            <div className='w-full'>
                                <h3>{item.name}</h3>
                                <p>{item.des}</p>
                               <div className='flex gap-x-5'>
                                 <div className='bg-blue-200 w-[200px] border border-black py-2 px-4 text-3xl'>
                                    <p >{item.sellprice != 0 ?
                                        <><span className='text-red-500 font-bold text-3xl'>{item.sellprice}$ </span> <del className='text-xl'> {item.regularprice}$</del></>
                                        : <span className='text-red-500 font-bold text-3xl'>{item.regularprice}$</span>}</p>
                                </div>
                                <div className='bg-blue-200 w-[200px] border border-black py-2 px-4 text-3xl'>
                                    <p > <del><span className='text-black font-bold text-3xl'>{item.regularprice}$</span></del></p>
                                </div>
                               </div>
                               <ul className='pt-20'>
                                <li>Key Features</li>
                                <li>Model: Redmi A5</li>
                                <li>Display: 6.88" HD+ 120Hz IPS Display</li>
                                <li>Processor: Unisoc T7250 (12 nm)</li>
                                
                               </ul>



                            </div>
                            <div className='mb-10'>
                                <button className='border border-black py-1 px-5 mr-1'>+</button>
                                <button>1</button>
                                <button className='border border-black py-1 px-5 ml-1'>-</button>
                            </div>
                              <Button onClick={() => handleAddToCart(item)} variant="primary">Add To Cart</Button>
                        </Col>
                    </Row>
                </Container>

            </section>
        ))

    )
}

export default SingleProduct