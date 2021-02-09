import axois from 'axios';

export const login = async (email, password) => {
    
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ email, password });

    try {
         await axois.post("https://localhost:44305/api/Logins/login", body, config)
         .then(res => {
            console.log(" tra working "+res.status)
             return res.status
            });
            alert(" login succes");
        
         
         
         
    } catch (error) {
        alert(" Check your Email or Password");
        console.log("catworking ");
        
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