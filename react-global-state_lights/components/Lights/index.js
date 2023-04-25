import styled from "styled-components";
import Light from "../Light";
import { useLightsStore } from "../../stores/lightsStorage";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights() {
  const { lights } = useLightsStore();
  return (
    <StyledLights>
      {lights.map((light) => (
        <li key={light.id}>
          <Light />
        </li>
      ))}
    </StyledLights>
  );
}
