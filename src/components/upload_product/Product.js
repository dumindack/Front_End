import React, { useState, useEffect } from 'react'
import '../CSS/form.css';
import axios from 'axios'


const defaultImageSrc = '/img/image_placeholder.png'

const initialFieldValues = {
    productID: 0,
    productName: '',
    price: '',
    imageName: '',
    category:'',
    description:'',
    imageSrc: defaultImageSrc,
    imageFile: null
}


export default function Product(props) {

    const { addOrEdit, recordForEdit } = props

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

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            })
        }
    }


    const validate = () => {
        let temp = {}
        temp.productName = values.productName === "" ? false : true;
        temp.imageSrc = values.imageSrc === defaultImageSrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }

    const resetForm = () => {
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const [sellers, setSellers] = useState([]);
    useEffect(() => {
      if (localStorage.token) {
        const user= JSON.parse(atob(localStorage.token.split('.')[1]));
        if (user.role ==="Seller"){
          axios.get(`https://localhost:44305/api/Sellers/${user.id}`)
            .then(resp => {
            setSellers(resp.data)
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


    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData()
            formData.append('productID', values.productID)
            formData.append('productName', values.productName)
            formData.append('price', values.price)
            formData.append('imageName', values.imageName)
            formData.append('category', values.category)
            formData.append('description', values.description)
            formData.append('imageFile', values.imageFile)
            formData.append('sellerID', sellers.id)
            addOrEdit(formData, resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '')

  
    



    return (
        <>
            <div className="container text-center">
                <p className="lead type pro ">Enter Product details</p>
            </div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="formproduct">
                    <img src={values.imageSrc} className="card-img-top photo" />
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('imageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('productName')} placeholder="Product Name" name="productName"
                                value={values.productName}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Price in Rs/=" name="price"
                                value={values.price}
                                onChange={handleInputChange} />
                            
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Category" name="category"
                                value={values.category}
                                onChange={handleInputChange} />
                            
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Description" name="description"
                                value={values.description}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn1 btn-light">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
