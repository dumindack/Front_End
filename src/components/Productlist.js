import React, { Component } from 'react';
import {ProductConsumer} from '../contextAPI';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
import './CSS/form.css'
import GiftCart from './GiftCart';
import { Link } from "react-router-dom";
import Carticon from '../Media/icon/carticon.svg';



export default class Productlist extends Component{

    render(){
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
                
                <div class="plistH">
                    <h4><b>Flower And Chocolate Gifts</b></h4>
                    </div>
                    <h5>You can send following beautiful flowers and Chocolates with cakes for your lovlies for show them more love.</h5>
                

                <div className="row">
                    <ProductConsumer>
                        {(value)=>{
                            return value.products.map(product=>{
                                return <Product key={product.id} product={product}/>
                            })
                        }}
                    </ProductConsumer>
                </div>
                
            </div>
            </div>
        );
    }
}


