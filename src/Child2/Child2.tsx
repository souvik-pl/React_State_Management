import { useContext, useEffect } from "react";
import styles from "./Child2.module.css";
import { CountContext } from "../state";

function Child2() {
  const { setCount } = useContext<any>(CountContext);

  useEffect(() => {
    console.log("Child 2 mounts");
  }, []);

  console.log("Child 2 renders");

  return (
    <div
      className={styles.container}
      onClick={() => {
        setCount(5);
      }}
    >
      <p>Child 2</p>
    </div>
  );
}

export default Child2;
