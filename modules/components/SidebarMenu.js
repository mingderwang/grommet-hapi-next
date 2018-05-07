import React, { Component } from "react";
import PropTypes from "prop-types";
import FormField from "grommet/components/FormField";
import Heading from "grommet/components/Heading";
import Select from "grommet/components/Select";
import Theme from "./Theme";
import Head from "next/head";

const BACKGROUNDS = ["none", "light", "dark", "light on dark", "dark on light"];

export default class ContextFields extends Component {
  _change(property) {
    return event => {
      let nextProps = {};
      const value = event.value;
      if ("none" !== value) {
        nextProps[property] = value;
      }
      this.props.onChange(nextProps);
    };
  }

  render() {
    const { background } = this.props;
    return (
      <div>
        <Head>
          <link
            href="//cdnjs.cloudflare.com/ajax/libs/grommet/1.10.1/grommet.min.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <fieldset>
          <Heading tag="h3">Context</Heading>
          <FormField label="Background">
            <Select
              options={BACKGROUNDS}
              value={background}
              onChange={this._change("background")}
            />
          </FormField>
          <FormField label="Theme">
            <Theme />
          </FormField>
        </fieldset>
      </div>
    );
  }
}

ContextFields.propTypes = {
  background: PropTypes.oneOf(BACKGROUNDS),
  onChange: PropTypes.func
};

ContextFields.defaultProps = {
  background: BACKGROUNDS[0]
};
