import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";

import stylesheet from "./index.css?url";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
];

export default function App() {
	return (
		<html>
			<head>
				<title>Wild League</title>
				<link rel="icon" href="data:image/x-icon;base64,AA" />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				<Outlet />
				<Scripts />
				<Footer />
			</body>
		</html>
	);
}
