import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SellerRoute = ({ component: Component, auth: { isAuthenticated, loading, user}, ...rest }) => (
    <Route {...rest} render={props => isAuthenticated && !loading ? ((user.role== 'Seller') ?

    <Component {...props} /> :( <Redirect to="/upload_product/ProductList" />)
    ):  (
   (<Redirect to='/Login' />)
 
)
    }
/> );  


SellerRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(SellerRoute);