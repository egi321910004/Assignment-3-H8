/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Interest from "../../components/Interest";

const Interests = () => {
  return (
    <div className={styles.container}>
      <Header title="Interests" />
      <section className={styles.section}>
        <Interest title="Hacktiv8 Indonesia" followers={8903} />
        <Interest title="Linkedin News Asia" followers={3039872} />
      </section>
    </div>
  );
};

export default Interests;
