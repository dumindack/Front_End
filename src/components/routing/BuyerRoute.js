import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BuyerRoute = ({ component: Component, auth: { isAuthenticated, loading, user}, ...rest }) => (
    <Route {...rest} render={props => isAuthenticated && !loading ? ((user.role==='Buyer') ?

    <Component {...props} /> :( <Redirect to="/" />)
    ):  (
   (<Redirect to='/' />)
 
)
    }
/> );  


BuyerRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(BuyerRoute);