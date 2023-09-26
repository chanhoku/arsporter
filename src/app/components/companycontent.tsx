import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import { BsPeopleFill } from "react-icons/bs";
import { ReactNode } from "react";
export default function ConpanyContent({
  aboutTitle,
  aboutDetail,
  component,
}: {
  aboutTitle: string;
  aboutDetail: string;
  component: ReactNode;
}) {
  return (
    <div
      className={flex({
        p: "16px 3% 32px",
        w: "100%",
        md: {
          w: "33.33%",
          p: "16px 24px 32px",
        },
      })}
    >
      <div
        className={flex({
          w: "56px",
          h: "56px",
          justifyContent: "center",
          alignItems: "center",
          mr: "16px",
          border: "1px solid",
          borderColor: "primary",
        })}
      >
        <div
          className={css({
            color: "primary",
            fontSize: "24px",
          })}
        >
          {component}
        </div>
      </div>
      <div>
        <p
          className={css({
            fontWeight: "bold",
            mb: "8px",
          })}
        >
          {aboutTitle}
        </p>
        <p
          className={css({
            fontSize: "12px",
            color: "textgray",
            whiteSpace: "pre-wrap",
          })}
        >
          {aboutDetail}
        </p>
      </div>
    </div>
  );
}
