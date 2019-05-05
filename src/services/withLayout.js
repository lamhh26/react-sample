import React from 'react'
import { PublicLayout, PrivateLayout } from '../containers/layout'

const withLayout = (WrappedComponent, isLoggedIn, type = 'private') => ({ ...props }) => {
  const Layout = type === 'public' ?
    PublicLayout
    :
    (isLoggedIn ? PrivateLayout : PublicLayout)
  return (<Layout><WrappedComponent { ...props } /></Layout>)
}

export default withLayout
