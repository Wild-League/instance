import { LoaderFunctionArgs } from "@remix-run/node";

// https://www.w3.org/TR/activitypub/#actor-objects
interface Actor {
	"@context": string[];
	type: "Person" | "Group";
	id: string;
	following: string;
	followers: string;
	// liked: string;
	inbox: string;
	outbox: string;
	preferredUsername: string;
	name: string;
	summary: string;
}

export async function loader({ params }: LoaderFunctionArgs) {
	const { user: username } = params;

	const data: Actor = await fetch(
		`https://api.wildleague.org/api/user/${username}/json`,
		{
			method: "GET",
		}
	).then((response) => response.json());

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
