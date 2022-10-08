/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Organization from "../../components/Organization";

const Organizations = () => {
  return (
    <div className={styles.container}>
      <Header title="Organizations" />
      <section className={styles.section}>
        <Organization
          position="Koordinator Public Relation"
          title="Himpunan Mahasiswa Prodi Sistem Informasi"
          date="Oct 2021 - 2022"
        />
      </section>
    </div>
  );
};

export default Organizations;
