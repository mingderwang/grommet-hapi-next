import "isomorphic-fetch";
import Header from "grommet/components/Header";
import React from "react";
import withRedux from "next-redux-wrapper";
import Sidebar from "grommet/components/Sidebar";
import Fork from "../components/Fork";
import Todo from "../components/Todo";
import SkipLinkAnchor from "grommet/components/SkipLinkAnchor";
import initStore from "../utils/store";
import Box from "grommet/components/Box";
import Split from "grommet/components/Split";
import App from "grommet/components/App";
import Head from "next/head";
import Menu from "grommet/components/Menu";
import Button from "grommet/components/Button";
import User from "grommet/components/icons/base/User";

class Index extends React.Component {
  static async getInitialProps({ store }) {
    // Adding a default/initialState can be done as follows:
    // store.dispatch({ type: 'ADD_TODO', text: 'It works!' });
    const res = await fetch(
      "https://api.github.com/repos/ooade/NextSimpleStarter"
    );
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  render() {
    const { stars } = this.props;
    return (
      <div>
        <Head>
          <link
            href="//cdnjs.cloudflare.com/ajax/libs/grommet/1.0.1/grommet.min.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <Split>
          <Sidebar size="small" colorIndex="light-2">
            <SkipLinkAnchor label="Right Panel" />
            <Header
              pad={{ horizontal: "medium", vertical: "medium" }}
              justify="between"
              size="large"
            />
            <Menu responsive={true} icon={<User />} label="Label">
              <Button
                align="start"
                label="Todo"
                onClick={() => {}}
                href="#"
                path="/todo"
              />
              <Button
                align="start"
                label="a"
                onClick={() => {}}
                href="#"
                path="/a"
              />
              <Button
                align="start"
                label="Home"
                onClick={() => {}}
                href="#"
                path="/"
              />
            </Menu>
          </Sidebar>
          <Box
            colorIndex="neutral-1"
            justify="between"
            align="start"
            pad="none"
          >
            <Todo />
          </Box>
          <Box
            colorIndex="neutral-1"
            justify="center"
            align="center"
            pad="medium"
          >
            Left Side
          </Box>
          <Box
            colorIndex="neutral-2"
            justify="center"
            align="center"
            pad="medium"
          >
            Right Side
          </Box>
        </Split>
      </div>
    );
  }
}

export default withRedux(initStore)(Index);
