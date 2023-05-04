import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const { data } = useSWR(`/api/products/${id}`, fetcher);

  console.log(data);

  if (!data) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <p>{data.description}</p>
    </>
  );
}
