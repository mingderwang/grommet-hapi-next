// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from "react";
import FormField from "grommet/components/FormField";
import FormFields from "grommet/components/FormFields";
import Form from "grommet/components/Form";
import Footer from "grommet/components/Footer";
import Header from "grommet/components/Header";
import Heading from "grommet/components/Header";
import CheckBox from "grommet/components/CheckBox";
import RadioButton from "grommet/components/RadioButton";
import Button from "grommet/components/Button";
import TextInput from "grommet/components/TextInput";
import Select from "grommet/components/Select";
import NumberInput from "grommet/components/NumberInput";
import Table from "grommet/components/Table";
import Anchor from "grommet/components/Anchor";
import DateTime from "grommet/components/DateTime";
import Box from "grommet/components/Box";
import Head from "next/head";

const VALUES = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

export default class AllFieldTypes extends Component {
  constructor() {
    super();
    this.state = {
      boolean: false,
      date: new Date().toISOString().slice(0, 10),
      number: 10,
      option: "",
      suggestions: VALUES,
      text: ""
    };
  }

  _change(type) {
    return event => {
      const nextState = { suggestions: VALUES };
      let value;
      if ("boolean" === type) {
        value = event.target.checked;
      } else if ("number" === type) {
        value = parseInt(event.target.value, 10);
      } else if (event.hasOwnProperty("suggestion")) {
        value = event.suggestion;
      } else if (event.hasOwnProperty("value")) {
        value = event.value;
      } else if (event.hasOwnProperty("target")) {
        value = event.target.value;
      } else {
        value = event;
      }
      nextState[type] = value;
      this.setState(nextState);
    };
  }

  _domChange(type) {
    return event => {
      const value = event.target.value;
      const regexp = new RegExp("^" + value);
      const suggestions = VALUES.filter(val => regexp.test(val));
      const nextState = { suggestions };
      if ("text" === type) {
        nextState[type] = value;
      }
      this.setState(nextState);
    };
  }

  render() {
    const { boolean, date, number, option, suggestions, text } = this.state;
    return (
      <div>
        <Head>
          <link
            href="//cdnjs.cloudflare.com/ajax/libs/grommet/1.0.1/grommet.min.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <Box colorIndex="neutral-1" size="medium" pad="medium">
          <Box size="small">
            <Form>
              <Header pad={{ vertical: "medium" }}>
                <Button
                  label="資料更新"
                  type="submit"
                  primary={true}
                  onClick={() => {}}
                />
              </Header>
              <FormFields>
                <fieldset>
                  <legend>畫面設定</legend>
                  <FormField>
                    <CheckBox
                      id="f-check-box"
                      name="check"
                      label="保留用途"
                      checked={boolean}
                      onChange={this._change("boolean")}
                    />
                  </FormField>
                  <FormField>
                    <CheckBox
                      id="f-toggle"
                      name="toggle"
                      label="切換一對多"
                      toggle={true}
                      checked={boolean}
                      onChange={this._change("boolean")}
                    />
                  </FormField>
                  <FormField label="範圍設定">
                    <RadioButton
                      id="f-radio-1"
                      name="radio"
                      label="一對多"
                      onChange={this._onChange}
                    />
                    <RadioButton
                      id="f-radio-2"
                      name="radio"
                      label="多對一"
                      onChange={this._onChange}
                    />
                  </FormField>

                  <legend>範圍設定</legend>

                  <FormField label="監看日期" htmlFor="f-date-time">
                    <DateTime
                      id="f-date"
                      name="date"
                      format="YYYY-MM-DD"
                      step={5}
                      value={date}
                      onChange={this._change("date")}
                    />
                  </FormField>
                  <FormField label="前後幾天" htmlFor="f-number-input">
                    <NumberInput
                      id="f-number-input"
                      name="number"
                      value={number}
                      onChange={this._change("number")}
                    />
                  </FormField>
                  <FormField label="日期範圍" htmlFor="f-range" help={number}>
                    <input
                      id="f-range"
                      name="range"
                      type="range"
                      min="1"
                      max="20"
                      value={number}
                      onMouseUp={this._change("number")}
                    />
                  </FormField>
                  <FormField label="input - file" htmlFor="f-file">
                    <input id="f-file" name="file" type="file" />
                  </FormField>
                  <FormField label="input - color" htmlFor="f-color">
                    <input id="f-color" name="color" type="color" />
                  </FormField>

                  <FormField label="Table">
                    <Table selectable={true}>
                      <tbody>
                        <tr>
                          <td>amd72</td>
                          <td>Linux</td>
                        </tr>
                        <tr>
                          <td>amd64</td>
                          <td>Windows</td>
                        </tr>
                        <tr>
                          <td>amd78</td>
                          <td>CentOS</td>
                        </tr>
                      </tbody>
                    </Table>
                  </FormField>
                </fieldset>
              </FormFields>
            </Form>
          </Box>
        </Box>
      </div>
    );
  }
}
