import axois from "axios";

import {
  
  LOGIN_FAILED,
  LOGIN_SUCCESS,
 
} from "./types";
import { setAlert } from "./alert";

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axois.post(
        "https://localhost:44305/api/Logins",
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



export const registerSeller = async (FirstName, LastName, Address, Gender,Email,MobileNumber,Password,Repasswerd) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ FirstName, LastName, Address, Gender,Email,MobileNumber,Password,Repasswerd});

    if (Password!= Repasswerd){
        alert("Password didn't Matched Try again..")
    }

    else {


        try {
            await axois.post("https://localhost:44305/api/Sellers", body, config);
            alert("Your are registerd ");
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log(error);
            
        }




    }


   

};