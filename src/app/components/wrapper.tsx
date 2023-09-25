import { ReactNode } from "react";
import { container } from "styled-system/patterns";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className={container({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: "80px 16px",
        md: {
          p: "80px 40px",
        },
      })}
    >
      {children}
    </div>
  );
}
