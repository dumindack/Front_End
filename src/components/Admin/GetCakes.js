import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  
import '../CSS/form.css';

  
const apiUrl = 'https://localhost:44305/api/Cakes/';  
  
class Cake extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           cakes:[],  
           response: {}  
              
        }  
    }  

    componentDidMount(){  
       axios.get(apiUrl ).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    cakes:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    DeleteCake(id) {  
      const { cakes } = this.state;     
      axios.delete(apiUrl   + id).then(result=>{  
       alert('cake product deleted successfully!!!');   
        this.setState({  
          response:result,  
          cakes:cakes.filter(cake=>cake.id !== id)  
        });  
      });  
    }  
   
 
      
    render(){         
        const{error,cakes}=this.state;  
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
                        <th>Cake ID </th> 
                        <th>Cake Name</th>  
                        <th>Description</th>    
                        <th>Price(Rs)</th>  
                       
                      </tr>  
                    </thead>  
                    <tbody>  
                      {cakes.map(cake => (  
                        <tr key={cake.id }>  
                          <td>{cake.id }</td>   
                          <td>{cake.name}</td>  
                          <td>{cake.descrption}</td>  
                          <td>{cake.price}</td>  
                        
                          <td><Button
                           style={{ backgroundColor: 'DarkRed',margin: '5px 5px'}} onClick={() => 
                            this.DeleteCake(cake.id)}>Delete
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
  


export default Cake