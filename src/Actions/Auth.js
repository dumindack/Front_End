import axois from 'axios';

export const login = async (email, password) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ email, password });

    try {
         await axois.post("https://localhost:44305/api/Buyers/login", body, config)
         .then(res => {return res.status});
         
         
         
    } catch (error) {
        alert(" Please Check your Email and Password again");
        console.log(error);
        
    }
    

};