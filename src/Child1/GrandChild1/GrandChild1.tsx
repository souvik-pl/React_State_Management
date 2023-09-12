import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./GrandChild1.module.css";

function GrandChild1() {
  const count = useSelector((state: any) => state.counter.value);

  useEffect(() => {
    console.log("Grand Child 1 mounts");
  }, []);

  console.log("Grand Child 1 renders");

  return (
    <div className={styles.container}>
      <p>Grand Child 1 - {count}</p>
    </div>
  );
}

export default GrandChild1;
