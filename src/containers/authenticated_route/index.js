import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import withLayout from '../../services/withLayout'

const AuthenticatedRoute = ({ component: Component, requireLogin, isLoggedIn, ...props }) => {
  return !isLoggedIn && requireLogin ?
    <Redirect to='/login' />
    :
    <Route component={withLayout(Component, isLoggedIn)} {...props} />
}

const mapStateToProps = state => ({
  isLoggedIn: state.config.isLoggedIn
})

export default connect(mapStateToProps)(AuthenticatedRoute)
