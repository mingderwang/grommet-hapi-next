import { connect } from "react-redux";
import { removeTodo } from "../actions";
import Component from "../components/NavSidebar";

const mapDispatchToProps = dispatch => ({
  navActivate: active => dispatch(navActivate(active)),
  navEnable: enabled => dispatch(navEnable(enabled)),
  navResponsive: responsive => dispatch(navResponsive(responsive))
});

export default connect(() => ({}), mapDispatchToProps)(Component);
