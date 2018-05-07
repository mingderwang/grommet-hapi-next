import { Animate } from "~/animateTest";
import { Provider } from "react-redux";
import { getStore } from "~/redux-config";

export default () => (
  <div>
    <Provider store={getStore()}>
      <Animate />
    </Provider>
  </div>
);
