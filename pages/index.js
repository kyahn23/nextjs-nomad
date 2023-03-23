import NavBar from "@/components/NavBar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Seo from "./Seo";

const API_KEY = "cb97d663128601f0bd425579172816b0";

export default function Home({ results }) {
  const router = useRouter();

  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`
    );
  };

  const imgStyle = {
    maxWidth: "100%",
    borderRadius: "12px",
    transition: "transform 0.2s ease-in-out",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    height: "auto",
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() => {
            onClick(movie.id, movie.original_title);
          }}
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
            width={1000}
            height={100}
            style={imgStyle}
            className="movieImg"
          />
          {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /> */}
          <Link
            href={{
              pathname: `/movies/${movie.id}`,
              query: {
                title: movie.original_title,
              },
            }}
            as={`/movies/${movie.id}`}
          >
            <h4>{movie.original_title}</h4>
          </Link>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
          position: relative;
        }
        /* .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        } */

        :global(.movie:hover img) {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: { results },
  };
}
