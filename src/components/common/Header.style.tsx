import styled from 'styled-components';

export const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  padding: 0 20px;

  background-color: white;
  box-shadow: 2px 17px 20px -15px rgba(0, 0, 0, 0.5);
`;

export const StImg = styled.img`
  width: 50px;
  height: 50px;

  margin-right: 10px;
`;

export const StSpan = styled.span`
  font-weight: 800;
  font-size: 30px;
`;

export const StHelp = styled.div`
  cursor: pointer;
`;

export const StTogleWrapper = styled.div`
  position: absolute;
  right: 20px;

  width: 300px;
  margin-top: 10px;
`;

export const StTogle = styled.div`
  padding: 20px 30px;
  background-color: beige;
  border-radius: 5px;
`;
