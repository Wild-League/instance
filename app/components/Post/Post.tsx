import { Link, useNavigate } from "@remix-run/react";
import { type Post } from "../../routes/community._index";
import styles from "./Post.module.css";

export default function Post({ post }: { post: Post }) {
	const navigate = useNavigate();

	return (
		<div className={styles.post}>
			<header>
				<Link to={post.username} className={styles.username}>
					{post.username}
				</Link>
				<small className={styles.displayName}>{post.display_name}</small>
			</header>
			<div
				onClick={() => navigate(`/${post.username}/${post.id}`)}
				className={styles.content}
			>
				<p>{post.content}</p>
			</div>
			<footer>
				<time>{new Date(post.created_at).toLocaleDateString("pt-BR")}</time>
			</footer>
		</div>
	);
}
