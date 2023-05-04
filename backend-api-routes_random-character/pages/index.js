import useSWR from "swr";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR(`/api/random-character`, fetcher);
  console.log(data);

  if (!data) {
    return <h1>loading</h1>;
  }

  if (error) {
    return <h1>error</h1>;
  }

  return (
    <>
      <h1>Random character</h1>
      <p>{data.firstName}</p>
      <p>{data.lastName}</p>
      <p>{data.twitter}</p>
      <p>{data.geohash}</p>
    </>
  );
}
