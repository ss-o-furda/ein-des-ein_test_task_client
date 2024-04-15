import { IImage } from "../../utils/IImage";
import { IMAGES_COLUMNS_COUNT } from "../../utils/constants";
import BoneImage from "./Image";
import styles from "./images.module.css";

const Images = ({ images }: { images: IImage[] }) => {
  return (
    <section
      className={styles.images}
      style={{ gridTemplateColumns: `repeat(${IMAGES_COLUMNS_COUNT}, 1fr)` }}
    >
      {images.map((i: IImage) => (
        <BoneImage key={i.filename} image={i} />
      ))}
    </section>
  );
};

export default Images;
