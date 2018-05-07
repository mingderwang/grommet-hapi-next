import Button from "grommet/components/Button";
import Box from "grommet/components/Box";
import Sidebar from "grommet/components/Sidebar";
import Header from "grommet/components/Header";
import Menu from "grommet/components/Menu";
import Title from "grommet/components/Title";
import Anchor from "grommet/components/Anchor";
import Footer from "grommet/components/Footer";
import UserIcon from "grommet/components/icons/base/User";
import CaretBackIcon from "grommet/components/icons/base/CaretBack";
import CaretNextIcon from "grommet/components/icons/base/CaretNext";
import Split from "grommet/components/Split";
import MainPage from "~/mainPage";

export default class NavSidebar extends React.Component {
  render() {
    let { toggle = true, _toggle } = this.props;
    let { url } = this.props;


    let caret;
    if (toggle) {
      caret = <CaretBackIcon />;
    } else {
      caret = <CaretNextIcon />;
    }

    let menu;
    if (toggle) {
      menu = (
        <Sidebar colorIndex="neutral-1" fixed={false} size="small">
          <Header pad="medium" justify="left">
            <Title>BiMAP 0.11.1</Title>
            <Button icon={caret} colorIndex='light-2' onClick={_toggle} />
          </Header>
          <Box flex="grow" justify="start">
            <Menu primary={true}>
              <Anchor href="#" className="active">
                First
              </Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
            </Menu>
          </Box>
          <Footer pad="medium">
            <Button icon={<UserIcon />} />
          </Footer>
        </Sidebar>
      );
    } else {
      menu = <span />;
    }

    let showPriority;
    if (toggle) {
      showPriority = "left";
    } else {
      showPriority = "right";
    }

    return (
      <Split flex="right" priority={showPriority}>
        <Box pad={{ between: "medium" }} align="center">
          <Box direction="row">{menu}</Box>
        </Box>
        <Box>
          <Button icon={caret} onClick={_toggle} />
          <MainPage index={url.query.date} />
        </Box>
      </Split>
    );
  }
}
