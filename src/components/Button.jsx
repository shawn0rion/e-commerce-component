import styled from "styled-components";

const StyledButton = styled.button``;

export default function Button(props) {
  const { onClick, children } = props;
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
