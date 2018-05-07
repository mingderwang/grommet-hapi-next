import Animate from 'grommet/components/Animate';
import Value from 'grommet/components/Value';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import UserIcon from "grommet/components/icons/base/User";
import Close from "grommet/components/icons/base/Close";
import Split from "grommet/components/Split";

export default ({ toggle = true, _toggle }) => (
<Box pad={{"between": "medium"}}
  align='center'>
  <Animate leave={{"animation": "slide-right", "duration": 1000, "delay": 0}}
    leave={{"animation": "slide-left", "duration": 1000, "delay": 0}}
    visible={toggle}
    keep={true}>
    <Box direction='row'>
    <Sidebar colorIndex='neutral-1'
  fixed={false}
  size='small'>
  <Header pad='medium'
    justify='left'>
    <Title>
      BiMAP 0.11.1
    </Title>
  <Button icon={<Close />}
    primary={true}
    onClick={_toggle} />
  </Header>
  <Box flex='grow'
    justify='start'>
    <Menu primary={true}>
      <Anchor href='#'
        className='active'>
        First
      </Anchor>
      <Anchor href='#'>
        Second
      </Anchor>
      <Anchor href='#'>
        Third
      </Anchor>
    </Menu>
  </Box>
  <Footer pad='medium'>
    <Button icon={<UserIcon />} />
  </Footer>
</Sidebar>
    </Box>
  </Animate>
</Box>
)
