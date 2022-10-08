/** Styles */
import styles from "./style.module.css";

const EducationSection = ({ title, position, date, logo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        <h3>{title}</h3>
        <p>{position}</p>
        <small>{date}</small>
      </div>
    </div>
  );
};

export default EducationSection;
