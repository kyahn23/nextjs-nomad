import { useRouter } from "next/router";

export default function Detail({ movie }) {
  const router = useRouter();
  return (
    <>
      <h4>{router.query.title}</h4>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query);
  const movie = await (
    await fetch(`http://localhost:3000/api/movies/${context.query.id}`)
  ).json();

  return {
    props: {
      movie,
    },
  };
}
