import React, { Component } from 'react'
import App from '../App'



class Login extends React.Component {
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value}) 
    }

    handleChange = (e) => {
        e.preventDefault()
    }
    render(){
        return(
            <div>
                <div>
                 <form onSubmit = {this.handleSubmit}> 
                    <input type='email' name='email' placeholder='email...' required onChnage={this.handleChange} />
                    <input type='Password' name='pwd' placeholder='Password...' required onChnage={this.handleChange}/>
                    <button onSubmit={this.handleSubmit}>Log In</button>
                 </form>
                </div>
            </div>
        )
    }
}

export default Login;