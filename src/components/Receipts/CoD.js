import React from 'react';
import jsPDF from 'jspdf';
import logo from '../../Media/logo/logo.png';
import {Link} from "react-router-dom";
import './Receipt.css';


var delivery = 500;
var total =0;
var price;

class CoD extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            cart:JSON.parse(localStorage.getItem('cart')),
            error:null,
          
            response:{},
            orders:[], 
        }
    }
    


   generatePDF(){
        
        var doc = new jsPDF('p','px','a4');


        doc.html(document.querySelector("#content"),{
            callback: function(pdf){
                pdf.save("cakeWorld_order_details_info.pdf");
            }
        })
        
     
   }

  
  
    

    render(){
        const{cart,error}=this.state;
        
        if(error){
            return(
                <div className="center"><h4>Error : {error.message}!!!</h4></div>
            )
        }
        
        
            return(
                <div className="re-container">
                    <div className="Rec-box">
                        <br/><br/>
                        <p className="center" >Thank you for your purchase</p>
                        <br/><br/>
                        <div id="content">
                        <div id = "capture" className="Order-sum">
                            <br/>

                                <div className="logo-container">
                                    <img className="logo" src={logo} width="100px"/>
                 
                                </div>
                                

                            <hr/><br/>
                            <h4>Order Summary</h4>
                            <div className="mid">
                               
                            </div>
             
                            <div id="bot">
                                <div id="table">
                                    <table>
                                        <thead>
                                            <tr className="tabletitle">
                                                <td> <h8>Cake Product</h8></td>
                                                <td><h8>Quantity</h8> </td>
                                                <td><h8>Price(Rs/=) </h8></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {cart.map(order =>
                                            <tr className="service" key={order.productID}>
                                                <td className="tableitem">
                                                    <span className="itemtext">{order.productName}</span>
                                                </td>
                                                <td className="tableitem">
                                                    <span className="itemtext">{order.quantity}</span>
                                                </td>
                                                <td className="tableitem">
                                                    <span className="itemtext">{price=order.quantity*order.price}.00</span>
                                                    <span hidden>{total=total+price}.00</span>
                                                    
                                                </td>
                                            </tr>
                                             )}
                                        
                                            <tr className="service">
                                            <td className="tableitem">
                                                <p className="itemtext"></p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext"><strong>Delivery Cost</strong></p>
                                        
                                                <p className="itemtext"><strong>Total Price</strong></p>
                                            </td>
                                            <td className="tableitem">
                                                <span className="itemtext"><strong>{delivery}.00</strong></span>
                                      
                                                <td>
                                                    <span className="itemtext"><strong>{total+delivery}.00</strong></span>
                                                    <span hidden>{total =0}</span>
                                                </td>
                                            </td>
                                            
                                            </tr>
                                        <br/>
                                        </tbody>
                                    
                                        </table>
                                        <hr/>
                                </div>
                            </div>
                        </div>
                        </div>
                        <button onClick={this.generatePDF} className="hm1-btn" >Download PDF</button>
                        <br/><br/>
                            <Link to="/">
                                    <button  className="hm-btn">back to home</button>
                            </Link>
                        <br/><br/><br/><br/>
                </div>
            </div>                
            )
        }
        
    

}


export default CoD

