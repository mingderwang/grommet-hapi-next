import Button from "grommet/components/Button";
import Box from "grommet/components/Box";
import CloudIcon from "grommet/components/icons/base/Cloud";
export default ({ todo, remove }) => {
  return (
    <li>
      <Box pad="medium" colorIndex="light-2">
        <Button
          icon={<CloudIcon />}
          label="click to delete"
          onClick={_ => remove(todo)}
        >
          <Box pad="large" colorIndex="neutral-2">
            {todo.text}
          </Box>
        </Button>
      </Box>
    </li>
  );
};
