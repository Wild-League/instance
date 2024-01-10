import React, { useState } from "react";
import styles from "../styles/waitlist.module.css";
import { MetaFunction } from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import Header from "../components/Header/Header";

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

	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (email === "") return;

		await fetch("https://api.wildleague.org/api/waitlist", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		});

		setEmail("");
	};

	return (
		<main className={styles.container}>
			<Header />
			<h1 className={styles.title}>Wild League</h1>
			<p>
				A <span> community </span> gaming experience.
			</p>

			<form className={styles.form} onSubmit={(e) => submit(e)}>
				<label htmlFor="email">Join the waitlist:</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					id="email"
					type="email"
					placeholder="email"
					value={email}
				/>
				<button type="submit"> Notify me when you launch </button>
			</form>
		</main>
	);
}
