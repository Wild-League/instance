import { LoaderFunctionArgs } from "@remix-run/node";

interface Webfinger {
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

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
