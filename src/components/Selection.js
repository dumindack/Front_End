import React, { Component } from 'react';
import './CSS/form.css';
import { Link } from "react-router-dom";


class Selection extends Component{
    render(){
        return(
            <div>


            <div class="selection">
            <h4><strong>Welcome to the CakeWorld</strong></h4>
                You can connect with us as Home-made cake seller or as Buyer.
                <p>Please Register first..</p>

            </div>

            <div class="row row0">


        <div class="column column0"> 
        <button class="btn btn-primary">
        <a href="/Register"> Seller </a> 
        </button>
         </div>

         <div class="column column0">  
        <button class="btn btn-primary">
        <a href="/Register1" > Buyer </a> 
        </button>
         </div>


            
               
        </div>
        </div>
        )
    }
};
export default Selection