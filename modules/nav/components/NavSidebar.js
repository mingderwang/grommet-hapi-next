import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from "grommet/components/Sidebar";
import Header from "grommet/components/Header";
import Footer from "grommet/components/Footer";
import Title from "grommet/components/Title";
import Menu from "grommet/components/Menu";
import Button from "grommet/components/Button";
import Box from "grommet/components/Box";
import CloseIcon from "grommet/components/icons/base/Close";
import Logo from "grommet/components/icons/Grommet";
import Anchor from "grommet/components/Anchor";
import { getStore } from "~/redux-config";
import SessionMenu from "~/components/SessionMenu";
import { navActivate } from "../actions";
import AllFieldTypes from '~/shared/AllFieldTypes'

class NavSidebar extends Component {
  constructor() {
    super();
    this._onClose = this._onClose.bind(this);
  }

  _onClose() {
    this.props.dispatch(navActivate(false));
  }

  render() {
    const {
      nav: { items }
    } = this.props;
    const links = items.map(page => (
      <Anchor key={page.label} href={page.path} label={page.label} />
    ));
    return (
        <Sidebar colorIndex="neutral-3" fixed={true}>
          <Box pad={{ horizontal: "medium" }}>
            <Header size="large" justify="between" pad={{ horizontal: "none" }}>
              <Title onClick={this._onClose} a11yTitle="Close Menu">
                <Logo />
                <span>BiMAP v0.10.1</span>
              </Title>
              <Button
                icon={<CloseIcon />}
                onClick={this._onClose}
                plain={true}
                a11yTitle="Close Menu"
              />
            </Header>
          </Box>
          <Menu fill={true} primary={true}>
            {links}
          </Menu>
          <AllFieldTypes />
          <Footer pad={{ horizontal: "medium", vertical: "small" }}>
            <SessionMenu dropAlign={{ bottom: "bottom" }} />
          </Footer>
        </Sidebar>
    );
  }
}

NavSidebar.defaultProps = {
  nav: {
    active: true, // start with nav active
    enabled: true, // start with nav disabled
    responsive: "multiple",
    items: [
      { path: "/dashboard", label: "Dashboard" },
      { path: "/about", label: "About" }
    ]
  }
};

NavSidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
        label: PropTypes.string
      })
    )
  })
};

export default NavSidebar;
