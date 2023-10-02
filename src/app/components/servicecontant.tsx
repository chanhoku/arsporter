import { ReactNode } from "react";
import { flex } from "styled-system/patterns";
import { css } from "styled-system/css";

export default function ServiceContant({
  serviceTitle,
  serviceDiscription,
  component,
}: {
  serviceTitle: string;
  serviceDiscription: string;
  component: ReactNode;
}) {
  return (
    <div
      className={flex({
        flexDirection: "column",
        w: "100%",
        p: "32px 16px",
        md: {
          w: "calc(100%/3)",
        },
      })}
    >
      <div
        className={flex({
          p: "24px",
          fontSize: "128px",
          color: "primary",
          border: "2px solid",
          borderColor: "primary",
          w: "100%",
          justifyContent: "center",
          mb: "24px",
        })}
      >
        {component}
      </div>
      <div
        className={css({
          p: "0 8px",
        })}
      >
        <p
          className={css({
            fontSize: "20px",
            fontWeight: "bold",
            mb: "24px",
          })}
        >
          {serviceTitle}
        </p>
        <p
          className={css({
            fontSize: "16px",
            color: "textgray",
            whiteSpace: "pre-wrap",
          })}
        >
          {serviceDiscription}
        </p>
      </div>
    </div>
  );
}
