"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductCard = async () => {
  const data = await fetch('http://localhost:8000/api/v1/product/viewproduct')
  const posts = await data.json()
 

  return (
    <section>
      <Container>
        <Row>
          {
            posts.map(item => (
              <Col xs lg="3">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`http://localhost:8000${item.image}`} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.sellprice?
                      <span><del>{item.regularprice}</del> --{item.sellprice}</span>
                      :<span>{item.regularprice}</span>}
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
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