import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a
          className={`${classes.link} ${
            router.pathname === "/" ? classes.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a
          className={[
            classes.link,
            router.pathname === "/about" ? classes.active : "",
          ].join(" ")}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
