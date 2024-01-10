import { type Post } from "../../routes/community._index";
import styles from "./Post.module.css";

export default function Post({ post }: { post: Post }) {
	return (
		<div className={styles.post}>
			<header>
				<strong className={styles.username}>username</strong>
				<small className={styles.displayName}>@username@wildleague.org</small>
			</header>
			<p>{post.content}</p>
			<footer>
				<time>created_at</time>
			</footer>
		</div>
	);
}
