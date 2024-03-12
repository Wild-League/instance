import { Link } from "@remix-run/react";

export default function Header() {
	return (
		<nav className="grid grid-cols-4 items-center bg-primary-blue font-primary text-white py-2 px-4">
			<Link className="justify-self-start" to={"/"}>
				<img className="w-64" src="/logo-text.png" alt="Logo" />
			</Link>

			<div className="justify-self-center space-x-4 col-span-2">
				<Link to={"/cards"}>Cards</Link>
				<Link to={"/about"}>About</Link>
				<Link className="pointer-events-none opacity-50" to={"/explore"}>
					Explore
				</Link>
				<Link className="pointer-events-none opacity-50" to={"/store"}>
					Store
				</Link>
				<Link className="pointer-events-none opacity-50" to={"/community"}>
					Community
				</Link>
			</div>

			<div className="justify-self-end space-x-2">
				<Link to={"/signup"}>Sign Up</Link>
				<Link className="bg-white py-1 px-2 text-black rounded" to={"/login"}>
					Login
				</Link>
			</div>
		</nav>
	);
}
