import React from 'react'
import { Container } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav
} from '@coreui/react'
import PrivateHeader from './private_header'
import PrivateFooter from './private_footer'
import navigation from '../../_nav'

const VisiblePrivateLayout = ({ children, ...otherProps }) => {
  return (
    <div className='app PrivateLayout'>
      <AppHeader fixed className='Header'>
        <PrivateHeader />
      </AppHeader>
      <div className='app-body'>
        <AppSidebar fixed display='lg'>
          <AppSidebarHeader />
          <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...otherProps} />
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className='main'>
          <Container fluid>
            {children}
          </Container>
        </main>
      </div>
      <AppFooter className='Footer'>
        <PrivateFooter />
      </AppFooter>
    </div>
  )
}

export default withRouter(VisiblePrivateLayout)
