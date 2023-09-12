import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Child2.module.css";
import { incrementByFive } from "../state/counterSlice";

function Child2() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Child 2 mounts");
  }, []);

  function modifyCount() {
    dispatch(incrementByFive());
  }

  console.log("Child 2 renders");

  return (
    <div className={styles.container} onClick={modifyCount}>
      <p>Child 2</p>
    </div>
  );
}

export default Child2;
