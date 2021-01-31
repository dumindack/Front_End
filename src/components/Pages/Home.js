import {Carousel } from 'react-bootstrap';
import React, { Component } from 'react';
import icon from '../../Media/img/cake01.jpg';
import icon1 from '../../Media/img/cake02.jpg';
import icon2 from '../../Media/img/cake03.jpg';
import icon3 from '../../Media/gif/giphy.gif';


export class home extends Component {
    render() {
        return (
            <div>
                
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={icon}
                            height="600"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Place Your Order</h3>
                            <p></p>
                    </Carousel.Caption>
                    </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src={icon1}
                                height="600"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Order Your Cake</h3>
                                <p></p>
                            </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={icon2}
                            height="600"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>ඔබේ කේක් ඇණවුම් කරන්න</h3>
                            <p>.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={icon3}
                            height="600"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p>.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                
                


             
            
            </div>
        )
    }
}

export default home
