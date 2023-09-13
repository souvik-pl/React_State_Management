import { useContext } from "react";
import styles from "./GrandChild1.module.css";
import { CountContext } from "../../state";

function GrandChild1() {
  const { count } = useContext<any>(CountContext);

  console.log("Grand Child 1 renders");

  return (
    <div className={styles.container}>
      <p>Grand Child 1</p>
      <h3>Count - {count}</h3>
    </div>
  );
}

export default GrandChild1;
