import React, { useState, useEffect } from 'react'
import Product from './Product'
import axios from "axios";
import '../CSS/form.css';

export default function ProductList() {
    const [productList, setProductList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshProductList();
    }, [refreshProductList])


    const [sellers, setSellers] = useState([]);
    useEffect(() => {
      if (localStorage.token) {
        const user= JSON.parse(atob(localStorage.token.split('.')[1]));
        if (user.role ==="Seller"){
          axios.get(`https://cakeworldapi.azurewebsites.net/api/Sellers/${user.id}`)
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


    const productAPI = (url = 'https://cakeworldapi.azurewebsites.net/api/Product/') => {
        return {
            fetchAll: () => axios.get(`https://cakeworldapi.azurewebsites.net/api/Product/Sellers/${sellers.id}`),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshProductList() {
        productAPI().fetchAll()
            .then(res => {
                setProductList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('productID') == "0")
            productAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshProductList();
                })
                .catch(err => console.log(err))
        else
            productAPI().update(formData.get('productID'), formData)
                .then(res => {
                    onSuccess();
                    refreshProductList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
   }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            productAPI().delete(id)
                .then(res => refreshProductList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top" />
            <div className="card-body">
                <h4>{data.productName}</h4>
                <h6 className="sss">Rs {data.price}</h6>
                <h6 className="sss">Category - {data.category}</h6>
                <span >{data.description}</span> <br />
                <button className="delete-button btn-light btnls" Delete onClick={e => onDelete(e, parseInt(data.productID))}>
                    Delete<i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )




    return (
        <div className="row">
            <div className="col-md-12">
                <div >
                    <div className="text-center">
                        <h1 className="typeList myc">My Products</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <Product
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </div>
            <div className="col-md-8">
                <table>
                    <tbody>
                        {
                          
                            //tr > 3 td
                            [...Array(Math.ceil(productList.length / 3))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(productList[3 * i])}</td>
                                    <td>{productList[3 * i + 1] ? imageCard(productList[3 * i + 1]) : null}</td>
                                    <td>{productList[3 * i + 2] ? imageCard(productList[3 * i + 2]) : null}</td>
                                </tr>
                            )  
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
