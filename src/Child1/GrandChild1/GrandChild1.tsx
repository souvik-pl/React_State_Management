import { useSelector } from "react-redux";
import styles from "./GrandChild1.module.css";

function GrandChild1() {
  const count = useSelector((state: any) => state.count.value);

  console.log("Grand Child 1 renders");

  return (
    <div className={styles.container}>
        <p>Grand Child 1</p>
        <h3>Count - {count}</h3>
    </div>
  );
}

export default GrandChild1;
