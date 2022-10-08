/** Styles */
import styles from "./style.module.css";

const Organization = ({ title, position, date, logo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        <h3>{position}</h3>
        <p>{title}</p>
        <small>{date}</small>
      </div>
    </div>
  );
};

export default Organization;
