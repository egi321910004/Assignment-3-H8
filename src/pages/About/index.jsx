import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";

const About = () => {
  return (
    <div className={styles.container}>
      <Header title="About" />
      <section className={styles.section}>
        <h2>Egi Rizki Ramadani</h2>
        <em>Frotend at Mega Finance </em>
        <h3>Contact</h3>
        <em>+6281331370119</em>
        <em>egirizkiramadani@gmail.com</em>
        <h3>About Me</h3>
        <p>
          Learning is like adventure you will not be satisfied at one point
          because life is never flat
        </p>
        <br />
        <div className={styles.icons}>
          <a href="www.instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
          <a
            href="www.linkedin.com/in/egiramadani"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
