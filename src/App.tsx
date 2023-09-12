import { useEffect } from "react";
import styles from "./App.module.css";
import Child1 from "./Child1/Child1";
import Child2 from "./Child2/Child2";

function App() {
  useEffect(() => {
    console.log("App mounts");
  }, []);

  console.log("App renders");

  return (
    <div className={styles.app_container}>
      <p>App</p>
      <Child1 />
      <Child2 />
    </div>
  );
}

export default App;
