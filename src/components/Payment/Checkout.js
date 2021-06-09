import React, { Component } from 'react'
import axios from 'axios'
import { Form, Label,Input,FormGroup, FormFeedback } from 'reactstrap';

import { useHistory} from "react-router-dom";
import '../Order/PayForm.css';


localStorage.getItem('Cart');
const currDate = new Date().toLocaleDateString();

class Checkout extends Component  {
  
  user=JSON.parse(atob(localStorage.token.split('.')[1]));

    constructor(props) {
      super(props);
     
       
      this.state = this.getInitialState();
  }

  getInitialState = () => ({
    data:{      
    'cardName': '',
    'cardNo': '',
    'expMonth': '',
    'expYear':'',
    'billDate':currDate,
    'email':this.user.sub,
    'cvv': '',
    'totalPrice':JSON.parse(localStorage.getItem('total')),
    'buyerId': this.user.id,
    'orderNo': localStorage.getItem('orderNo'),
    },
  
  errors: {}
  });
  handleChange = (e) => {
  this.setState({
    
  data: {
    ...this.state.data,
    [e.target.name]:e.target.value
  },
  
    errors: {
        ...this.state.errors,
        [e.target.name]: ''
    }
  });
  }
  validate = () => {
  const { data } = this.state;
  let errors = {};
  
  if (data.cardName === '') errors.cardName = 'Card holder can not be blank.';
  if (data.cardNo === '') errors.cardNo = 'Card no can not be blank.';
  if (data.expMonth === '') errors.expMonth = 'Expire month can not be blank.';
  if (data.expYear === '') errors.expYear = 'Expire year can not be blank.';
  if (data.billDate === '') errors.billDate = 'Bill date can not be blank.';
  if (data.cvv === '') errors.cvv = 'CVV can not be blank.';
  
  return errors;
  }
  
  handleSubmit = (e) => {
  e.preventDefault();
  
  const { data} = this.state;
  const history = useHistory;
  const errors = this.validate();
  
  if (Object.keys(errors).length === 0) {
  console.log(data);
  axios.post('https://cakeworldapi.azurewebsites.net/Api/Payments',
  {
    email:this.state.data.email,
    cardName:this.state.data.cardName,
    cardNo:this.state.data.cardNo,
    expMonth:parseFloat(this.state.data.expMonth),
    expYear:parseFloat(this.state.data.expYear),
    billDate:this.state.data.billDate,
    cvv:this.state.data.cvv,
    totalPrice:parseFloat(this.state.data.totalPrice),
    buyerId:parseFloat(this.state.data.buyerId),
    orderNo:this.state.data.orderNo,
  })
  .then (res => {
    if(res.data ==="Success")
    {
      alert("Payment is successful!")
      this.props.history.push(
        {
          pathname:'/Receipt',
          state:{
                billingId:data.billingId,
                cardName:data.cardName,
                cardNo:data.cardNo,
                billDate:data.billDate,
                email:data.email} 
        });
        
    }
  })
  
  this.setState(this.getInitialState());
  
  } else {
  this.setState({ errors });
  }
  }


  render(){  


     
    const { data, errors } = this.state; 
        return(
          <div className="form-group">
          <div className="payment-card">
              <div id="Registerbox">
               <div >
            <Form onSubmit={this.handleSubmit}>

  
            <div className="payment-card1 mt-50 mb-50">
              <div className="top">
                <div className="payment">Card Details</div>
              </div>
            <div className="one">
            <FormGroup>
                <Label for="cardName">Card Holder's Name</Label>
                <Input value={data.cardName} invalid={errors.cardName? true : false} name="cardName" onChange={this.handleChange} />
                <FormFeedback>{errors.cardName}</FormFeedback>
            </FormGroup>
            </div>
            <div className="two">
            <FormGroup>
                <Label for="cardNo">Card Number</Label>
                <Input value={data.cardNo} invalid={errors.cardNo? true : false} name="cardNo" onChange={this.handleChange} placeholder='4242-4242-4242-4242'
                        pattern='[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}' maxLength='19'/>
                <FormFeedback>{errors.cardNo}</FormFeedback>
            </FormGroup>
            </div>
            <div>
            <div >
            <div className="three">
            <FormGroup>
                <Label for="expMonth">Expiration Date</Label>
                <Input  value={data.expMonth} invalid={errors.expMonth? true : false} name="expMonth" onChange={this.handleChange} placeholder="Month" />
                <FormFeedback>{errors.expMonth}</FormFeedback>
            </FormGroup>
            </div>
            </div>
            <div className="col">
            <div className="four">
            <FormGroup>
                <Label for="expYear">&ensp;</Label>
                <Input  value={data.expYear} invalid={errors.expYear? true : false} name="expYear" onChange={this.handleChange} placeholder="Year" />
                <FormFeedback>{errors.expYear}</FormFeedback>
            </FormGroup>
            </div>
            </div>
            </div>
            <div className="five">
            <FormGroup>
                <Label for="cvv">CVV</Label>
                <Input value={data.cvv} invalid={errors.cvv? true : false} name="cvv" onChange={this.handleChange} placeholder='123' maxLength='3'/>
                <FormFeedback>{errors.cvv}</FormFeedback>
            </FormGroup>
              </div>     

            <div>
            <FormGroup>
                <label><p>Total Price: Rs {data.totalPrice}.00</p></label> 
            </FormGroup> </div>  
            <button className="pay-btn">PAY</button>
            </div>
                     
        </Form>
  
        </div>
        </div>
        
        </div>
        </div>
        )
       
        }

      }
       

export default Checkout