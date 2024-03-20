import { json } from "@remix-run/node";
import { CardType } from "./_index";
import { Link, useLoaderData } from "@remix-run/react";

export async function loader() {
	const data = await fetch("https://api.wildleague.org/v1/cards/?limit=3").then(
		(response) => response.json()
	);

	return json<CardType[]>(data);
}

export default function Cards() {
	const cards = useLoaderData<typeof loader>();

	return (
		<main className="font-primary p-4">
			<section className="mb-4">
				<h1 className="text-2xl font-bold">Choose your cards</h1>
				<p>
					Find the cards that match your playstyle and build a deck to rule them
					all!
				</p>
			</section>

			<div className="grid grid-cols-3 items-center justify-items-center gap-4">
				{cards.map((card) => (
					<Link to={`/cards/${card.name}`} key={card.id}>
						<img
							className="image-render-pixel w-56 object-contain rounded-lg"
							src={card.img_card}
							alt={card.name}
						/>
					</Link>
				))}
			</div>
		</main>
	);
}
