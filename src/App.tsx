import { useState } from 'react';
import './styles/index.css';

function App() {
	const [email, setEmail] = useState('');

	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await fetch('https://wildleague.org/api/waitlist', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email })
		});

		setEmail('');
	};

  return (
    <main>
			<h1>Wild League</h1>
			<p>Gaming experience across the Fediverse.</p>

			<div>
				<p>Gaming isn't just about playing</p>
				<p>Gaming is about <span>community</span> </p>
			</div>

			<form onSubmit={(e) => submit(e)}>
				<label htmlFor='email'>Join the waitlist:</label>
				<input onChange={(e) => setEmail(e.target.value)} id='email' type="email" placeholder='email' value={email} />
				<button type='submit'> Notify me when you launch </button>
			</form>
		</main>
  )
}

export default App;
