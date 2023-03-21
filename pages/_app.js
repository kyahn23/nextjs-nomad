import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");

          a {
            color: grey;
          }
        `}
      </style>
    </Layout>
  );
}
