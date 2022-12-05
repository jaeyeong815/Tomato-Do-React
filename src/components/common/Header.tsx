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
      <div className="headerLeft">
        <StImg src="/logo.png" alt="mainLogo" />
        <StSpan>Tomato-do</StSpan>
      </div>
      <StHelp className="helpRight" onClick={togleHandle}>
        <p>{togle ? '닫기' : '도움말'}</p>
        <StTogleWrapper>{togle && <Help />}</StTogleWrapper>
      </StHelp>
    </StHeader>
  );
}
