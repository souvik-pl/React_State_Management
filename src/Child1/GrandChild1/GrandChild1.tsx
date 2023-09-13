import styles from "./GrandChild1.module.css";

function GrandChild1(props: { count: number }) {
  console.log("Grand Child 1 renders");

  return (
    <div className={styles.container}>
       <p>Grand Child 1</p>
       <h3>Count - {props.count}</h3>
    </div>
  );
}

export default GrandChild1;
