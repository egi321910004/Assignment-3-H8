/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Skill from "../../components/Skill";

const Skills = () => {
  return (
    <div className={styles.container}>
      <Header title="Skills" />
      <section className={styles.section}>
        <Skill title="Cascading Style Sheets (CSS)" />
        <Skill title="HTML" />
        <Skill title="C++" />
        <Skill title="JavaScript" />
        <Skill title="React JS" />
      </section>
    </div>
  );
};

export default Skills;
