import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";

import { SubmitHandler, useForm } from "react-hook-form";
import Post from "../components/Post/Post";
import { useState } from "react";

export interface Post {
	id: string;
	uri?: string;
	created_at: Date;
	edited_at?: Date;
	user_id: number;
	content: string;
	in_reply_to_post_id?: number;
	in_reply_to_user_id?: number;
	username: string;
	display_name: string;
}

interface PostForm {
	content: string;
}

type Page = "posts" | "cards";

export async function loader() {
	const posts: Post[] = await fetch(`http://localhost:9090/api/post`, {
		method: "GET",
	}).then((response) => response.json());

	const cards: any[] = await fetch(`http://localhost:9090/api/card`, {
		method: "GET",
	}).then((response) => response.json());

	return json({ cards, posts });
}

export default function Community() {
	const { cards, posts } = useLoaderData<typeof loader>();

	const { register, handleSubmit } = useForm<PostForm>();

	const [state, setState] = useState<Page>("posts");

	const submit: SubmitHandler<PostForm> = async (data) => {
		// await fetch(`http://localhost:9090/api/post`, {
		// 	method: "POST",
		// 	body: JSON.stringify({ content: data.content }),
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// });
		await fetch(`http://localhost:9090/api/post/federate`);
	};

	const handleTextHeight = (e: React.FormEvent<HTMLTextAreaElement>) => {
		e.currentTarget.style.height = "";
		e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
	};

	return (
		<main>
			<section>
				<Link to="/waitlist">
					<img src="/alternative-logo.png" alt="WildLeague Logo" />
				</Link>
				<nav>
					<button onClick={() => setState("posts")} type="button">
						Posts
					</button>
					<button onClick={() => setState("cards")} type="button">
						Cards
					</button>
				</nav>
			</section>
			<section>
				<Form onSubmit={handleSubmit(submit)}>
					<textarea
						{...register("content", { required: true })}
						placeholder="write something"
						onInput={handleTextHeight}
					></textarea>
					<button type="submit">Post</button>
				</Form>
				{state === "posts" ? (
					<div>
						{posts.length &&
							posts.map((post) => (
								// TODO: fix ts error
								<Post key={post.id} post={post} />
							))}
					</div>
				) : (
					<div>
						{cards.length &&
							cards.map((card) => (
								<p>{card.name}</p>
								// <Post key={post.id} post={post} />
							))}
					</div>
				)}
			</section>
			<section>
				<strong>Hello, $username</strong>
				<div>
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
