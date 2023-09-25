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
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "100",
        w: "100%",
        bg: "white",
        boxShadow: "1px 0 10px rgba(89,98,115,.2)",
      })}
    >
      <Logo />
      <Nav />
    </header>
  );
}
