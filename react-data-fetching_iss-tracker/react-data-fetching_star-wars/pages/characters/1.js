import { useState } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/?${id}`,
    fetcher
  );
  console.log("data", data);

  if (error) return <p>Error..</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <Layout>
      <Card
        id={data.id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_olor}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
