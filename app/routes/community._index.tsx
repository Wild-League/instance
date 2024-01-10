import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";

import styles from "../styles/community.module.css";
import { useForm } from "react-hook-form";
import Post from "../components/Post/Post";

export interface Post {
	id: string;
	uri?: string;
	created_at: Date;
	edited_at?: Date;
	user_id: number;
	content: string;
	in_reply_to_post_id?: number;
	in_reply_to_user_id?: number;
}

export async function loader() {
	const posts: Post[] = await fetch(`http://localhost:9090/api/post`, {
		method: "GET",
	}).then((response) => response.json());

	return json({ posts });
}

export default function Community() {
	const { posts } = useLoaderData<typeof loader>();

	const { register } = useForm();

	const handleTextHeight = (e: React.FormEvent<HTMLTextAreaElement>) => {
		e.currentTarget.style.height = "";
		e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
	};

	return (
		<main className={styles.container}>
			<section className={styles.menu}>
				<Link to="/waitlist">
					<img
						className={styles.logo}
						src="/alternative-logo.png"
						alt="WildLeague Logo"
					/>
				</Link>
			</section>
			<section className={styles.posts}>
				<Form>
					<textarea
						{...register("post", { required: true })}
						className={styles.textbox}
						placeholder="write something"
						onInput={handleTextHeight}
					></textarea>
					<button className={styles.submit} type="submit">
						Post
					</button>
				</Form>
				<div className={styles.listpost}>
					{posts.map((post) => (
						// fix ts errors
						<Post key={post.id} post={post} />
					))}
				</div>
			</section>
			<section className={styles.profile}>
				<strong className={styles.username}>Hello, $username</strong>
				<div className={styles.profileMenu}>
					<a title="profile" href="#">
						<img src="/profile.svg" alt="profile icon" />
					</a>
					<a title="decks" href="#">
						<img src="/deck.svg" alt="deck icon" />
					</a>
					<a title="last matchs" href="#">
						<img src="/match.svg" alt="match icon" />
					</a>
				</div>
			</section>
		</main>
	);
}
