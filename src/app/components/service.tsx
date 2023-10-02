import { flex } from "styled-system/patterns";
import Title from "src/app/components/title";
import Wrapper from "src/app/components/wrapper";
import { CiDeliveryTruck } from "react-icons/ci";
import ServiceContent from "src/app/components/servicecontant";

const serviceInfo = [
  {
    serviceTitle: "貨物軽自動車運送事業",
    seiviceDiscription:
      "軽自動車を用いてお客様に荷物を届けるサービスです\n札幌市近郊でお客様の商品を安全に配達致します",
    component: <CiDeliveryTruck />,
  },
  {
    serviceTitle: "貨物軽自動車運送事業",
    seiviceDiscription:
      "軽自動車を用いてお客様に荷物を届けるサービスです\n札幌市近郊でお客様の商品を安全に配達致します",
    component: <CiDeliveryTruck />,
  },
  {
    serviceTitle: "貨物軽自動車運送事業",
    seiviceDiscription:
      "軽自動車を用いてお客様に荷物を届けるサービスです\n札幌市近郊でお客様の商品を安全に配達致します",
    component: <CiDeliveryTruck />,
  },
];

export default function Service() {
  return (
    <Wrapper bg={true}>
      <Title subtitle="事業内容" title="Service" />
      <div
        className={flex({
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          md: {
            flexDirection: "row",
          },
        })}
      >
        {serviceInfo.map((serviceInfo) => (
          <ServiceContent
            key={serviceInfo.serviceTitle}
            serviceTitle={serviceInfo.serviceTitle}
            serviceDiscription={serviceInfo.seiviceDiscription}
            component={serviceInfo.component}
          />
        ))}
      </div>
    </Wrapper>
  );
}
