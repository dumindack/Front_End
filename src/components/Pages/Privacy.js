import React, { Component } from 'react';
import '../CSS/Privacy.css';

export class Privacy extends Component {
  render() {
    return (
      <div>
        <div>
              <div class="header" >
                <h1>PRIVACY POLICY</h1>
                <p>When you are placing an order with Cake World, you are required to provide us with all the relevant information by filling our order form, such as customer’s billing details, 
                  recipient’s shipping details and customer’s financial details. But, we do not use these informations for any other purpose, other than to proceed with your order. When using 
                  this web site, this may contain certain links to other sites. We request you to kindly note that Cake World
                   is not responsible for the privacy practices of these other web sites. We would like to encourage you to read the privacy statements of such these web sites before using it.</p>
              </div>

              <div class="header1" >
                <h1>SECURITY POLICY</h1>
                <p>It’s important to be secure, when you are using your credit card over the internet. The customer must consider whether that 
                  the web site is able to guarantee the security of the financial details. Yes. That’s why Cake World is partnered with 2checkout, 
                  the best encryption method available today and who offers e commerce solutions to thousands of companies all over the world. 2checkout 
                  use SSL encryption method to protect credit card details.</p>
              </div>

        </div>
      </div>
    )
  }
}

export default Privacy
