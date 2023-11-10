interface NodeinfoReference {
	links: { rel: string; href: string }[];
}

export async function loader() {
	const data: NodeinfoReference = {
		links: [
			{
				rel: "http://nodeinfo.diaspora.software/ns/schema/2.1",
				href: "https://wildleague.org/nodeinfo",
			},
		],
	};

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
