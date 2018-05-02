import "isomorphic-fetch";
import React from "react";
import withRedux from "next-redux-wrapper";

import Fork from "../components/Fork";
import Todo from "../components/Todo";

import initStore from "../utils/store";
import Box from "grommet/components/Box";
import Split from "grommet/components/Split";
import App from "grommet/components/App";
import Head from "next/head";

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
        <App>
          <Split>
            <Box
              colorIndex="neutral-1"
              justify="center"
              align="center"
              pad="medium"
            >
              <Todo />
            </Box>
            <Box
              colorIndex="neutral-2"
              justify="center"
              align="center"
              pad="medium"
            >
             <Fork/> 
            </Box>
          </Split>
        </App>
      </div>
    );
  }
}

export default withRedux(initStore)(Index);
