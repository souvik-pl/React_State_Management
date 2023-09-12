import { useEffect } from "react";
import styles from "./GrandChild1.module.css";
import useStore from "../../state/store";

function GrandChild1() {
  const count = useStore((state: any) => state.count);

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
