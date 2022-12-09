import { useState } from 'react';
import {
  StHeader,
  StImg,
  StSpan,
  StHelp,
  StTogleWrapper,
} from './Header.style';
import Help from './Help';

export default function Header() {
  const [isTogle, setIsTogle] = useState(false);
  const togleHandle = () => {
    setIsTogle((prevToggle) => !prevToggle);
  };
  return (
    <StHeader className="header">
      <div className="headerLeft">
        <StImg src="/logo.png" alt="mainLogo" />
        <StSpan>Tomato-do</StSpan>
      </div>
      <StHelp className="helpRight" onClick={togleHandle}>
        <p>{isTogle ? '닫기' : '도움말'}</p>
        <StTogleWrapper>{isTogle && <Help />}</StTogleWrapper>
      </StHelp>
    </StHeader>
  );
}
