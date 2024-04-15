import { useEffect, useRef } from "react";
import { IImage } from "../../utils/IImage";
import styles from "./images.module.css";
import { BASE_URL, CANVAS_SIZE, CLASS_COLOR } from "../../utils/constants";

const BoneImage = ({ image }: { image: IImage }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const loadAndDrawImage = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const bg = new Image();
      bg.src = `${BASE_URL}${image.image_path}`;

      await new Promise<void>((resolve, reject) => {
        bg.onload = () => resolve();
        bg.onerror = (error) => reject(error);
      });

      const Kw = bg.width / CANVAS_SIZE;
      const Kh = bg.height / CANVAS_SIZE;

      canvas.width = CANVAS_SIZE;
      canvas.height = CANVAS_SIZE;
      ctx.drawImage(
        bg,
        0,
        0,
        bg.width,
        bg.height,
        0,
        0,
        CANVAS_SIZE,
        CANVAS_SIZE
      );

      ctx.beginPath();
      image.polygons.forEach((polygon) => {
        ctx.lineWidth = 1;

        const startPointX = (polygon.vertices[0][0] * bg.width) / Kw;
        const startPointY = (polygon.vertices[0][1] * bg.height) / Kh;

        const vertX = polygon.vertices.map((v) => v[0]);
        const vertY = polygon.vertices.map((v) => v[1]);

        const rectStartX = (Math.min(...vertX) * bg.width) / Kw;
        const rectStartY = (Math.min(...vertY) * bg.height) / Kh;

        const rectEndX = (Math.max(...vertX) * bg.width) / Kw;
        const rectEndY = (Math.max(...vertY) * bg.height) / Kh;

        const rectSizeX = rectEndX - rectStartX;
        const rectSizeY = rectEndY - rectStartY;

        // rectangle header
        ctx.font = "8px Arial";
        ctx.fillStyle = CLASS_COLOR[polygon.class].color;
        ctx.lineJoin = "round";
        ctx.fillRect(rectStartX - 1, rectStartY - 10, rectSizeX + 1, 10);
        ctx.fillStyle = "black";
        ctx.fillText(
          polygon.class,
          rectStartX + 1,
          rectStartY - 2,
          rectSizeX - 1
        );
        // end of rectangle header

        ctx.strokeStyle = CLASS_COLOR[polygon.class].color;
        ctx.fillStyle = CLASS_COLOR[polygon.class].fillColor;

        ctx.strokeRect(rectStartX, rectStartY, rectSizeX, rectSizeY);

        ctx.moveTo(startPointX, startPointY);

        polygon.vertices.forEach((vertex) => {
          ctx.lineTo((vertex[0] * bg.width) / Kw, (vertex[1] * bg.height) / Kh);
        });

        ctx.closePath();
      });
      ctx.fill();
      ctx.stroke();
    };

    loadAndDrawImage();
  }, [image]);

  return (
    <div className={styles.image}>
      <canvas ref={canvasRef} id={image.filename} className="canvas"></canvas>
      <span className={styles.image_name}>{image.filename}</span>
    </div>
  );
};

export default BoneImage;
