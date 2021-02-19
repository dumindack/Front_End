import React, {useState, Fragment} from 'react';
import './C.css'
import Card from './Card'
import './Products.css'




const Products = ({products, sortProducts, addToCart, viewDetail}) =>  {
    
    const [searchName, setSearchName] = useState('')

    const [value, setValue] = useState('Select');

    const setList = (e) => {
        setValue(e.target.value);
        sortProducts(e.target.value);
    }

    return (
        <div >
            <div className="nav">
                <div className="n-container">
                    <a><input type="text" 
                        placeholder="Search....."
                        onChange={event => {setSearchName(event.target.value);
                        }}
                        />
                    </a>
                    <a>
                        <a></a><a></a><a></a><a></a><a></a><a></a><a></a>
                        <h>Choose From</h>       
                    </a>
                    <a>
                        <h className="sort-list">
                            &nbsp; &nbsp;
                            <select value={value} onChange={setList}>
                                <option value="select">select</option>
                                <option value="birthday">Birthday Cakes</option>
                                <option value="cup">Cup Cakes</option>
                                <option value="wedding">Wedding Cakes</option>
                                <option value="other">Other Cakes</option>
                            </select>
                        </h>
                    </a>
                </div>
            </div>
                    
            <Fragment>
                <br/>
                <div className="pproducts">
                    <div className="pcr-container">
                        <div className="pcard-list">
                            {products.filter((product)=> {
                                if (searchName == ""){
                                    return product
                                } else if (product.category.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())){
                                    return product
                                } else if (product.title.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())){
                                    return product
                                }
                                
                                })
                                .map((item) => {
                                    if(products.length === 0 )
                                    return (
                                        <p className="text-center">Sorry, No products of the specified categories :-(</p>
                                    )
                                    return (
                                            <div>
                                                <Card key={item.id} data={item} addToCart={addToCart} />
                                            </div>
                                    )
                                    })} 
                        </div>
                    </div>
                </div>
            </Fragment>
        </div>
    )
}



export default Products;
