// our-domain.com/news/something-important
import { useRouter } from "next/router";

export default function DetailPage() {
  const { query } = useRouter();

  return (
    <>
      <h1>The Detail Page</h1>
      <h2>Dinamic data: {query.newsId}</h2>
    </>
  );
}
