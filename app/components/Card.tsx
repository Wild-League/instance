interface Props {
	title: string;
	text: string;
	image: string;
}

export default function Card({ title, text, image }: Props) {
	return (
		<div className="border-2 border-[#001A72] rounded-lg p-4 min-w-32">
			<header className="flex items-center justify-start gap-4">
				<img src={image} alt="icon" />
				<h3 className="text-xl font-extrabold text-[#001A72]">{title}</h3>
			</header>
			<p className="mt-4 text[#736F6F]">{text}</p>
		</div>
	);
}
