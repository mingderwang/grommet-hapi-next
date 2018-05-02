import Header from "grommet/components/Header";
import SkipLinkAnchor from "grommet/components/SkipLinkAnchor";
import Sidebar from "grommet/components/Sidebar";
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
import Section from "grommet/components/Section";
import Select from "grommet/components/Select";
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
import User from "grommet/components/icons/base/User";
import CloseIcon from "grommet/components/icons/base/Close";

export default () => (
  <div>
    <Head>
      <link
        href="//cdnjs.cloudflare.com/ajax/libs/grommet/1.0.1/grommet.min.css"
        rel="stylesheet"
        type="text/css"
      />
    </Head>
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
        <Button align="start" label="a" onClick={() => {}} href="#" path="/a" />
        <Button
          align="start"
          label="Home"
          onClick={() => {}}
          href="#"
          path="/"
        />
      </Menu>
    </Sidebar>
  </div>
);
