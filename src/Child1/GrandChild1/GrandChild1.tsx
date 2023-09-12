import { useEffect } from "react";
import styles from "./GrandChild1.module.css";

function GrandChild1(props: { count: number }) {
  useEffect(() => {
    console.log("Grand Child 1 mounts");
  }, []);

  console.log("Grand Child 1 renders");

  return (
    <div className={styles.container}>
      <p>Grand Child 1 - {props.count}</p>
    </div>
  );
}

export default GrandChild1;
