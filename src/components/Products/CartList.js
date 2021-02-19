import React, { Fragment, useState, useEffect } from 'react'
import Card from './Card';



const CardList = ({products, addToCart, viewDetail}) => {

    const [delay, setDelay] = useState(true)

    useEffect(() => {
        setDelay(true);
        setTimeout(() => {
            setDelay(false) 
        }, 1000);
    }, [products])

    return (
        <Fragment>
            {
                <div>
                    <span>{products.length} Product(s) found.</span>
                    <div className="card-list">
                        {
                           products.length === 0 ? <p className="text-center">Sorry, No products of the specified categories :-(</p> :
                            products.map(item => {
                                return (
                                    <div >
                                        <div>
                                            <Card key={item.id} data={item} addToCart={addToCart} viewDetail={viewDetail} />
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default CardList
