import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponent from "../components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledDiv>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponent />
      <BoxWithStyledComponent isBlack />
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  display: flex;
`;
