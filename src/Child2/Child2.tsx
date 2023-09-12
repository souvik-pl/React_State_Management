import { useEffect } from "react";
import styles from "./Child2.module.css";
import useStore from "../state/store";

function Child2() {
  useEffect(() => {
    console.log("Child 2 mounts");
  }, []);

  const modifyCount = useStore((state: any) => state.incrementByFive);

  console.log("Child 2 renders");

  return (
    <div className={styles.container} onClick={modifyCount}>
      <p>Child 2</p>
    </div>
  );
}

export default Child2;
