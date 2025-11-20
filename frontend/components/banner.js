"use client"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { Container } from 'react-bootstrap';


const Banner = () => {
    return (
        <Container>
            <Carousel>
            <Carousel.Item>
                <Image
                    src="http://localhost:8000/uploads/1760615410644-703960979-banner.png"
                    alt="Picture of the author"
                    width={1900}
                    height={500}
                    unoptimized
                    className='w-full'
                />



                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

                  <Image
                    src="http://localhost:8000/uploads/1760615410644-703960979-banner.png"
                    alt="Picture of the author"
                    width={1900}
                    height={500}
                    unoptimized
                    className='w-full'
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                  <Image
                    src="http://localhost:8000/uploads/1760615410644-703960979-banner.png"
                    alt="Picture of the author"
                    width={1900}
                    height={500}
                    unoptimized
                    className='w-full'
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </Container>
    )
}

export default Banner