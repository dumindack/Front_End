import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  
import '../CSS/form.css';

  
const apiUrl = 'https://cakeworldapi.azurewebsites.net/api/Buyers/';  
  
class Buyer extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           buyers:[],  
           response: {}  
              
        }  
    }  

    componentDidMount(){  
       axios.get(apiUrl ).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    buyers:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    DeleteBuyer(id) {  
      const { buyers } = this.state;     
      axios.delete(apiUrl   + id).then(result=>{  
       alert('Buyer deleted successfully!!!');   
        this.setState({  
          response:result,  
          buyers:buyers.filter(buyer=>buyer.id !== id)  
        });  
      });  
    }  
   
 
      
    render(){         
        const{error,buyers}=this.state;  
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
                        <th>Buyer ID </th> 
                        <th>First Name</th>  
                        <th>Last Name</th>    
                        <th>Email</th>  
                        <th>Address</th>  
                        <th>Mobile Number</th>
                      </tr>  
                    </thead>  
                    <tbody>  
                      {buyers.map(buyer => (  
                        <tr key={buyer.id }>  
                          <td>{buyer.id }</td>   
                          <td>{buyer.firstName}</td>  
                          <td>{buyer.lastName}</td>  
                          <td>{buyer.email}</td>  
                          <td>{buyer.address}</td>  
                          <td>{buyer.mobileNumber}</td>  
                 
                          <td><Button
                           style={{ backgroundColor: 'DarkRed',margin: '5px 5px'}} onClick={() => 
                            this.DeleteBuyer(buyer.id)}>Delete
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
  


export default Buyer