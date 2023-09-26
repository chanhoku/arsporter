import { flex } from "styled-system/patterns";
import { css } from "styled-system/css";
import Logo from "src/app/components/logo";

export default function Footer() {
  return (
    <footer
      className={flex({
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        bg: "gray",
        color: "white",
        p: "32px",
        w: "100%",
      })}
    >
      <Logo />
      <div
        className={css({
          fontSize: "12px",
          p: "16px 32px",
          textAlign: "center",
        })}
      >
        アルスポーター株式会社
        <br />
        北海道札幌市北区新琴似1条12丁目1番38-202号
        <br />
        tel:011-769-8763 fax:011-769-8764
      </div>
      <div
        className={flex({
          w: "100%",
          justifyContent: "center",
        })}
      >
        <p
          className={css({
            fontSize: "12px",
            fontWeight: "100",
          })}
        >
          &copy; 2023 arsporter inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
