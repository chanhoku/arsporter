import { css } from "styled-system/css";
import Title from "src/app/components/title";
import AboutContent from "src/app/components/aboutcontent";
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidMap } from "react-icons/bi";
import { BsCardList } from "react-icons/bs";
import Wrapper from "src/app/components/wrapper";

const aboutInfo = [
  {
    aboutTitle: "会社名・代表者名",
    aboutDetail: "アルスポーター株式会社\n代表取締役 高橋拳二",
    component: <BsPeopleFill />,
  },
  {
    aboutTitle: "住所",
    aboutDetail: "北海道札幌市北区新琴似1条12丁目\n1番38-202号",
    component: <BiSolidMap />,
  },
  {
    aboutTitle: "事業内容",
    aboutDetail: "貨物軽自動車運送事業",
    component: <BsCardList />,
  },
];
export default function Aboutus() {
  return (
    <Wrapper>
      <Title subtitle="会社情報" title="About us" />
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          md: {
            flexDirection: "row",
          },
        })}
      >
        {aboutInfo.map((aboutInfo) => (
          <AboutContent
            key={aboutInfo.aboutTitle}
            aboutTitle={aboutInfo.aboutTitle}
            aboutDetail={aboutInfo.aboutDetail}
            component={aboutInfo.component}
          />
        ))}
      </div>
    </Wrapper>
  );
}
