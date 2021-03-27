import React, { Component } from 'react';
import './CSS/form.css';


class Selection extends Component{
    render(){
        return(
            <div>


            <div class="selection">
                Are you a Cake Seller or Buyer?

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