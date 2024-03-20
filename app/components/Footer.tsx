import { Link } from "@remix-run/react";

export default function Footer() {
	return (
		<footer className="bg-top bg-footer bg-cover bg-no-repeat grid md:grid-cols-2 items-center justify-items-center p-4">
			<img
				className="p-10 pb-0 mt-10 md:w-96 md:h-96 object-contain"
				src="/alternative-logo.png"
				alt="Wild League logo"
			/>
			<div className="text-center text-white p-4">
				<h2 className="text-2xl font-extrabold mb-4">Stay updated!</h2>

				<Link to="mailto:contact@wildleague.org">contact@wildleague.org</Link>

				<div className="flex items-center gap-4 mt-4">
					<Link
						target="_blank"
						to="https://br.linkedin.com/company/wild-league?trk=public_post_feed-actor-name"
					>
						<img src="/linkedin.svg" alt="linkedin" />
					</Link>
					<Link target="_blank" to="https://github.com/wild-league">
						<img src="/github.svg" alt="github" />
					</Link>
					<Link target="_blank" to="https://twitter.com/_wildleague">
						<img src="/twitter.svg" alt="twitter/x" />
					</Link>

					<Link target="_blank" to="https://mastodon.social/@wildleague">
						<img src="/mastodon.svg" alt="mastodon" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
