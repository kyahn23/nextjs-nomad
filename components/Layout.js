import { Fragment } from "react";
import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <Fragment>
      <NavBar />
      {props.children}
    </Fragment>
  );
}
