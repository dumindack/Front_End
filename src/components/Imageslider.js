import React, { Component } from 'react';
import {Carousel } from 'react-bootstrap';
import icon from '../Media/img/cakenew01.jpg';
import icon1 from '../Media/img/cakenew02.jpg';
import icon2 from '../Media/img/cake03.jpg';
import icon3 from '../Media/gif/giphy.gif';
import './CSS/Imageslider.css'


export class Imageslider extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img class="ims"                    
                            src={icon}
                            height="600"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                    </Carousel.Caption>
                    </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                class="ims"
                                src={icon1}
                                height="600"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                            </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            class="ims"
                            src={icon2}
                            height="600"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p>.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            class="ims"
                            src={icon1}
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

export default Imageslider
