import { useEffect, useState } from "react";

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
	}
}

// TODO: how to serve different pages using nginx and react, react-router-dom?

function NodeInfo() {
	const [info, setInfo] = useState<NodeInfo>();

	useEffect(() => {
		fetch('https://wildleague.org/api/nodeinfo', {
			method: 'GET'
		})
		.then((response) => {
			response.json().then((data: NodeInfo) => {
				setInfo(data)
			})
		});
	}, []);

	return (
		<pre>
			{JSON.stringify(info)}
		</pre>
	)
}

export default NodeInfo;
