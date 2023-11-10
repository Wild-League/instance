import { LoaderFunctionArgs } from "@remix-run/node";

// interface Webfinger {
// 	links: {
// 		rel: string;
// 		type: string;
// 		href: string;
// 	};
// 	subject: string;
// }

export async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);

	const regexResource = /acct:[a-zA-Z]*@[a-zA-Z]*.*/g;

	const resourceParam = url.searchParams.get("resource");

	if (!regexResource.test(resourceParam ?? "")) {
		return new Response(null, {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	return new Response(JSON.stringify({ teste: "teste" }), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
