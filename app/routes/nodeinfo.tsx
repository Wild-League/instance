// http://nodeinfo.diaspora.software/schema.html - version 2.1
interface NodeInfo {
	software: {
		homepage: string;
		name: string;
		version: string;
		repository: string;
	};
	version: string;
	usage: {
		users: {
			total: number;
			activeHalfYear: number;
			activeMonth: number;
		};
		localComments: number;
		localPosts: number;
	};
	metadata: {
		nodeDescription: string;
		name: string;
	};
	protocol: string[];
	openRegistrations: boolean;
	services: {
		inbound: string[];
		outbound: string[];
	};
}

export async function loader() {
	const data: NodeInfo = await fetch(
		"https://api.wildleague.org/api/nodeinfo",
		{
			method: "GET",
		}
	).then((response) => response.json());

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
