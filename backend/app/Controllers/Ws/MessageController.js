'use strict';

// class MessageController {
// 	constructor({ socket, request }) {
// 		this.socket = socket;
// 		this.request = request;

// 		console.log('A new subscription for room topic', socket.topic);
// 	}

// 	onMessage(message) {
// 		console.log({ passou: message });

// 		const data = [];
// 		data.push(message);
// 		console.log(data);
// 		this.socket.broadcastToAll('message', data);
// 	}
// }

//criar um canal e trabalhar com eventos

module.exports = MessageController;
