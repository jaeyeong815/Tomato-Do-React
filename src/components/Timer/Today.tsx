import styled from 'styled-components';

export default function Today() {
  const todayDate = new Intl.DateTimeFormat('ko', {
    dateStyle: 'full',
  }).format(new Date());

  return <TodayWrapper>오늘은 {todayDate}</TodayWrapper>;
}

const TodayWrapper = styled.div`
  margin: 20px 0;
  font-size: 25px;
  font-weight: 500;
`;
