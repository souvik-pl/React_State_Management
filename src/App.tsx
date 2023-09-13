import { useState } from "react";
import styles from "./App.module.css";
import Child1 from "./Child1/Child1";
import Child2 from "./Child2/Child2";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  console.log("App renders");

  return (
    <div className={styles.app_container}>
      <p>App</p>
      <Child1 count={count} />
      <Child2 incrementCount={incrementCount} />
    </div>
  );
}

export default App;
