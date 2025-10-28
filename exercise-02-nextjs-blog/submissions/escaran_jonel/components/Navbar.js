import Link from "next/link";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Link href="/" className={classes.link}>
        Home
      </Link>
      <Link href="/about" className={classes.link}>
        About
      </Link>
    </nav>
  );
}
