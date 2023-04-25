import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ lights, toggleLight, setLights }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        toggleLight={toggleLight}
        setLights={setLights}
      />
    </>
  );
}
