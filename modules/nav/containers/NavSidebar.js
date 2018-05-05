import { connect } from 'react-redux'
import { _toggle } from '../actions'
import Component from '../components/NavSidebar'

const mapDispatchToProps = dispatch => ({
  _toggle: () => dispatch(_toggle()),
})

export default connect(state => state.nav, mapDispatchToProps)(Component)
