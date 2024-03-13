import React, { useState } from "react";
import { MetaFunction, json } from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import Header from "../components/Header";

import { useLoaderData } from "@remix-run/react";
import Footer from "../components/Footer";

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

			<section className="text-white grid grid-cols-4 items-center justify-items-center bg-[#001a72] bg-cover bg-no-repeat bg-home bg-center h-[70dvh] p-4">
				<form onSubmit={submit} className="col-span-2">
					<legend className="text-4xl font-extrabold mb-4">
						Gaming isn't just about playing, <br /> it's about community.
					</legend>

					<label>
						Join the waitlist to keep up to date with the latest news.
						<input
							className="block my-2 w-full text-black bg-white placeholder:p-1 rounded p-1"
							onChange={(e) => setEmail(e.target.value)}
							placeholder="use your better email :D"
							type="email"
						/>
					</label>

					<button
						className="cursor-pointer w-full bg-white py-1 px-2 rounded block text-black"
						type="submit"
					>
						Join
					</button>
				</form>

				<div>
					<img src="/image.png" alt="game image" />
				</div>
			</section>

			<section className="text-center p-4">
				<h1 className="text-xl font-bold">Build your deck!</h1>

				<div className="grid grid-cols-3 items-center justify-items-center gap-4 p-6">
					{deck.cards.map((card) => (
						<img
							key={card.name}
							src={card.img_card}
							alt={card.name}
							loading="eager"
						/>
					))}
				</div>
			</section>

			<section className="p-4">
				<h1>aiuhdiausdhs</h1>

				<div className="grid grid-cols-2 items-center">
					<img src="/worlds.png" alt="worlds" />

					<section>
						<h2>aiudhaiwuh</h2>
						<p>
							Wild League is more than a game, it's a decentralized game that
							allow player to create worlds (servers) independently, each server
							can have its own rules and cards!
						</p>

						<p>
							Players can move between servers freely, either to discover new
							cards or to play against other players.
						</p>
					</section>
				</div>
			</section>

			<section className="p-4">
				<div className="grid grid-cols-2 items-center justify-items-center">
					{/* create component for this form */}
					<form onSubmit={submit}>
						<legend className="text-4xl font-extrabold mb-4">
							Gaming isn't just about playing, <br /> it's about community.
						</legend>

						<label>
							Join the waitlist to keep up to date with the latest news.
							<input
								className="block my-2 w-full text-black bg-white placeholder:p-1 rounded p-1"
								onChange={(e) => setEmail(e.target.value)}
								placeholder="use your better email :D"
								type="email"
							/>
						</label>

						<button
							className="cursor-pointer w-full bg-white py-1 px-2 rounded block text-black"
							type="submit"
						>
							Join
						</button>
					</form>

					{/* cards */}
					<div className="grid grid-cols-2">
						<div className="border">
							<header>Card Types</header>
							<p>Talk about card types here.</p>
						</div>
						<div className="border">
							<header>Creations</header>
							<p>How to create a card, how to create a world, etc</p>
						</div>
						<div className="border">
							<header>Trophies</header>
							<p>how to progress in the game</p>
						</div>
						<div className="border">
							<header>Community</header>
							<p>How interactions in community will happen</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
