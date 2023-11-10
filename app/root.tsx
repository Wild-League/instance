import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

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
				<Outlet />
				<Scripts />
			</body>
		</html>
	);
}
