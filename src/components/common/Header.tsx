import { StHeader, StImg, StSpan } from './Header.style';

export default function Header() {
  return (
    <StHeader className="header">
      <StImg src="/logo.png" alt="mainLogo" />
      <StSpan>Tomato-do</StSpan>
    </StHeader>
  );
}
