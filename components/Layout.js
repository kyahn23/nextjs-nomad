import { useRouter } from "next/router";
import { Fragment } from "react";
import NavBar from "./NavBar";

export default function Layout(props) {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Fragment>
      <NavBar />
      {props.children}
    </Fragment>
  );
}
