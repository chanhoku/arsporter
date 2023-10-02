import { ReactNode } from "react";
import { container } from "styled-system/patterns";

export default function Wrapper({
  children,
  bg = false,
}: {
  children: ReactNode;
  bg: boolean;
}) {
  return (
    <div
      className={container({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: "80px 16px",
        bg: bg ? "#f9f9f9" : "#fff",
        md: {
          p: "80px 40px",
        },
      })}
    >
      {children}
    </div>
  );
}
