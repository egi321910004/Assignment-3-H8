/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Award from "../../components/Award";

const Awards = () => {
  return (
    <div className={styles.container}>
      <Header title="Awards" />
      <section className={styles.section}>
        <Award
          title="Lomba Badminton 17 Agustus"
          detail="Kelurahan Ngentrong · May 2021"
        />
      </section>
    </div>
  );
};

export default Awards;
