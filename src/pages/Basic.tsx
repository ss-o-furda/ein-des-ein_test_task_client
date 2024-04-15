import styles from "./basic.module.css";
import { Aside, Header, Images, Tabs } from "../components";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { BASE_URL, CLASSES_SEARCH_PARAM } from "../utils/constants";
import { IImage } from "../utils/IImage";

const Basic = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [imagesData, setImagesData] = useState<IImage[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const searchClasses = searchParams.getAll(CLASSES_SEARCH_PARAM);
      const params =
        searchClasses.length > 0
          ? `?${CLASSES_SEARCH_PARAM}=${searchClasses}`
          : "";
      fetch(`${BASE_URL}/data${location.pathname}${params}`)
        .then((r) => r.json())
        .then((data) => setImagesData(data));
    };
    fetchData();
  }, [location, searchParams]);
  return (
    <>
      <Aside />
      <main className={styles.main}>
        <Header imagesCount={imagesData.length} />
        <section className={styles.content}>
          <Tabs />
          <Images images={imagesData} />
        </section>
      </main>
    </>
  );
};

export default Basic;
