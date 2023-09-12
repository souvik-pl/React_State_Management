import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Child1 from "./Child1/Child1";
import Child2 from "./Child2/Child2";
import { CountContext } from "./state";

function App() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("App mounts");
  }, []);

  console.log("App renders");

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <div className={styles.app_container}>
        <p>App</p>
        <Child1 />
        <Child2 />
      </div>
    </CountContext.Provider>
  );
}

export default App;
