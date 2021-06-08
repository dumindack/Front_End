import axois from "axios";





import {
  
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
  

  

  
} from "./types";
import { setAlert } from "./alert";


//load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    const user= JSON.parse(atob(localStorage.token.split('.')[1]));

    if (user.role ==="Seller") {
      try {
        const res = await axois.get (
          `https://cakeapi.azurewebsites.net/api/Sellers/${user.id}`
       
        );
        dispatch({
          type: USER_LOADED,
          payload: res.data,
         });
      } catch (error) {
         dispatch({
           type: AUTH_ERROR,
       });
       
      }
    }
    else if (user.role ==="Admin") {
      try {
        const res = await axois.get (
          `https://cakeapi.azurewebsites.net/api/Admins/${user.id}`
        
        );
        dispatch({
          type: USER_LOADED,
          payload: res.data,
         });
      } catch (error) {
         dispatch({
           type: AUTH_ERROR,
       });
      }
    }
       else if (user.role ==="Buyer") {
        try {
          const res = await axois.get (
            `https://cakeapi.azurewebsites.net/api/Buyers/${user.id}`
         
          );
          dispatch({
            type: USER_LOADED,
            payload: res.data,
           });
        } catch (error) {
           dispatch({
             type: AUTH_ERROR,
         });
         
        }
      }

      }
};


//USER LOGIN
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' ,},
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axois.post(
        "https://cakeapi.azurewebsites.net/api/Logins",
      body,
      config
    );
    
    dispatch(setAlert("Login Successfull", "success"));
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
      
    });
   
    
  } catch (error) {
    
    dispatch(setAlert("Invalid email or password", "danger"));
    dispatch({
      type: LOGIN_FAILED,
      
    });
    
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};



//Seller REGISTRATION

export const registerSeller = async (FirstName, LastName, Address, Gender,Email,MobileNumber,Password,Repasswerd,Role) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ FirstName, LastName, Address, Gender,Email,MobileNumber,Password,Repasswerd,Role});

    if (Password!= Repasswerd){
        alert("Password didn't Matched Try again..")
    }

    else {


        try {
            await axois.post("https://cakeapi.azurewebsites.net/api/Sellers", body, config);
            alert("Your are registerd ");
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log(error);
            
        }




    }


   

};

//BUYER REGISTRATION
export const registerBuyer = async (FirstName, LastName, Address, Gender,Email,MobileNumber,Password,Repasswerd,Role) => {
  const config = {
      headers: { "Content-Type": "application/json" }
  };

  const body = JSON.stringify({ FirstName, LastName, Address, Gender,Email,MobileNumber,Password,Repasswerd,Role});

  if (Password!= Repasswerd){
      alert("Password didn't Matched Try again..")
  }

  else {


      try {
          await axois.post("https://cakeapi.azurewebsites.net/api/Buyers", body, config);
          alert("Your are registerd ");
  
      } catch (error) {
          alert("Please Check Your Information again ");
          console.log(error);
          
      }




  }


 

};


//REGISTER ADMIN

export const registerAdmin = async (FirstName, LastName, Address, Gender,Email,MobileNumber,Password,Repasswerd,Role) => {
  const config = {
      headers: { "Content-Type": "application/json" }
  };

  const body = JSON.stringify({ FirstName, LastName, Address, Gender,Email,MobileNumber,Password,Repasswerd,Role});

  if (Password!= Repasswerd){
      alert("Password didn't Matched Try again..")
  }

  else {


      try {
          await axois.post("https://localhost:44305/api/Admins", body, config);
          alert("Your are registerd ");
  
      } catch (error) {
          alert("Please Check Your Information again ");
          console.log(error);
          
      }




  }


 

};