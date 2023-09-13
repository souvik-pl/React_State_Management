import styles from "./GrandChild1.module.css";
import useStore from "../../state/store";

function GrandChild1() {
  const count = useStore((state: any) => state.count);

  console.log("Grand Child 1 renders");

  return (
    <div className={styles.container}>
      <p>Grand Child 1</p>
      <h3>Count - {count}</h3>
    </div>
  );
}

export default GrandChild1;
