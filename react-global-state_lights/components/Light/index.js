import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { useLightsStore } from "../../stores/lightsStorage";

export default function Light({ light }) {
  const { toggleLight } = useLightsStore();

  return (
    <LightButton
      type="button"
      onClick={() => {
        toggleLight(light.id, light.isOn);
      }}
      isOn={light.isOn}
    >
      <Icon isOn={light.isOn}>💡</Icon>
      <Text>
        <Name>{light.name}</Name>
        <State>{light.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
