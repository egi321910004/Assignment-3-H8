/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import ExperienceSection from "../../components/ExperienceSection";

const Experience = () => {
  return (
    <div className={styles.container}>
      <Header title="Experience" />
      <section className={styles.section}>
        <ExperienceSection
          title="Frontend Developer"
          position="PT Mega Finance · Full-time"
          date="Oktober 2022 - Present · 1 mos"
        />
      </section>
    </div>
  );
};

export default Experience;
