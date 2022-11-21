import styled from 'styled-components';

export default function Today() {
  return <TodayWrapper>오늘은 2022년 00월 00일</TodayWrapper>;
}

const TodayWrapper = styled.div`
  margin: 20px 0;
  font-size: 25px;
  font-weight: 500;
`;
