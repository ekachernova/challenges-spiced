import { MapContainer, MapImage, MapISS } from "./Map.styled";

/**
 * Note: `SWR` needs you to destructure a `data` object, but the `Map` and `Controls` component need `longitude` and `latitude` as separate props; how can you simply pass the coordinates from `data` without changing the `Map/index.js` and `Controls/index.js` files? (Hint: there are several ways to do this!)
 */

export default function Map({ longitude, latitude }) {
  const [x, y] = positionToMapCoordinates(longitude, latitude);

  return (
    <MapContainer className="Map">
      <MapImage
        className="Map__image"
        src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
        alt="a map of the world"
        fill
      />
      <MapISS
        className="Map__ISS"
        style={{
          top: y,
          left: x,
        }}
      ></MapISS>
    </MapContainer>
  );
}

function positionToMapCoordinates(long, lat) {
  const x = `${((long + 180) % 360) / 3.6}%`;
  const y = `${50 - lat / 1.8}%`;
  return [x, y];
}
