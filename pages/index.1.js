import Link from 'next/link'
import PropTypes from 'prop-types';

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
      value={number} />

  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

class TestParameter extends React.Component {
  static getInitialProps({ query: { index, hostname, date } }) {
    return { index, hostname, date };
  }
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      hostname: props.hostname,
      date: props.date,
    };
  }


  render() {
    const date = new Date();
    const numbers = [1, 2, 3, 4, 5];
    return (
      <div>
            <div>
            <h4>Example: localhost:3000/urlparameter?hostname=amd72&date=1-1-2018&index=ming </h4>
              <h1> {this.state.index}
              </h1>
              <h2> {this.state.hostname}
              </h2>
              <h3> {this.state.date}
              </h3>
              <NumberList numbers={numbers} />
            </div>
      </div>
    )
  }
  static propTypes = {
    index: PropTypes.string.isRequired,
    hostname: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };
  static defaultProps = {
    index: 'default index',
    hostname: 'default hostname',
    date: 'default date',
  };
}

export default TestParameter;
