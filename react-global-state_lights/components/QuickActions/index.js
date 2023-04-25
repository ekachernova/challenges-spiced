import styled from "styled-components";
import Button from "../Button";
import { useLightsStore } from "../../stores/lightsStorage";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const { lights, setAllLights } = useLightsStore();
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          setAllLights(false);
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          setAllLights(true);
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
