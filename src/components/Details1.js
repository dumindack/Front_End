import React, {Component} from 'react'
import { ProductConsumer } from '../contextAPI';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';



export default class Details1 extends Component{
    render(){
        
        return(
            <ProductConsumer>
                {(value)=> {
                    const{id, title, img, info, price, company, inCart} = value.detailProduct;
                    return(
                        <div>
                             <div class="Gcart" >  
                             <ProductConsumer>
                            {(value)=> {
                           return<Link  eventkey={2} to="/GiftCart"> GIFT CART({value.GiftCart.length})
                           </Link>
                          }}
                           </ProductConsumer>

                             </div> 
                        <div className="container">
                            <div className="col-10 mx-auto text-center">
                                <h1>Gift Details</h1>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4 mx-auto col-md-4">
                                <img src={img} className="img-fluid"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4 mx-auto col-md-4">
                                <h4>
                                    Model: {title}
                                </h4>
                                <h5>
                                    <strong> Price : <span>Rs.</span> {price}</strong>
                                </h5>
                                <h6>Discription :</h6>
                                <h6>{info}</h6>
                                <div>
                                    <Link to="/Productlist">Back to Gifts</Link>

                                    <Button size="sm" disabled={inCart} onClick={()=> {value.addToCart(id)}} variant="secondary">
                                        {inCart === true? (<h6> InCart </h6>) : (<h6>Add To Cart</h6>)}

                                    </Button>
                                </div>

                            </div>
                        </div>
                        </div>
                    )
                }}
            
            </ProductConsumer>
        )

    }
}