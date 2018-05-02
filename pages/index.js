import Header from "grommet/components/Header";
import Title from "grommet/components/Title";
import Box from "grommet/components/Box";
import Search from "grommet/components/Search";
import Menu from "grommet/components/Menu";
import Anchor from "grommet/components/Anchor";
import ActionsIcon from "grommet/components/icons/base/Actions";
import Split from "grommet/components/Split";
import Head from "next/head";
import App from "grommet/components/App";
import Footer from "grommet/components/Footer";
import Meter from "grommet/components/Meter";
import Value from "grommet/components/Value";
import Paragraph from "grommet/components/Paragraph";
import Accordion from "grommet/components/Accordion";
import AccordionPanel from "grommet/components/AccordionPanel";
import Video from "grommet/components/Video";
import Image from "grommet/components/Image";
import Carousel from "grommet/components/Carousel";
import Card from "grommet/components/Card";
import Form from "grommet/components/Form";
import FormFields from "grommet/components/FormFields";
import Heading from "grommet/components/Heading";
import Button from "grommet/components/Button";
import LoginForm from "grommet/components/LoginForm";
import DateTime from "grommet/components/DateTime";
import TableHeader from "grommet/components/TableHeader";
import Table from "grommet/components/Table";
import TableRow from "grommet/components/TableRow";
import FormField from "grommet/components/FormField";
import Layer from "grommet/components/Layer";
import Chart, {
  Axis,
  Grid,
  Area,
  Bar,
  Line,
  Marker,
  MarkerLabel,
  HotSpots
} from "grommet/components/chart/Chart";

export default () => (
  <div>
    <Head>
      <link
        href="//cdnjs.cloudflare.com/ajax/libs/grommet/1.0.1/grommet.min.css"
        rel="stylesheet"
        type="text/css"
      />
    </Head>
    <App>
      <Header>
        <Title>BiMAP v0.10.1</Title>
        <Box flex={true} justify="end" direction="row" responsive={false}>
          <Search
            inline={true}
            fill={true}
            size="medium"
            placeHolder="Search"
            dropAlign={{ right: "right" }}
          />
          <Menu icon={<ActionsIcon />} dropAlign={{ right: "right" }}>
            <Anchor href="#" className="active">
              First
            </Anchor>
            <Anchor href="#">Second</Anchor>
            <Anchor href="#">Third</Anchor>
          </Menu>
        </Box>
      </Header>
      <Split fixed={false}>
        <Box colorIndex="light-1" justify="center" align="center" pad="medium">
          <Accordion openMulti={true}>
            <AccordionPanel heading="First Title">
              <Video>
                <source
                  src="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                  type="video/mp4"
                />
              </Video>
            </AccordionPanel>
            <AccordionPanel heading="Second Title">
              <Carousel>
                <Image src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350" />
                <Image src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&h=350" />
                <Image src="https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&h=350" />
                <Box pad="large" colorIndex="neutral-3">
                  <Box pad="medium" colorIndex="neutral-2">
                    Content inside of a Box element.
                  </Box>
                </Box>
              </Carousel>
            </AccordionPanel>
            <AccordionPanel heading="Third Title">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </AccordionPanel>
            <AccordionPanel heading="Forth Title">
              <Card
                thumbnail="http://d23dyxeqlo5psv.cloudfront.net/cat.gif"
                label="使用說明"
                heading="demo"
                description="Sample description providing more details."
              />
            </AccordionPanel>

            <AccordionPanel heading="Fifth Title">
              <Table>
                <TableHeader
                  labels={["Name", "Note"]}
                  sortIndex={0}
                  sortAscending={true}
                />
                <tbody>
                  <TableRow>
                    <td>Alan</td>
                    <td>plays accordion</td>
                  </TableRow>
                  <TableRow>
                    <td>Chris</td>
                    <td>drops the mic</td>
                  </TableRow>
                  <TableRow>
                    <td>Tracy</td>
                    <td>travels the world</td>
                  </TableRow>
                </tbody>
              </Table>
            </AccordionPanel>
            <AccordionPanel heading="Sixth Title">
              <Card
                thumbnail="http://d23dyxeqlo5psv.cloudfront.net/cat.gif"
                label="使用說明"
                heading="demo"
                description="Sample description providing more details."
              />
            </AccordionPanel>
            <AccordionPanel heading="Seventh Title">
              <Chart>
                <Axis
                  count={5}
                  labels={[
                    { index: 2, label: "50" },
                    { index: 4, label: "100" }
                  ]}
                  vertical={true}
                />
                <Chart vertical={true}>
                  <MarkerLabel
                    count={12}
                    index={11}
                    label={<Value value={50} />}
                  />

                  <Axis
                    count={2}
                    labels={[
                      { index: 0, label: "2012" },
                      { index: 1, label: "2015" }
                    ]}
                  />
                </Chart>
              </Chart>
            </AccordionPanel>
          </Accordion>
        </Box>
        <Box colorIndex="light-2" justify="center" align="center" pad="medium">
          <Form>
            <Header>
              <Heading>選擇查詢日期</Heading>
            </Header>
            <FormFields>
              <Form>
                <FormField>
                  <DateTime
                    id="id"
                    name="name"
                    format="M/D/YYYY"
                    step={5}
                    //onChange={...}
                  />
                </FormField>
              </Form>
              <t />
              <LoginForm //onSubmit={...}
                logo={<s />}
                title="帳號登錄"
                secondaryText="demo 帳號: user@test/password"
                forgotPassword={<Anchor href="#" label="忘記密碼?" />}
                rememberMe={true}
              />
            </FormFields>
            <Footer pad={{ vertical: "medium" }}>
              <Button label="Submit" type="submit" primary={true} />
            </Footer>
          </Form>
        </Box>
      </Split>
      <Footer justify="between">
        <Title>
          <s />
          TurboTeam
        </Title>
        <Box direction="row" align="center" pad={{ between: "medium" }}>
          <Paragraph margin="none">© 2018 Log4analytics Labs</Paragraph>
          <Menu direction="row" size="small" dropAlign={{ right: "right" }}>
            <Anchor href="/app">Support</Anchor>
            <Anchor href="/">Contact</Anchor>
            <Anchor href="/counter">About</Anchor>
          </Menu>
        </Box>
      </Footer>
    </App>
  </div>
);