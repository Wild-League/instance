import { LoaderFunctionArgs, json } from "@remix-run/node";
import { CardType } from "./_index";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
	const { card: cardName } = params;

	const data = await fetch(
		`https://api.wildleague.org/v1/cards/?name=${cardName}`
	).then((response) => response.json());

	return json<CardType>(data[0]);
}

export default function Card() {
	const card = useLoaderData<typeof loader>();

	return (
		<main className="font-primary px-4">
			<div className="grid md:grid-cols-2 justify-items-center items-center gap-8 md:gap-0 py-6 md:py-24">
				<div className="relative">
					<img
						className="absolute -top-4 left-8 w-64 image-render-pixel"
						src={`/borders/border-${card.type}.png`}
						alt="card-border"
					/>

					<div
						style={
							{ "--image-url": `url(${card.img_card})` } as React.CSSProperties
						}
						className={`image-render-pixel p-2 w-80 h-80 bg-[image:var(--image-url)] bg-no-repeat bg-contain bg-center rounded-lg border-image:linear-gradient(to_top_right,#f6b73c,#4d9f0c)_30`}
					></div>
				</div>

				<section className="justify-self-start w-full">
					<h1 className="font-bold text-3xl mb-4">{card.name}</h1>

					<strong>Card Type: {card.type}</strong>

					<div className="mt-4 grid grid-cols-2 gap-4">
						<p>Attack Range: {card.attack_range}</p>
						<p>Cooldown: {card.cooldown}</p>
						<p>Damage: {card.damage}</p>
						<p>Life: {card.life ?? "N/A"}</p>
						<p>Movement Speed: {card.speed ?? "N/A"}</p>
					</div>
				</section>
			</div>
		</main>
	);
}
