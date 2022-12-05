import { useState } from 'react';
import {
  StHeader,
  StImg,
  StSpan,
  StHelp,
  StTogle,
  StTogleWrapper,
} from './Header.style';
import Help from './Help';

export default function Header() {
  const [togle, setTogle] = useState(false);
  const togleHandle = () => {
    setTogle((prev) => !prev);
  };
  return (
    <StHeader className="header">
      <StImg src="/logo.png" alt="mainLogo" />
      <StSpan>Tomato-do</StSpan>
      <StHelp className="help_temp" onClick={togleHandle}>
        도움말
        <StTogleWrapper>{togle && <Help />}</StTogleWrapper>
      </StHelp>
    </StHeader>
  );
}
