export async function loader() {
	return new Response(JSON.stringify({ teste: "teste" }), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
