import { css } from "styled-system/css";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className={css({
        position: "relative",
        backgroundImage:
          "linear-gradient(90deg, rgba(65, 164, 253, 1), rgba(14, 244, 255, 1))",
        w: "100%",
        h: "70vh",
      })}
    >
      <h1
        className={css({
          position: "absolute",
          top: "50%",
          left: "5%",
          fontSize: "32px",
          color: "white",
          fontWeight: "bold",
          transform: "translateY(-50%)",
          md: {
            fontSize: "48px",
          },
        })}
      >
        地域のパートナー、
        <br />
        荷物の味方。
      </h1>
      {/* <Image
        src="/home/img_hero.jpg"
        alt="走るトラック"
        width={1980}
        height={1150}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />*/}
    </div>
  );
}
