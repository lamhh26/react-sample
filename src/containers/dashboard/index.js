import React from 'react'
import { connect } from 'react-redux'

const VisibleDashboard = () => (
  <div className='App'>
    <header className='App-header'>
      <h1 className='App-title'>Dummy Title</h1>
    </header>
    <p className='App-body'>
      Dummy Body
    </p>
  </div>
)

export default connect()(VisibleDashboard)
