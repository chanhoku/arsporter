import Hero from "src/app/components/hero";
import Aboutus from "@/app/components/aboutus";
import { css } from "styled-system/css";
import CompanyProfile from "@/app/components/companyprofile";
import Service from "src/app/components/service";
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
      <Service />
      <CompanyProfile />
    </>
  );
}
