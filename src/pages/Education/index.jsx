/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import EducationSection from "../../components/EducationSection";

const Education = () => {
  return (
    <div className={styles.container}>
      <Header title="Education" />
      <section className={styles.section}>
        <EducationSection
          title="Universitas Ma Chung"
          position="Bachelor's degree, Information Systems"
          date="Sep 2019 - 2023"
        />
        <EducationSection
          title="Hacktiv8 Indonesia"
          position="Studi Independen, React and React Native for Front End Developer"
          date="Aug 2022 - Dec 2022"
        />
      </section>
    </div>
  );
};

export default Education;
