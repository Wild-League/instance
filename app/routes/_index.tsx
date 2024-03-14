import React, { useState } from "react";
import { Link, MetaFunction, json } from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import Header from "../components/Header";

import { useLoaderData } from "@remix-run/react";
import Footer from "../components/Footer";
import Card from "../components/Card";

interface Deck {
	id: number;
	name: string;
	cards: Card[];
}

interface Card {
	id: number;
	name: string;
	type: string;
	cooldown: string;
	damage: string;
	attack_range: string;
	speed: string;
	life: number;
	img_card: string;
	img_preview: string;
	img_attack: string;
	img_death: string;
	img_walk: string;
}

export async function loader() {
	const data = await fetch("https://api.wildleague.org/v1/decks/1/").then(
		(response) => response.json()
	);

	return json<Deck>(data);
}

export const links: LinksFunction = () => {
	return [
		{
			rel: "icon",
			href: "/favicon.ico",
			type: "image/png",
		},
	];
};

export const meta: MetaFunction = () => {
	return [
		{
			name: "og:title",
			content: "[Wild League] - Waitlist",
		},
		{
			name: "og:description",
			content:
				"Join the waitlist for Wild League and keep up to date with the latest news.",
		},
		{
			name: "og:image",
			content: "/logo.png",
		},
		{
			name: "twitter:title",
			content: "[Wild League] - Waitlist",
		},
		{
			name: "twitter:card",
			content: "summary",
		},
		{
			name: "twitter:site",
			content: "@_wildleague",
		},
		{
			name: "twitter:creator",
			content: "@ropoko_",
		},
		{
			name: "twitter:description",
			content:
				"Join the waitlist for Wild League and keep up to date with the latest news.",
		},
		{
			name: "twitter:image",
			content: "/logo.png",
		},
	];
};

export default function Home() {
	const [email, setEmail] = useState("");

	const deck = useLoaderData<typeof loader>();

	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (email === "") return;

		await fetch("https://api.wildleague.org/v1/waitlist/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		});

		setEmail("");
	};

	return (
		<main className="font-primary h-[100dvh]">
			<Header />

			<section className="text-white h-auto overflow-x-hidden grid grid-cols-5 gap-4 items-center justify-items-center bg-[#001a72] bg-cover bg-no-repeat bg-home bg-center h-[70dvh] p-4">
				<form onSubmit={submit} className="col-span-3">
					<legend className="text-4xl font-extrabold mb-4">
						Gaming isn't just about playing, <br /> it's about community.
					</legend>

					<label>
						Join the waitlist to keep up to date with the latest news.
						<input
							className="block my-2 w-full text-black bg-white rounded p-2"
							onChange={(e) => setEmail(e.target.value)}
							placeholder="use your better email :D"
							type="email"
						/>
					</label>

					<button
						className="cursor-pointer w-full bg-white p-2 font-bold rounded block text-black"
						type="submit"
					>
						Join
					</button>
				</form>

				<div className="m-auto col-span-2 w-[850px]">
					<img
						className="image-render-pixel w-full rounded-lg"
						src="/game-preview.png"
						alt="game image"
					/>
				</div>
			</section>

			<section className="text-center p-4">
				<h1 className="text-3xl font-extrabold">Build your deck!</h1>

				<div className="grid grid-cols-3 items-center justify-items-center gap-4 p-6">
					{deck.cards.map((card) => (
						<img
							className="image-render-pixel rounded-lg w-48"
							key={card.name}
							src={card.img_card}
							alt={card.name}
							loading="eager"
						/>
					))}
				</div>

				<Link
					className="inline-block w-64 p-2 border border-[#001a72] rounded-lg hover:bg-[#001a72] transition hover:text-white delay-100"
					to="/cards"
				>
					See More
				</Link>
			</section>

			<section className="p-6 text-center text-white bg-[#001a72]">
				<div className="grid grid-cols-2 items-center">
					<img
						className="min-w-[400px] w-[500px] max-w-[600px] p-12"
						src="/worlds.png"
						alt="worlds"
					/>

					<section className="p-10">
						<h2 className="text-2xl font-extrabold mb-4">
							Play across servers!
						</h2>
						<p className="text-justify">
							Wild League is more than a game, it's a decentralized game that
							allow players to create worlds (servers) independently, each
							server can have its own rules and cards!
						</p>
					</section>
				</div>
			</section>

			<section className="px-6 py-8">
				<div className="grid grid-cols-4 gap-4 items-center justify-items-center">
					<form className="p-14 col-span-2" onSubmit={submit}>
						<legend className="text-3xl font-extrabold mb-4">
							Join the waitlist!
						</legend>

						<label>
							Wild League is a fast-paced strategy game that allows players to
							build their own decks and battle in real-time. <br /> Help your
							community building cards and assets to lead your server to
							victory.
							<input
								className="block my-2 w-full text-black bg-white rounded p-2"
								onChange={(e) => setEmail(e.target.value)}
								placeholder="use your better email :D"
								type="email"
							/>
						</label>

						<button
							className="cursor-pointer w-full p-2 rounded block text-white bg-[#001a72]"
							type="submit"
						>
							Join
						</button>
					</form>

					<div className="col-span-2 grid grid-cols-2 gap-2">
						<Card
							image="/sword.svg"
							title="Gameplay"
							text="Focus on quick matches, so you can play anytime. Designed for casual players that would like to spend some time having some fun."
						/>
						<Card
							image="/card-types.svg"
							title="Card Types"
							text="We currently have two types of cards, Characters and Spells. Characters are the ones that will fight for you, and Spells are the ones that will help you in the battle."
						/>
						<Card
							image="/creations.svg"
							title="Creations"
							text="You can create your own cards and assets, and submit them to the community for approval. If approved, your card will be available for everyone to use."
						/>
						<Card
							image="/community.svg"
							title="Community"
							text="The game require community involvement, either creating a card or voting to approve someonelse's card. We are all in this together."
						/>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
