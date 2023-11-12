import { LoaderFunctionArgs } from "@remix-run/node";

interface Webfinger {
	status: number;
	subject: string;
	aliases: string[];
	links: {
		rel: string;
		type: string;
		href: string;
	}[];
}

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

	const username = /(?<=:)(.*?)(?=@)/.exec(resourceParam ?? "")?.[0];

	const data: Webfinger = await fetch(
		`https://api.wildleague.org/api/webfinger?username=${username}`,
		{
			method: "GET",
		}
	).then((response) => response.json());

	const response = Object.keys(data).length === 0 ? null : JSON.stringify(data);

	return new Response(response, {
		status: response === null ? 404 : 200,
		headers: { "Content-Type": "application/json" },
	});
}
