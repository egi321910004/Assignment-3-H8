import hacktiv8 from "../../assets/img/hacktiv8.png";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header title="Home" />
      <section className={styles.section}>
        <img src={hacktiv8} alt="Hacktiv8" className={styles.img} />
        <p>Egi Rizki Ramadani</p>
        <p>Assignment 3 Hacktiv8 - React</p>
        <br />
        <p>This my simple online portfolio</p>
        <p>Hope you enjoy to read it!</p>
      </section>
    </div>
  );
};

export default Home;
