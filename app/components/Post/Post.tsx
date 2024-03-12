import { Link, useNavigate } from "@remix-run/react";
import { type Post } from "../../routes/community._index";

export default function Post({ post }: { post: Post }) {
	const navigate = useNavigate();

	return (
		<div>
			<header>
				<Link to={post.username}>{post.username}</Link>
				<small>{post.display_name}</small>
			</header>
			<div onClick={() => navigate(`/${post.username}/${post.id}`)}>
				<p>{post.content}</p>
			</div>
			<footer>
				<time>{new Date(post.created_at).toLocaleDateString("pt-BR")}</time>
			</footer>
		</div>
	);
}
