import { Link, useLocation } from "react-router-dom";
import styles from "./tabs.module.css";
import { ALL_GROUPS, TEST, TRAIN, VALID } from "../../utils/constants";

const Tabs = () => {
  const location = useLocation();

  return (
    <section className={styles.tabs}>
      <Link
        to={ALL_GROUPS}
        className={`${styles.tab} ${
          location.pathname === ALL_GROUPS ? styles.active : ""
        } `}
      >
        All groups
      </Link>
      <Link
        to={TRAIN}
        className={`${styles.tab} ${
          location.pathname === TRAIN ? styles.active : ""
        } `}
      >
        Train
      </Link>
      <Link
        to={VALID}
        className={`${styles.tab} ${
          location.pathname === VALID ? styles.active : ""
        } `}
      >
        Valid
      </Link>
      <Link
        to={TEST}
        className={`${styles.tab} ${
          location.pathname === TEST ? styles.active : ""
        } `}
      >
        Test
      </Link>
    </section>
  );
};

export default Tabs;
