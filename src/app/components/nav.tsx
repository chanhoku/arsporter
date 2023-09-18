"use client";
import { flex } from "styled-system/patterns";
import { css } from "styled-system/css";

export default function Nav() {
  return (
    <nav>
      <ul
        className={flex({
          flexDirection: "column",
          gap: "0 10px",
          "& li": {
            p: "5px",
          },
          lg: { flexDirection: "row" },
        })}
      >
        <li>会社概要</li>
        <li>事業内容</li>
        <li>お知らせ</li>
        <li>採用情報</li>
        <li>お問い合わせ</li>
      </ul>
    </nav>
  );
}
