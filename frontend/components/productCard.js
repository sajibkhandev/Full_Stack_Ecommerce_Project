"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductCard = ({ alldata }) => {
  console.log(alldata);

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
    <section>
      <Container>
        <Row>
          {
            alldata.map(item => (
              <Col key={item._id} xs lg="3">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`http://localhost:8000${item.image}`} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.sellprice != 0 ?
                        <><span className='text-red-500 font-bold text-xl'>{item.sellprice}$</span><del>{item.regularprice}$</del></>
                        : <span className='text-red-500 font-bold text-xl'>{item.regularprice}$</span>}
                    </Card.Text>
                    <Button onClick={() => handleAddToCart(item)} variant="primary">Add To Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))

          }

        </Row>
      </Container>
    </section>
  )
}

export default ProductCard