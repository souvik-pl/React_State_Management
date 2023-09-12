import { useEffect } from "react";
import styles from "./Child2.module.css";

function Child2(props: { updateCount: (value: number) => void }) {
  useEffect(() => {
    console.log("Child 2 mounts");
  }, []);

  function modifyCount() {
    props.updateCount(5);
  }

  console.log("Child 2 renders");

  return (
    <div className={styles.container} onClick={modifyCount}>
      <p>Child 2</p>
    </div>
  );
}

export default Child2;
