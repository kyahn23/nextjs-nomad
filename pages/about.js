import Head from "next/head";
import { useRouter } from "next/router";
import Seo from "./Seo";

export default function AboutPage() {
  return (
    <div>
      <Seo title="About" />
      <h1>About Page</h1>
    </div>
  );
}
