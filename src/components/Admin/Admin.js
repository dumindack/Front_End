import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";



const Admin = () => {

    return (
        <Fragment>
            <p className="admin">
        SELLERS IN CAKE WORLD <Link to="/GetSellers">Click</Link>
      </p>
      <p className="admin">
      CAKE TYPES IN CAKE WORLD <Link to="/GetCakes">Click</Link>
      </p>
    </Fragment>
      );
    };
    
    export default Admin;