import Hero from "src/app/components/hero";
import Aboutus from "src/app/components/aboutus";
import { css } from "styled-system/css";

export default function Home() {
  return (
    <>
      <div
        className={css({
          display: "block",
          h: "56px",
          md: {
            h: "70px",
          },
        })}
      ></div>
      <Hero />
      <Aboutus />
    </>
  );
}
