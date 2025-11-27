import Image from 'next/image';
import React from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const AddToCartComponent = ({ posts }) => {
  console.log(posts);


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
              <tr>
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
                  <button className='border border-black py-0.5 px-2'>-</button>
                  <button>{item.quantity}</button>
                  <button className='border border-black py-0.5 px-2'>+</button>
                </td>
                <td>{item.productId.sellprice!=0? item.productId.sellprice :item.productId.regularprice }</td>
                <td>{item.productId.sellprice!=0? item.productId.sellprice*item.quantity :item.productId.regularprice*item.quantity }</td>
              </tr>
            ))
          }

        </tbody>
      </Table>

    </Container>
  )
}

export default AddToCartComponent