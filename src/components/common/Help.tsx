import styled from 'styled-components';

function Help() {
  return (
    <StTogle>
      <p>λ½λͺ¨λλ‘π λ?</p>
      <br />
      <p>
        νμ΄λ¨Έλ₯Ό μ΄μ©νμ¬ 25λΆκ° μ§μ€ν΄ μΌμ ν λ€μ <br />
        5λΆκ° ν΄μνλ μκ° κ΄λ¦¬ λ°©λ²μλλ€.
      </p>
      <br />
      <p>
        Tomato-doλ 50λΆ-10λΆ νμ΄λ¨Έλ μμ΄μ π <br />
        λ³ΈμΈμκ² λ§λ νμ΄λ¨Έλ‘ μμ€ν μκ°μ κ΄λ¦¬ν΄λ³΄μΈμ!
      </p>
    </StTogle>
  );
}

export default Help;

export const StTogle = styled.div`
  padding: 20px 30px;
  background-color: white;
  border-radius: 5px;

  box-shadow: 2px 2px 10px 1px gray;
`;
