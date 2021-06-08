import React, { Component } from 'react';
import {ProductConsumer} from '../contextAPI';
import { Button, Col, Container, Row} from 'react-bootstrap';




export default class GiftCart extends Component{
    render(){
        return(
           <section>
               <ProductConsumer>
                   {value=>{
                       if(value.GiftCart.length>0){
                           return(
                               <div>
                                   <div>
                                       <div class="plistH"><h4><strong>GIFT CART</strong></h4>
                                       </div>
                                       <div className="container-fluid text-center">
                                           <div className="row">
                                               <div className="col-10 col-lg-2">
                                                   <h5><strong> Gift </strong></h5>
                                               </div>
                                               <div className="col-10 col-lg-2">
                                               <h5><strong> Title </strong></h5>
                                                   
                                               </div>
                                               <div className="col-10 col-lg-2">
                                               <h5><strong> Price </strong></h5>
                                                   
                                               </div>
                                               <div className="col-10 col-lg-2">
                                               <h5><strong> Quantity </strong></h5>
                                                   
                                               </div>
                                               <div className="col-10 col-lg-2">
                                               <h5><strong> Remove </strong></h5>
                                                     
                                               </div>
                                               <div className="col-10 col-lg-2">
                                               <h5><strong> Total </strong></h5>
                                                   
                                               </div>
                                           </div>
                                       </div>
                                       {value.GiftCart.map(GiftCartData=>{
                                           return(
                                               <div className="container-fluid text-center">
                                                   <div className="row">

                                                       <div className="col-10 col-lg-2">
                                                           <img style={{width:'6rem', height:'4rem'}} src={GiftCartData.img} className="img-fluid"/>
                                                       </div>

                                                       <div className="col-10 col-lg-2">
                                                           {GiftCartData.title}
                                                        </div>

                                                        <div className="col-10 col-lg-2">
                                                           {GiftCartData.price}
                                                        </div>

                                                        <div className="col-10 col-lg-2">
                                                           <input size="sm" className="qtyminus" value='-' onClick={()=> value.decrement(GiftCartData.id)}/>
                                                            {GiftCartData.count}
                                                           <input size="sm" className="qtyplus" value='+' onClick={()=> value.increment(GiftCartData.id)}/>
                                                           </div>

                                                           <div className="col-10 col-lg-2">
                                                               <Button variant="secondary" onClick={()=>{value.removeItem(GiftCartData.id)}} size="sm"> <h6>Remove</h6></Button>
                                                               </div>

                                                           <div className="col-10 col-lg-2">
                                                           {GiftCartData.total}
                                                            </div>





                                                       </div>
                                                       </div>
                                           )
                                       })}
                                       <hr></hr>
                                       <container>
                                           <Row>
                                               <Col>
                                               <div class="plistH">
                                               <h4><strong>Total : {value.GiftCartSubTotal}</strong></h4></div>
                                               </Col>
                                           </Row>
                                       </container>
                                       <hr></hr>
                                   </div>
                               </div>
                           )
                       }else{
                           return(
                               <div>
                                   <h3>Currently your cart is <span style={{color:"red"}}> Empty</span></h3>
                               </div>
                           )
                       }
                   }
                }
               </ProductConsumer>
           </section>
        )
    }
}