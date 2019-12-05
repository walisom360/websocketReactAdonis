import React, { useState, useEffect } from 'react';

import './styles.css';

import ws from '../../services/websocket';

export default function Chat() {
	const [ status, setStatus ] = useState('');
	const [ name, setName ] = useState('');
	const [ digited, setDigited ] = useState(true);

	const [ texto, setTexto ] = useState('');
	const [ array, setArray ] = useState([ { name: '', text: '' } ]);

	const chat = ws.getSubscription('chat') || ws.subscribe('chat');

	// const get = ws.getSubscription('message') || ws.subscribe('message');
	useEffect(() => {
		ws.on('open', () => {
			setStatus('online');
		});

		ws.on('error', () => {
			setStatus('');
		});

		ws.on('close', () => {
			setStatus('');
		});
	}, []);

	function onSubmit(e) {
		e.preventDefault();

		//console.log('aee');
		//const url = new URLSearchParams(window.location.search);

		chat.emit('message', { text: texto, name });
		setTexto('');
		setDigited(false);
	}

	chat.on('message', (data) => {
		setArray([ ...array, { name: data.name, text: data.text } ]);
	});

	return (
		<div id="content">
			<header>
				<div id="status" className={status} />
			</header>

			<section>
				<ul>
					{array.map((users) => (
						<li>
							<b>{users.name}</b>
							{users.text}
						</li>
					))}
				</ul>
			</section>

			{digited && <input placeholder="digite seu nome" onChange={(e) => setName(e.target.value)} />}
			<footer>
				<textarea
					placeholder="Digite seu texto aqui"
					name=""
					id=""
					cols="30"
					rows="10"
					value={texto}
					onChange={(e) => setTexto(e.target.value)}
				/>
				<button onClick={onSubmit}>Enviar</button>
			</footer>
		</div>
	);
}
