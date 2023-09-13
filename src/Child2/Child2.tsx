import styles from "./Child2.module.css";

function Child2(props: { incrementCount: () => void }) {
  console.log("Child 2 renders");

  return (
    <div className={styles.container}>
      <p>Child 2</p>
      <button onClick={props.incrementCount}>Increment count</button>
    </div>
  );
}

export default Child2;
