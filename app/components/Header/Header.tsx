import { Link } from "@remix-run/react";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<nav className={styles.nav}>
			<Link to={"/waitlist"}>[ Waitlist ]</Link>
			<Link to={"/community"}>[ Community ]</Link>
			<Link to={"/about"}>[ About ]</Link>
		</nav>
	);
}
