// if the user is logged in allow him to get to certain routes
import React from "react";
import PropTypes from 'prop-types';
import {Route, Navigate} from 'react-router-dom';

export default function IsUserLoggedIn({ user, loggedInPath, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (!user) {     // if there is a user
                    return children
                }

                if (user) {
                    return (
                        <Navigate
                            to={{
                                pathname: loggedInPath,
                                state: { from: location }   //I'm gonna redirect you to login and you're comming from 'this location'
                            }}
                        />
                    )
                }

                return null
            }}
        />
    )
}

IsUserLoggedIn.propTypes = {
    user: PropTypes.object,
    loggedInPath: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}