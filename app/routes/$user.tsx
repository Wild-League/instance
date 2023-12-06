import { LoaderFunctionArgs } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
	return params.user;
}

// TODO: need to handle `@` - https://github.com/remix-run/remix/issues/846

export default function User() {
	const user = useLoaderData<typeof loader>();

	return (
		<div>
			<h1>user profile: {user}</h1>
		</div>
	);
}
