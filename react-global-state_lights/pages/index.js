import Link from "../components/Link";
import { useLightsStore } from "../stores/lightsStorage";

export default function HomePage({ lights }) {
  const lengthLightsOn = useLightsStore((state) => state.numberOfLights());

  return (
    <div>
      <h1>Home</h1>
      <p>{lengthLightsOn} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
