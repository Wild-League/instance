import styles from "../styles/about.module.css";

export default function About() {
	return (
		<main className={styles.container}>
			<h1>What's Wild League?</h1>
			<p>
				It's an attempt to create a real time strategy game using cards on the{" "}
				<a
					target="_blank"
					href="https://fedi.tips/what-is-mastodon-what-is-the-fediverse/"
				>
					fediverse
				</a>
				.
			</p>
			<br />
			<p>
				The idea is to have a game that can be played in a few minutes, and at
				the same time be fun and challenging, that can be played for hours.
			</p>
			<br />
			<p>
				The fediverse will let the players create their own communities and
				cards, and give the ability to each community interact with each other.
			</p>
		</main>
	);
}
