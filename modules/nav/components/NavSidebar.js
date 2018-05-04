import React, { Component } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from "grommet/components/Sidebar";
import Header from "grommet/components/Header";
import Footer from "grommet/components/Footer";
import Title from "grommet/components/Title";
import Menu from "grommet/components/Menu";
import Button from "grommet/components/Button";
import Box from "grommet/components/Box";
import Animate from "grommet/components/Animate";
import Paragraph from "grommet/components/Paragraph";
import Section from "grommet/components/Section";
import CloseIcon from "grommet/components/icons/base/Close";
import Logo from "grommet/components/icons/Grommet";
import Anchor from "grommet/components/Anchor";
import { getStore } from "~/redux-config";
import SessionMenu from "~/components/SessionMenu";
import { navActivate } from "../actions";
import AllFieldTypes from "~/shared/BiMAPFieldTypes";

Section.displayName = "Section";
Animate.displayName = "Animate";

class NavSidebar extends Component {
  constructor() {
    super();
    this._onClose = this._onClose.bind(this);
  }

  _onClose() {
    this.setState({ toggleFade: !this.state.toggleFade });
  }

  render() {
    console.log(this.state);
    console.log(this.props.toggleFade);
    const {
      nav: { items },
      toggleFade
    } = this.props;
    const links = items.map(page => (
      <Anchor key={page.label} href={page.path} label={page.label} />
    ));

    return (
      <Provider store={getStore()}>
        <section>
          <Button
            icon={<CloseIcon />}
            onClick={() => this.setState({ toggleFade: !toggleFade })}
            plain={true}
            primary={true}
            a11yTitle="Close Menu"
          />

          <Sidebar size="medium" colorIndex="neutral-3" fixed={true}>
            <Box pad={{ horizontal: "medium" }}>
              <Animate
                enter={{ animation: "fade", duration: 1000 }}
                keep={true}
                visible={toggleFade}
              >
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Paragraph>
              </Animate>
              <Animate
                visible={toggleFade}
                enter={{ animation: "fade", duration: 1000 }}
                keep={true}
              >
                <Header
                  size="large"
                  justify="between"
                  pad={{ horizontal: "none" }}
                >
                  <Title onClick={this._onClose} a11yTitle="Close Menu">
                    <Logo />
                    <span>BiMAP v0.10.1</span>
                  </Title>
                </Header>
              </Animate>
            </Box>
            <Menu fill={true} primary={true}>
              {links}
            </Menu>
            <Footer pad={{ horizontal: "medium", vertical: "small" }}>
              <SessionMenu dropAlign={{ bottom: "bottom" }} />
            </Footer>
            <AllFieldTypes />
          </Sidebar>
        </section>
      </Provider>
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
  },
  toggleFade: false
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
  }),
  toggleFade: PropTypes.bool.isRequired
};

export default NavSidebar;
