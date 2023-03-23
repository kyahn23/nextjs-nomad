import Seo from "@/components/Seo";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function Detail(props) {
  const [title, id] = props.params || [];
  const movie = props.movie;
  return (
    <Fragment>
      <Seo title={title} />
      <h4>{title}</h4>
      <h4>{movie.original_title || "Loading..."}</h4>
    </Fragment>
  );
}

export async function getServerSideProps({ params: { params } }) {
  const [title, id] = params;
  const movie = await (
    await fetch(`http://localhost:3000/api/movies/${id}`)
  ).json();

  return {
    props: {
      movie,
      params,
    },
  };
}
