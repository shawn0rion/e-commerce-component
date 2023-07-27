import styled from "styled-components";
//  import images for minux and plus from images folder
import minus from "/images/icon-minus.svg";
import plus from "/images/icon-plus.svg";

const StyledCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  padding: 20px;
  border-radius: 10px;
  width: 100%;

  & img {
    height: 12px;
    width: 12px;
  }
`;

export default function Counter(props) {
  const { onDecrement, onIncrement, counter } = props;

  return (
    <StyledCounter>
      <button onClick={onDecrement}>
        <img src={minus} alt="decrease" />
      </button>
      <span>{counter}</span>
      <button onClick={onIncrement}>
        <img src={plus} alt="increase" />
      </button>
    </StyledCounter>
  );
}
