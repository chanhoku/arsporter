import { flex } from "styled-system/patterns";
import Burgerbtn from "src/app/components/burgerbtn";
import Logo from "src/app/components/logo";
import Nav from "src/app/components/nav";
export default function Header() {
  return (
    <header
      className={flex({
        justifyContent: "space-between",
        alignItems: "center",
        p: "16px 32px",
      })}
    >
      <Logo />
      <Nav />
    </header>
  );
}
