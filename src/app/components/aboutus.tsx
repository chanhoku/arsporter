import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import Title from "src/app/components/title";
import Wrapper from "src/app/components/wrapper";
import Image from "next/image";

export default function AboutUs() {
  return (
    <Wrapper>
      <Title subtitle="アルスポーターについて" title="About Us" />
      <div
        className={flex({
          flexDirection: "column-reverse",
          md: {
            flexDirection: "row",
          },
        })}
      >
        <div
          className={css({
            w: "100%",
            p: "16px",
            md: {
              w: "50%",
            },
          })}
        >
          {" "}
          <p
            className={css({
              fontWeight: "bold",
              fontSize: "24px",
              mb: "24px",
              lineHeight: "1.8",
            })}
          >
            小さな会社だからこそ、
            <br />
            大切な荷物を大切に運びます。
          </p>
          <p
            className={css({
              color: "textgray",
            })}
          >
            当社は地元札幌の小規模運送会社として、地域社会との深いつながりを築きながら、お客様に信頼性と安心感を提供しています。
            <br />
            <br />
            私たちの使命は、荷物を安全かつ迅速に運び、お客様のニーズに応えることです。
          </p>
        </div>
        <div
          className={css({
            w: "100%",
            p: "16px",
            borderRadius: "8px",
            md: {
              w: "50%",
            },
          })}
        >
          <Image
            src="/home/aboutus.jpg"
            alt="アルスポーターについて"
            width={300}
            height={400}
            sizes=""
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    </Wrapper>
  );
}
