import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";




const Admin = () => {

    return (
        <Fragment>
            <p className="large">
        ADMIN 
      </p>
            <p className="admin">
        SELLERS IN CAKE WORLD <Link to="/GetSellers">Click</Link>
      </p>
      
      <p className="admin">
      BUYERS IN CAKE WORLD <Link to="/GetBuyers">Click</Link>
      </p>
    </Fragment>
      );
    };
    
    export default Admin;