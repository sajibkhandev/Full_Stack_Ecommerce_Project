"use client"

import React from 'react'
import Image from 'next/image'
import { Container, Col, Row, Button } from 'react-bootstrap';

const SingleProductComponent = ({product,cart,slug}) => {
   
    

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
  let handleIncrement=(item2,type)=>{
    // console.log(item.productId._id);
    // console.log(type);


     fetch(`http://localhost:8000/api/v1/product/addtocart?type=${type}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(
          {
            productId: item2.productId._id,
            quantity: 1,
            
          }
        )
      })
      .then(function (res) { console.log(res) })
      .catch(function (res) { console.log(res) })
    
  }

  


    
  return (
      product.map(item => (
            item._id == slug
            &&
             cart.map(item2=>(
                item2.productId._id== item._id &&

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
                                <button onClick={()=>handleIncrement(item2,'increment')} className='border border-black py-1 px-5 !mr-3'>+</button>
                                <button>{item2.quantity}</button>
                                <button onClick={()=>handleIncrement(item2,'decrement')} className='border border-black py-1 px-5 !ml-3'>-</button>
                            </div>
                              <Button onClick={() => handleAddToCart(item)} variant="primary">Add To Cart</Button>
                        </Col>
                    </Row>
                </Container>

            </section>


             ))
           
        ))
  )
}

export default SingleProductComponent