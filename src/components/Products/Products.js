import React, {useState, Fragment, useEffect} from 'react';
import axios from 'axios'
import Card from './Card'
import './ProductCSS/Products.css'
import './ProductCSS/PageNumber.css'



function Products (props) {
    const [value, setValue] = useState('Select');
    const [products, setProducts] = useState([]);
    const [Products, sortProducts] = useState([]);
    const [search, setSearch,] = useState('');
    const { onAdd } = props;

    const [cart, setCart] = useState([])

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(8);

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minimumPageNumberLimit, setminimumPageNumberLimit] = useState(0);

    
    useEffect(() => {
        axios
          .get(
            'https://localhost:44305/api/Product'
          )
          .then(res => {
            setProducts(res.data);
            console.log(res.data);
          })
          .catch(error => console.log(error));
      }, []);
    
    
    const filteredProducts = products.filter((product) => {
        if (search == ""){
            return products;
        } else if (product.productName.toLowerCase().includes(search.toLowerCase())){
            return products;
        } else if (product.category.toLowerCase().includes(search.toLowerCase())){
            return products;
        }      
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
          
    const handleChange = e => {
        setSearch(e.target.value);
        setValue(e.target.value);
    };


    const renderfilteredProducts = products => {
        return(
            <div>
                <div className="product-container">
                    <div className="pcard-list">
                        {products.map(product => {
                                return (
                                    <div>
                                        <div >
                                            <Card product={product}/>
                                        </div>
                                    </div>
                                );
                        })} 
                    </div>
                </div>
            </div>
        )
    }


    const pages =[];
        for(let i=1; i<=Math.ceil(products.length/itemsPerPage);i++ ){
            pages.push(i);
        }
        
    const paginate = pageNumber => setcurrentPage(pageNumber);  
        
    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    }
    const renderPageNumbers = pages.map(number=>{
        if(number < maxPageNumberLimit+1 && number > minimumPageNumberLimit){
            return (
                <li
                key={number}
                id={number}
                onClick={handleClick}
                className={currentPage == number ? "active" : null}
                >
                    {number}
                </li>
            );
        }else {
            return null;
        }
    });


    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if(currentPage + 1 > maxPageNumberLimit){
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminimumPageNumberLimit(minimumPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if((currentPage - 1) % pageNumberLimit == 0){
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminimumPageNumberLimit(minimumPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if(pages.length > maxPageNumberLimit){
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>
    }

    let pageDecrementBtn = null;
    if(pages.length > maxPageNumberLimit){
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>
    }
                
            

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has been added to cart.")
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])

       
    return (
        <div>
            <div className="nav">
                <div className="n-container">
                <a></a><a></a><a></a><a></a><a></a><a></a><a></a><a></a>
                <a></a><a></a><a></a><a></a><a></a><a></a><a></a><a></a>
                <a></a><a></a><a></a><a></a><a></a><a></a><a></a><a></a>
                <a></a><a></a><a></a><a></a><a></a>
                    <a><input type="text" 
                        placeholder="Search for Cakes.."
                        onChange={handleChange}
                        />
                    </a>
                   
                    <a>
                        <a></a><a></a><a></a><a></a><a></a><a></a><a></a><a></a>
                        <h>Choose From</h>       
                    </a>
                    <a>
                        <h className="sort-list"> 
                            &nbsp; &nbsp;
                            <select value={value} onChange={handleChange}>
                                <option value="">All</option>
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
                <div >
                    <div>
                        {renderfilteredProducts(currentItems,onAdd)}
                    </div>
                    <br/>
                    <hr/>
                    <div className="page-container">
                        <ul className="pageNumbers">
                            <li>
                                <button
                                onClick={handlePrevbtn}
                                disabled = {currentPage == pages[0] ? true : false}
                                >
                                Prev
                                </button>
                            </li>
                                {pageDecrementBtn}
                                {renderPageNumbers}
                                {pageIncrementBtn}
                            <li>
                                <button
                                onClick={handleNextbtn}
                                disabled = {currentPage == pages[pages.length - 1] ? true : false}
                                >
                                Next
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        </div>
    )
}



export default Products;

