import { connect } from 'react-redux'
import VisibleLogin from '../../components/visible_login'
import { login } from '../../actions/Login'

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
})

export default connect(null, mapDispatchToProps)(VisibleLogin)
