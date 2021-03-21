import React, {useState , useEffect, useRef} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './ProductCSS/Details.css'
import { FaStar } from "react-icons/fa";
import './ProductCSS/Popup.css'



function Details(props){
    const [products, setProducts] = useState([]);
    const { productID } = useParams()
    useEffect(() => {
        axios
          .get(
            `https://localhost:44305/api/Product/${productID}`
          )
          .then(res => {
            setProducts(res.data);
            console.log(res.data);
          })
          .catch(error => console.log(error));
      }, []);


      const [rates, setRates] = useState([]);
      
      useEffect(() => {
        axios
          .get(
            `https://localhost:44305/api/Ratings/product/${productID}`
          )
          .then(res => {
            setRates(res.data);
            console.log(res.data);
          })
          .catch(error => console.log(error));
      }, []);


    const [index, setIndex] = useState(0)
    const imgDiv = useRef();

    const handleMouseMove = e =>{
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }


    const [rate, setRate] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)
    
    useEffect(() => {
        refreshRate();
    }, [])

    const ratesAPI = (url = `https://localhost:44305/api/Ratings`) => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshRate() {
        ratesAPI().fetchAll()
            .then(res => {
                setRate(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('ID') == "0")
            ratesAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshRate();
                })
                .catch(err => console.log(err))
        else
            ratesAPI().update(formData.get('ID'), formData)
                .then(res => {
                    onSuccess();
                    refreshRate();
                })
                .catch(err => console.log(err))
    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const initialFieldValues = {
        ID: 0,
        productID: '',
        Star: '',
        userName: '',
        comment: ''
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
        temp.star = values.star == "" ? false : true;
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
            formData.append('productID', products.productID)
            formData.append('star', rating)
            formData.append('comment', values.comment)
            formData.append('userName', values.userName)
            addOrEdit(formData, resetForm)
        }
    }
 
   
    const [rating, setRating] = useState('0');
    const [hover, setHover] = useState(null);

    const average =  Math.round((rates.reduce((a,v) =>  a = a + v.star , 0 ))/(rates.length || rates.length >= 0) * 10 ) / 10;


        return (
            <div className="container">
                <div className="details">
                    <div className="img-container" onMouseMove={handleMouseMove}
                        style={{backgroundImage: `url(${products.imageSrc})`}} ref={imgDiv} 
                        onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />
                    <div className="box-details">
                        <h2>{products.productName}</h2>
                        <div>
                            <span>
                                {[...Array(5)].map((star, i) => {
                                                const ratingValue = i + 1;
                                                    return(
                                                        <label>
                                                            <FaStar
                                                                className="star"
                                                                isHalf={true}
                                                                color={ratingValue <= (average) ? "#ffc107" : "#e4e5e9"}
                                                                size={18}
                                                            />
                                                        </label>
                                                    )
                                                })}
                            </span>
                            <span>({average}/5.0)</span>
                        </div>
                        <h3>Rs:{products.price}.00</h3>
                        <h>category | {products.category} cakes</h>
                        <hr/>
                        <p>{products.description}</p>
                        <hr/>
                        <button className="button1" >add to Cart </button>
                    </div>
                </div>
                <div>
                    <a>add your  </a>
                    <a className="button" href="#popup1"> review </a>
                    <a>   here..</a>
                </div>
                <hr/>
                <div className="container-name">
                    <h5> Reviews ({rates.length})</h5>
                </div>
                <br></br>
                    {rates.map(rate => {
                            return (
                                <div>
                                    <div onClick={() => { showRecordDetails(rate) }}>
                                    <table id="customers">
                                        <tr>
                                            <th><h6>{rate.userName}</h6></th>
                                        </tr>
                                        <tr>
                                        {[...Array(5)].map((star, i) => {
                                                const ratingValue = i + 1;

                                                return(
                                                    <label>
                                                        <FaStar
                                                            className="star"
                                                            isHalf={true}
                                                            color={ratingValue <= (rate.star) ? "#ffc107" : "#e4e5e9"}
                                                            size={18}
                                                        />
                                                        
                                                    </label>
                                                )
                                            })}   
                                       ({rate.star}.0)
                                        </tr>
                                        <tr>
                                            <td><p>{rate.comment}</p></td>
                                        </tr>
                                        <br></br>
                                    </table>
                                </div>
                                </div>
                            );
                            })}
                    <br/><br/>
                    <div id="popup1" class="overlay">
                        <div className="popup">
                        <br></br>
                            <a className="close" href="#">&times;</a>
                            <div className="content">
                                <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                                    <div>
                                        <div className="rating">
                                            <p>place your review</p>
                                        </div>
                                        <div>
                                            <input
                                                className="form-control"
                                                placeholder="Enter your name..."
                                                name="userName"
                                                value={values.userName}
                                                onChange={handleInputChange} />
                                            </div>   
                                            <div>
                                                <div>
                                                    {[...Array(5)].map((star, i) => {
                                                        const ratingValue = i + 1;
                                                        return(
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    name="rating"
                                                                    value={ratingValue}
                                                                    onClick={() => setRating(ratingValue)}
                                                                    onChange={handleInputChange}
                                                                />
                                                                <FaStar
                                                                    className="star"
                                                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#989799"}
                                                                    size={18}
                                                                    onMouseEnter={() => setHover(ratingValue)}
                                                                    onMouseLeave={() => setHover(null)}
                                                                />
                                                            </label>
                                                            )
                                                        })} ({rating}.0)
                                                </div>
                                                <div>
                                                    <textarea 
                                                        className="textarea"
                                                        placeholder="Place your experience..."
                                                        name="comment"
                                                        value={values.comment}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div>
                                                    <button type="submit" className="btn-submit" >Submit</button>
                                                </div>
                                                <br></br><br></br>
                                            </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
        </div>
    )
    }

export default Details