import { LoaderFunctionArgs } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
	return params.post;
}

export default function Post() {
	const post = useLoaderData<typeof loader>();

	return (
		<div>
			<h1>specific post from user: {post}</h1>
		</div>
	);
}
