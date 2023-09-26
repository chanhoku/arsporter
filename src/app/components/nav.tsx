"use client";
import { flex } from "styled-system/patterns";
import { css } from "styled-system/css";
import { useState } from "react";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };
  return (
    <nav>
      <button
        className={css({
          position: "relative",
          zIndex: "200",
          color: navIsOpen ? "#fff" : "#333",
          md: { display: "none", color: "#333" },
        })}
        onClick={toggleNav}
      >
        menu
      </button>
      <ul
        className={css({
          display: "grid",
          gap: "40px",
          placeContent: "center",
          textAlign: "center",
          position: "fixed",
          zIndex: "100",
          bg: "rgba(0,0,0,0.8)",
          color: "white",
          inset: "0 -100% 0 100%",
          transition: "transform 0.8s",
          transform: navIsOpen ? "translateX(-100%)" : "translateX(0%)",
          "& li": {
            p: "8px",
            fontSize: "14px",
          },
          md: {
            display: "flex",
            gap: "24px",
            position: "relative",
            inset: "0 0 0 0",
            bg: "none",
            color: "#333",
            flexDirection: "row",
          },
        })}
      >
        <li>アルスポーターについて</li>
        <li>事業内容</li>
        <li>会社概要</li>
      </ul>
    </nav>
  );
}
