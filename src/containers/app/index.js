import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthenticatedRoute from '../authenticated_route'
import withLayout from '../../services/withLayout'
import Login from '../login'
import Dashboard from '../dashboard'
import NotFound from '../not_found'
import ServerError from '../server_error'
import './assets/app.scss'

const App = ({ ...props }) => {
  const { isLoggedIn } = { ...props }
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          {isLoggedIn ? <Redirect from='/login' to='/' /> : null}
          <AuthenticatedRoute path='/500' component={ServerError} />
          <AuthenticatedRoute path='/login' component={Login} />
          <AuthenticatedRoute exact requireLogin path='/' component={Dashboard} />
          <Route path='/404' component={withLayout(NotFound, isLoggedIn, 'public')} />
          <Route component={withLayout(NotFound, isLoggedIn, 'public')} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = state => ({
  isLoggedIn: state.config.isLoggedIn,
})

export default connect(mapStateToProps)(App)
