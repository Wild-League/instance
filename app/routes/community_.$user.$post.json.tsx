import { LoaderFunctionArgs } from "@remix-run/node";

// https://www.w3.org/TR/activitystreams-vocabulary/#dfn-note
// TODO: create interface for note
// interface Note {}

export async function loader({ params }: LoaderFunctionArgs) {
	const { post: postId } = params;

	const data = await fetch(
		`https://api.wildleague.org/api/post/${postId}/json`,
		{
			method: "GET",
		}
	).then((response) => response.json());

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
