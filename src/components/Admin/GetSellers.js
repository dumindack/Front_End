import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  
import '../CSS/form.css';

  
const apiUrl = 'https://cakeworldapi.azurewebsites.net/api/Sellers/';  
  
class Seller extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           sellers:[],  
           response: {}  
              
        }  
    }  

    componentDidMount(){  
       axios.get(apiUrl ).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    sellers:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    DeleteSeller(id) {  
      const { sellers } = this.state;     
      axios.delete(apiUrl   + id).then(result=>{  
       alert('seller deleted successfully!!!');   
        this.setState({  
          response:result,  
          sellers:sellers.filter(seller=>seller.id !== id)  
        });  
      });  
    }  
   
 
      
    render(){         
        const{error,sellers}=this.state;  
        if(error){  
            return(  
                <div className="center"><h4>Error : {error.message}!!!</h4></div>  
            )  
        }  
        else  
        {  
            return(  
         <div >  
           
                <div style={{ backgroundColor: 'LightGrey', margin: '5px 5px',}} >  
                
                  <Table>  
                    <thead className="btn-primary">  
                      <tr>  
                        <th>Seller ID </th> 
                        <th>First Name</th>  
                        <th>Last Name</th>    
                        <th>Email</th>  
                        <th>Address</th>  
                        <th>Mobile Number</th>
                      </tr>  
                    </thead>  
                    <tbody>  
                      {sellers.map(seller => (  
                        <tr key={seller.id }>  
                          <td>{seller.id }</td>   
                          <td>{seller.firstName}</td>  
                          <td>{seller.lastName}</td>  
                          <td>{seller.email}</td>  
                          <td>{seller.address}</td>  
                          <td>{seller.mobileNumber}</td>  
                 
                          <td><Button
                           style={{ backgroundColor: 'DarkRed',margin: '5px 5px'}} onClick={() => 
                            this.DeleteSeller(seller.id)}>Delete
                            </Button> </td>   
                          
                          
                        </tr>  
                      ))}  
                    </tbody>  
                  </Table> 
                  </div>   
                </div>  
              )  
        }  
    }  
}  
  


export default Seller