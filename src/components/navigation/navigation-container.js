import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router' // higher order component. noticed it isnt capatalized
import { NavLink } from 'react-router-dom'

const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className='nav-link-wrapper'>
                <NavLink to={route} activeClassName='nav-link-active'>
                    {linkText}
                </NavLink>
            </div>
        )
    }

    const handleSignOut = () => {
        axios.delete('https://api.devcamp.space/logout', { withCredentials: true }).then(response => {
            if (response.status === 200) {  //should always send a 200 status if the delete was successful
                props.history.push('/')
                props.handleSuccessfulLogout()
            }
            return response.data  // this isnt actually returning anything. its poor practice to not include some type of response after IF statement
        }).catch(error => {
            console.log('Error signing out', error)
        })
    }

    return (
        <div>
            {props.loggedInStatus === 'LOGGED_IN' ? dynamicLink('/portfolio-manager', 'Portfolio Manager') : null}
            {props.loggedInStatus === 'LOGGED_IN' ? <a onClick={handleSignOut}>
                <FontAwesomeIcon icon='sign-out-alt' />
            </a> : null}
        </div>
    )
}

export default withRouter(NavigationComponent)
