import React, {useState , useEffect, useRef,  Component} from 'react'
import axios from 'axios';
import cardpayment from '../../Media/icon/cardpayment.png';
import { Link} from "react-router-dom";
import CartDetails from './CartDetails';
import './Order.css';
import './PayForm.css';
import './Radio.css';
import './Popup1.css';

function Order(props) {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);



  useEffect(() => {
      if(JSON.parse(localStorage.getItem("cart"))) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    }, [])



  const changeQuantity = (item, e) => {
      const productList = [...cart];
      const index = productList.indexOf(item);
      if(e === '+') {
        productList[index].quantity++;
      }
      else {
        if(productList[index].quantity > 1) {
          productList[index].quantity--;
        }
        else {
          productList.splice(index, 1);
        }
      } 
      setCart(productList);
      localStorage.setItem("cart", JSON.stringify(productList));
    }
    

    const currDate = new Date().toLocaleDateString();
    


    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
      if (localStorage.token) {
        const user= JSON.parse(atob(localStorage.token.split('.')[1]));
        if (user.role ==="Buyer"){
          axios.get(`https://localhost:44305/api/Buyers/${user.id}`)
            .then(resp => {
            setBuyers(resp.data)
            console.log(resp.data);
        })
        .catch(err => {
            console.error(err);
        });
        }else{
          console.log(`error`)
        }
      }
    }, []);

  
    localStorage.setItem("BUYER_EMAIL", buyers.email);
   
    




    const [order, setOrder] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshOrder();
    }, [])

    const ordersAPI = (url = `https://localhost:44305/api/Ors/`) => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshOrder() {
        ordersAPI().fetchAll()
            .then(res => {
                setOrder(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('ID') == "0")
            ordersAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshOrder();
                })
                .catch(err => console.log(err))
        else
            ordersAPI().update(formData.get('ID'), formData)
                .then(res => {
                    onSuccess();
                    refreshOrder();
                })
                .catch(err => console.log(err))
    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }


    const initialFieldValues = {
      ID: 0 ,
      customerId: '',
      Quantity: '',
      orderDate:'',
      requiredDate: '',
      orderNumber:'',
      firstName: '',
      lastName: '',
      companyName: '',
      addressLine1: '',
      addressLine2: '',
      town: '',
      city: '',
      postalCode: '',
      phone: '',
      email: '',
      method: ''
  }


    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit])

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const validate = () => {
        let temp = {}
        temp.firstName = values.firstName == "" ? false : true;
        temp.lastName = values.lastName == "" ? false : true;
        temp.addressLine1 = values.addressLine1 == "" ? false : true;
        temp.addressLine2 = values.addressLine2 == "" ? false : true;
        temp.town = values.town == "" ? false : true;
        temp.city = values.city == "" ? false : true;
        temp.phone = values.phone == "" ? false : true;
        temp.postalCode = values.postalCode == "" ? false : true;
        temp.requiredDate = values.requiredDate == "" ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }

    const resetForm = () => {
        setValues(initialFieldValues)
        document.getElementById().value = null;
        setErrors({})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData()
            formData.append('ID', values.ID)
            formData.append('customerId', buyers.id)
            formData.append('quantity', localStorage.getItem('CartQuantity'))
            formData.append('orderDate', currDate)
            formData.append('requiredDate', values.requiredDate)
            formData.append('orderNumber', OrderNo)
            formData.append('firstName', values.firstName)
            formData.append('lastName', values.lastName)
            formData.append('companyName', values.companyName)
            formData.append('addressLine1', values.addressLine1)
            formData.append('addressLine2', values.addressLine2)
            formData.append('town', values.town)
            formData.append('city', values.city)
            formData.append('postalCode', values.postalCode)
            formData.append('phone', values.phone)
            formData.append('email', buyers.email)
            formData.append('method', display)
            addOrEdit(formData, resetForm)
        };
    }

    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '')
    
    var str = `${buyers.firstName}`;
    var first = str.charAt(0).toUpperCase();
    var str = `${buyers.lastName}`;
    var last = str.charAt(0).toUpperCase();

    var OrderNo = "#" + "00" + localStorage.getItem('CartQuantity')+ first + last + buyers.id;

    
  
    
    let paymentState = ["card", "cash on delivery"];
    const [display, setDisplay] = useState("card");


 
console.log(values)















useEffect(() => {
  if (localStorage.token) {
    const user= JSON.parse(atob(localStorage.token.split('.')[1]));
    if (user.role ==="Buyer"){
      axios.get(`https://localhost:44305/api/Buyers/${user.id}`)
        .then(resp => {
        setBuyers(resp.data)
        console.log(resp.data);
    })
    .catch(err => {
        console.error(err);
    });
    }else{
      console.log(`error`)
    }
  }
}, []);



const cartItem = JSON.parse(localStorage.getItem("cart"));

const [items, setItems] = useState([]);
const [op, setOp] = useState([])


useEffect(() => {
    refreshOp();
}, [])

const opsAPI = (url = `https://localhost:44305/api/OrderproDetails/`) => {
    return {
        fetchAll: () => axios.get(url),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id)
    }
}

function refreshOp() {
    opsAPI().fetchAll()
        .then(res => {
            setOp(res.data)
            
        })
        .catch(err => console.log(err))
}

const addOrEdit1 = (formData, onSuccess) => {
    if (formData.get('Id') == "0")
        opsAPI().create(formData)
            .then(res => {
                onSuccess();
                refreshOp();
                
            })
            .catch(err => console.log(err))
    else
        opsAPI().update(formData.get('Id'), formData)
            .then(res => {
                onSuccess();
                refreshOp();
               
            })
            .catch(err => console.log(err))
}



const initialFieldValues1 = {

  Id: 0 ,
  orderNo: '',
  buyerId: '',
  productId: '',
  productName: '',
  unitPrice: '',
  productQuantity: '',

}


const [values1, setValues1] = useState(initialFieldValues1)


useEffect(() => {
    if (recordForEdit != null)
        setValues1(recordForEdit);
}, [recordForEdit])

const handleInputChange1 = e => {
    const { name, value } = e.target;
    setValues1({
        ...values1,
        [name]: value
    })

}

const validate1 = () => {
    let temp = {}
    temp.id = values1.id == "" ? false : true;
    setErrors(temp)
    return Object.values(temp).every(x => x == true)
}

const resetForm1 = () => {
    setValues1(initialFieldValues1)
    document.getElementById().value = null;
    setErrors({})
}




const handleFormSubmit1 = e => {
   
    
      cartItem.forEach(function (item){
  
        const formData = new FormData()
        formData.append('Id', values1.Id)
        formData.append('orderNo', localStorage.getItem('orderNo'))
        formData.append('buyerId' , buyers.id)
        formData.append('productId', item.productID)
        formData.append('productName', item.productName)
        formData.append('unitPrice', item.price)
        formData.append('productQuantity', item.quantity)
        
        addOrEdit1(formData, resetForm1)

      }
      );
    
}















const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    if(display === "card")
    {setIsOpen(!isOpen);}
    else{
      
      props.history.push({
        pathname: "/CoD"
      })
    }
  }



 

    
        return (
            <div>
                <div className="or-container">
                  <br/>
      
                      <div>
                        {isOpen && 
                          <>
                            <div  className="popup-box">
                                <div  className="box">
                                  <div className="pop-container">
                                    <h5>continue your order.....</h5>
                                      <Link to="/Checkout">
                                          <button  className="pp-pay-btn">payment</button>
                                      </Link>
                                  </div>
                                </div>
                            </div>
                          </>
                        }
                      </div>


                    <div className="or-title">
                        <h2>Product Order Form</h2>
                        <hr/>
                        
                    </div>
                    <div className="d-flex">
                        <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                            <h6>Order Details</h6>


                            <label className="label">
                              <span className="fname">First Name <span className="required">*</span></span>
                              <input className={+ applyErrorClass('fristName')} type="text" name="firstName"  value={values.firstName}  onChange={handleInputChange} required/>
                            </label>

                            <label className="label">
                              <span className="lname">Last Name <span className="required">*</span></span>
                              <input className={+ applyErrorClass('lastName')} type="text" name="lastName"  value={values.lastName}  onChange={handleInputChange} required/>
                            </label>

                            <label className="label">
                              <span>Company Name (Optional)</span>
                              <input type="text" name="companyName"  value={values.companyName}  onChange={handleInputChange}/>
                            </label>
                            
                            <label className="label">
                              <span>Address <span className="required">*</span></span>
                              <br></br>
                              <input className={+ applyErrorClass('addressLine1')} type="text" name="addressLine1" placeholder="Address Line 1" required  value={values.addressLine1}  onChange={handleInputChange} required/>
                            </label>

                            <label className="label">
                              <span>&nbsp;</span>
                              <input className={+ applyErrorClass('addressLine2')} type="text" name="addressLine2" placeholder="Address Line 2" value={values.addressLine2}  onChange={handleInputChange}/>
                            </label>

                            <label className="label">
                              <span>Town <span className="required">*</span></span>
                              <input className={+ applyErrorClass('town')} type="text" name="town" value={values.town}  onChange={handleInputChange} required/>  
                            </label>

                            <label className="label">
                              <span>City <span className="required">*</span></span>
                              <input className={+ applyErrorClass('city')} type="text" name="city" value={values.city}  onChange={handleInputChange} required/> 
                            </label>

                            <label className="label">
                              <span>Postcode / ZIP <span className="required">*</span></span>
                              <input className={+ applyErrorClass('postalCode')} type="text" name="postalCode"  value={values.postalCode} maxLength="5" onChange={handleInputChange} required/> 
                            </label>

                            <label className="label">
                              <span>Phone <span className="required">*</span></span>
                              <input className={+ applyErrorClass('phone')} type="text" name="phone" value={values.phone} maxLength="10" onChange={handleInputChange} required/> 
                            </label>

                            <label className="label">
                              <span>Email Address <span className="required">*</span></span>
                              <input type="text"  name="email" value={buyers.email}  disabled  onChange={handleInputChange}/> 
                            </label>

                            <label className="label">
                              <span className="fname">Order Date <span className="required">*</span></span>
                              <input type="text" value={currDate} disabled onChange={handleInputChange} />
                            </label>

                            <label className="label">
                              <span className="lname">Required Date <span className="required">*</span></span>
                              <input className={+ applyErrorClass('requiredDate')} type="date" name="requiredDate"  id="requiredDate"  value={values.requiredDate}  onChange={handleInputChange} required/>
                            </label>    

                            <div>
                            <br/><br/>
                               <h6>choose your payment method</h6>

                               <div className="rowr">

                                <div className="columnr">
                                  <div className="custom-control custom-radio">
                                    {paymentState.map(result => (
                                      <div>
                                        <label className="containerr">
                                          <h7>{result}</h7>

                                          <input type="radio" name="radio"
                                          value={result}
                                          checked={display === result}
                                          onChange={(e) => setDisplay(e.target.value)}
                                          />

                                          <span className="checkmark"></span>
                                        </label>
                                        <hr/>
                                      </div> 
                                    ))};
                                  </div>
                                </div>

                                <div className="columnr">
                                    <div >
                                      <img className="pay-img" src="https://upload.wikimedia.org/wikipedia/en/e/eb/Stripe_logo%2C_revised_2016.png" alt="/" width="50"/>
                                      <img src={cardpayment} alt="/" width="125"/>
                                    </div>

                                <br/><br/>

                                    <div >
                                      <img className="pay-img" src="https://thumbs.dreamstime.com/b/cash-delivery-cod-service-payment-product-shipping-transportation-flat-illustration-vector-64321924.jpg" alt="/" width="100" height="38px"/>
                                    </div>
                                </div>
                               </div>

                               <button type="submit" className="continue" onClick={() => { togglePopup(); handleFormSubmit1();}} >continue</button>
                            </div>
                        </form>
    
                        <div >
                          <span><h>OrderNo</h><span></span><h3>{OrderNo}</h3></span> 
                          <br/><br/><hr/>

                            <CartDetails/>
                    
                      </div>
                </div>
              </div>
            </div>
        )
}

export default Order



       

