import styles from "./aside.module.css";
import logo from "../../assets/logo.svg";
import { CLASSES, CLASSES_SEARCH_PARAM } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";
import { modifySearchParams } from "./utils";

const Aside = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectAllClasses = () => {
    setSearchParams({ classes: CLASSES.map((c) => c.name).join(",") });
  };

  const deSelectAllClasses = () => {
    setSearchParams();
  };

  const toggleClass = (className: string) => {
    setSearchParams((prev: URLSearchParams) =>
      modifySearchParams(prev, className)
    );
  };

  return (
    <aside className={styles.aside}>
      <img src={logo} alt="dataspan.ai logo" className={styles.logo} />

      <section className={styles.filters}>
        <span className={styles.filters_header}>Classes filter</span>

        <div className={styles.filters_toggle}>
          <span
            className={`${styles.filters_toggle__select_all} ${
              searchParams.get(CLASSES_SEARCH_PARAM)?.split(",").length ===
              CLASSES.length
                ? styles.filters_toggle__disabled
                : styles.filters_toggle__enabled
            } `}
            onClick={selectAllClasses}
          >
            Select all
          </span>
          <span
            className={`${styles.filters_toggle__deselect_all} ${
              searchParams.get(CLASSES_SEARCH_PARAM)?.split(",")?.length ===
              undefined
                ? styles.filters_toggle__disabled
                : styles.filters_toggle__enabled
            } `}
            onClick={deSelectAllClasses}
          >
            Deselect all
          </span>
        </div>

        <div className={styles.filters_select}>
          {CLASSES.map((class_) => (
            <div
              key={class_.name}
              style={{
                borderColor: `var(--${class_.color})`,
                backgroundColor: `${
                  searchParams
                    .get(CLASSES_SEARCH_PARAM)
                    ?.split(",")
                    .find((c) => c === class_.name)
                    ? `var(--light-${class_.color})`
                    : "white"
                }`,
              }}
              className={styles.filters_select__item}
              onClick={() => toggleClass(class_.name)}
            >
              <div
                className={styles.filters_select__item__icon}
                style={{
                  backgroundColor: `var(--${class_.color})`,
                }}
              />
              <span className={styles.filters_select__item__text}>
                {class_.name.charAt(0).toUpperCase() + class_.name.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Aside;
