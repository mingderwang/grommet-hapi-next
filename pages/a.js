import { Counter } from "~/counter";
import { Provider } from "react-redux";
import { getStore } from "~/redux-config";

export default () => (
  <div>
    <Provider store={getStore()}>
      <Counter />
    </Provider>
  </div>
);
