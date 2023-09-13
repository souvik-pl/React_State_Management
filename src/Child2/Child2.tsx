import { useContext } from "react";
import styles from "./Child2.module.css";
import { CountContext } from "../state";

function Child2() {
  const { count, setCount } = useContext<any>(CountContext);

  console.log("Child 2 renders");

  function modifyCount() {
    setCount(count + 1);
  }

  return (
    <div className={styles.container}>
      <p>Child 2</p>
      <button onClick={modifyCount}>Increment count</button>
    </div>
  );
}

export default Child2;
