import { Link, useLocation } from "react-router-dom";
import styles from "./tabs.module.css";
import { TABS } from "../../utils/constants";

const Tabs = () => {
  const location = useLocation();

  return (
    <section className={styles.tabs}>
      {TABS.map((tab) => (
        <Link
          to={tab.path}
          className={`${styles.tab} ${
            location.pathname === tab.path ? styles.active : ""
          } `}
        >
          {tab.name}
        </Link>
      ))}
    </section>
  );
};

export default Tabs;
