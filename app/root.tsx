import { Link, Links, Meta, Outlet, Scripts } from "@remix-run/react";

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";

import "./styles/root.module.css";

// eslint-disable-next-line react-refresh/only-export-components
export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
	return (
		<html>
			<head>
				<link rel="icon" href="data:image/x-icon;base64,AA" />
				<Meta />
				<Links />
			</head>
			<body>
				<nav>
					<Link to={"/waitlist"}>[ Waitlist ]</Link>
					<Link to={"/about"}>[ About ]</Link>
				</nav>
				<Outlet />
				<Scripts />
			</body>
		</html>
	);
}
