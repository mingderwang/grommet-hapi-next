import { NavSidebar } from "~/nav";
import { Provider } from "react-redux";
import { getStore } from "~/redux-config";
import React, { Component } from "react";

export class Index extends Component {
  render() {
    var { url } = this.props;
    return (
      <Provider store={getStore()}>
        <div>
          <NavSidebar {...this.props} colorIndex="light-1" dropAlign={{ bottom: "top" }} />
        </div>
      </Provider>
    );
  }
}

export default Index;
