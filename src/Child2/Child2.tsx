import styles from "./Child2.module.css";
import useStore from "../state/store";

function Child2() {
  const modifyCount = useStore((state: any) => state.incrementCount);

  console.log("Child 2 renders");

  return (
    <div className={styles.container}>
      <p>Child 2</p>
      <button onClick={modifyCount}>Increment count</button>
    </div>
  );
}

export default Child2;
