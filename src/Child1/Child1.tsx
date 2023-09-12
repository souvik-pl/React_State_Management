import { useEffect } from "react";
import styles from "./Child1.module.css";
import GrandChild1 from "./GrandChild1/GrandChild1";

function Child1(props: { count: number }) {
  useEffect(() => {
    console.log("Child 1 mounts");
  }, []);

  console.log("Child 1 renders");

  return (
    <div className={styles.container}>
      <p>Child 1</p>
      <GrandChild1 count={props.count} />
    </div>
  );
}

export default Child1;
