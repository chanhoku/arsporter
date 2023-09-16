import { flex } from "styled-system/patterns"
import Burgerbtn from "src/app/components/burgerbtn";
import Logo from "src/app/components/logo";
export default function Header() {
  return (
    <header className={flex({
      justifyContent: 'space-between',
      alignItems: 'center'
    })}>
      <Logo />
      <Burgerbtn />
    </header>
  )
}
