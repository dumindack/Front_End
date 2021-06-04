import React, { useState, useEffect } from 'react'
import '../CSS/form.css';


const defaultImageSrc = '/img/image_placeholder.png'

const initialFieldValues = {
    productID: 0,
    productName: '',
    price: '',
    imageName: '',
    category:'',
    description:'',
    sellerID : '',
    conformation : '',
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
            formData.append('sellerID', values.sellerID)
            formData.append('conformation', values.conformation)
            formData.append('imageFile', values.imageFile)
            addOrEdit(formData, resetForm)
        }
    }

   
    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '')
  
    



    return (
        <>
            <div className="container text-center">
                <p className="lead type pro ">CONFIRMATION</p>
            </div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
               
                    
                  
                       
                        <div className="form-group">
                            <input className="form-control" placeholder="conformation" name="conformation"
                                value={values.conformation}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn1 btn-light">Confirm</button>
                        
                    
                </div>
            </form>
        </>
    )
}




















