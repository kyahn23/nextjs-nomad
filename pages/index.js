import NavBar from "@/components/NavBar";
import Head from "next/head";
import { Fragment } from "react";
import Seo from "./Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1>Home</h1>
    </div>
  );
}
