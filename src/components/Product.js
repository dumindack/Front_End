import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import {Card, Row, Col, Button} from 'react-bootstrap';
import {ProductConsumer} from '../contextAPI';
import Details1 from './Details1';
import './CSS/form.css'


export default class Product extends Component{
    render(){
        const {id, title, img, price, inCart } = this.props.product;
        return(
            <div className="col-9 mx-auto col-md-6 col-lg-3">
                <ProductConsumer>
                   {(value)=>(
                       <Card onClick={()=> {value.handleDetails(id)}} style={{ width:'18rem', height:'27rem'}}>
                           <Link to="/Details1">
                               <Card.Img variant="top" src={img}/>
                            </Link>
                            <Card.Body>
                                <Card.Title><h6>{title}</h6></Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Row>

                                <Col>
                                    <div class="plistH"><h5>Rs:{price}</h5></div>
                                    </Col>
                                    <Col>
                                    <Button size="sm" disabled={inCart} onClick={()=>{value.addToCart(id)}} variant="secondary">
                                    {inCart === true? (<h6>In Cart</h6>) : (<h6>Add To Cart</h6>)}
                                    </Button>
                                    </Col>
                                    
                                </Row>
                            </Card.Footer>
                       </Card>
                   )}

                </ProductConsumer>
            </div>
        );
    }
}



