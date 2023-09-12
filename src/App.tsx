import { useEffect } from "react";
import { Provider } from "react-redux";
import styles from "./App.module.css";
import Child1 from "./Child1/Child1";
import Child2 from "./Child2/Child2";
import store from "./state/store";

function App() {
  useEffect(() => {
    console.log("App mounts");
  }, []);

  console.log("App renders");

  return (
    <Provider store={store}>
      <div className={styles.app_container}>
        <p>App</p>
        <Child1 />
        <Child2 />
      </div>
    </Provider>
  );
}

export default App;
