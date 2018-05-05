import Animate from 'grommet/components/Animate';
import Value from 'grommet/components/Value';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

export default ({ toggle = true, _toggle }) => (
<Box pad={{"between": "medium"}}
  align='center'>
  <Button label='Leave'
    primary={true}
    onClick={_toggle} />
  <Animate enter={{"animation": "fade", "duration": 1000, "delay": 0}}
    visible={toggle}
    keep={true}>
    <Box direction='row'>
      <Box colorIndex='light-2'
        margin='medium'
        pad='large'>
        <Value value={1} />
      </Box>
    </Box>
  </Animate>
</Box>
)
