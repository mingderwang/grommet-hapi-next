import { NavSidebar } from "~/nav";
import { Provider } from "react-redux";
import { getStore } from "~/redux-config";
import PropTypes from "prop-types";
import React, { Component } from "react";
import MainPage from "~/mainPage";
import Box from "grommet/components/Box";
import Split from "grommet/components/Split";

export class Index extends Component {
  render() {
    var { url } = this.props;
    return (
      <Provider store={getStore()}>
        <div>
          <Split flex="right" fixed={false}>
            <NavSidebar colorIndex="light-1" dropAlign={{ bottom: "top" }} />
            <MainPage index={url.query.date}/>
          </Split>
        </div>
      </Provider>
    );
  }
}

export default Index;
