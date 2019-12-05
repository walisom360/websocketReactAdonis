'use strict';

class ChatController {
	constructor({ socket, request }) {
		//equipara ao open
		this.socket = socket;
		this.request = request;
	}

	onMessage(data) {
		this.socket.broadcastToAll('message', data);

		console.log(data.text);
	}
}

module.exports = ChatController;
