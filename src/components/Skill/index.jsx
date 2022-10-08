import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

/** Styles */
import styles from "./style.module.css";

const Skill = ({ title }) => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faCheckCircle} color="green" size="lg" />
            <p>{title}</p>
        </div>
    );
};

export default Skill;