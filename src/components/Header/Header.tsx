import styles from "./header.module.css";

const Header = ({ imagesCount }: { imagesCount: number }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Bone-fracture-detection </h1>
      <span className={styles.header_image_count}>
        <strong className={styles.header_image_count__number}>
          {imagesCount}
        </strong>
        images
      </span>
    </header>
  );
};

export default Header;
