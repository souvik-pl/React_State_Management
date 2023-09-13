import { useDispatch } from "react-redux";
import styles from "./Child2.module.css";
import { incrementCount } from "../state/counterSlice";

function Child2() {
  const dispatch = useDispatch();

  function modifyCount() {
    dispatch(incrementCount());
  }

  console.log("Child 2 renders");

  return (
    <div className={styles.container}>
      <p>Child 2</p>
      <button onClick={modifyCount}>Increment count</button>
    </div>
  );
}

export default Child2;
