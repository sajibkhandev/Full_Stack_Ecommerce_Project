"use client"

import Image from 'next/image';
import React from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const AddToCartComponent = ({ posts }) => {
  // console.log(posts);

  let totalPrice=0
  posts.map(item=>{
    totalPrice+=item.productId.sellprice!=0? item.productId.sellprice*item.quantity :item.productId.regularprice*item.quantity
    
  })


  let handleIncrement=(item,type)=>{
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
            productId: item.productId._id,
            quantity: 1,
            
          }
        )
      })
      .then(function (res) { console.log(res) })
      .catch(function (res) { console.log(res) })
    
  }


  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>SubTotal</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(item => (
              <tr key={item._id}>
                <td>
                  <Image
                    src={`http://localhost:8000${item.productId.image}`}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    unoptimized
                    
                  />
                </td>
                <td>{item.productId.name}</td>
                <td className='flex gap-x-2'>
                  <button onClick={()=>handleIncrement(item,'decrement')} className='border border-black py-0.5 px-2'>-</button>
                  <button>{item.quantity}</button>
                  <button onClick={()=>handleIncrement(item,'increment')} className='border border-black py-0.5 px-2'>+</button>
                </td>
                <td>{item.productId.sellprice!=0? item.productId.sellprice :item.productId.regularprice }</td>
                <td>{item.productId.sellprice!=0? item.productId.sellprice*item.quantity :item.productId.regularprice*item.quantity }</td>
              </tr>
            ))
          }

        </tbody>
      </Table>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Price</th>
          <th>Tax(15%)</th>
          <th>Delivery</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{totalPrice}</td>
          <td>{totalPrice*15/100}</td>
          <td>50</td>
          <td><u><b>{totalPrice+(totalPrice*15/100)+50}</b></u></td>
        </tr>
       
        
      </tbody>
    </Table>

     <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>

    

    </Container>
  )
}

export default AddToCartComponent