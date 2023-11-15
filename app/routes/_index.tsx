import React, { useState } from "react";
import styles from "../styles/waitlist.module.css";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{
			name: "twitter:title",
			content: "[Wild League] - Waitlist",
		},
		{
			name: "twitter:card",
			content: "summary_large_image",
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
			<h1 className={styles.title}>Wild League</h1>
			<p>Gaming experience across the Fediverse.</p>

			<div>
				<p>Gaming isn't just about playing</p>
				<p>
					Gaming is about <span>community</span>{" "}
				</p>
			</div>

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
