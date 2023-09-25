import { center } from "styled-system/patterns";
import { css } from "styled-system/css";

export default function Title({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className={center({
        flexDirection: "column",
        mb: "56px",
      })}
    >
      <p
        className={css({
          fontSize: "12px",
          fontWeight: "bold",
          color: "gray",
          mb: "16px",
          letterSpacing: "2px",
        })}
      >
        {subtitle}
      </p>
      <h2
        className={css({
          fontSize: "24px",
          fontWeight: "bold",
        })}
      >
        {title}
      </h2>
    </div>
  );
}
