import { Injectable } from '@angular/core';

import { UtilityHelper } from '@framework/utilities';
import { LocalStorage } from '@framework/utilities/storage';
import { environment } from '@app/env/environment';



@Injectable()
export class NotificationSocket {
	// private url: string = `${environment.socketio.host}:${environment.socketio.port}`;

	constructor() {		
		// super(((env) => {
		// 	const socketio = env.socketio;
		// 	const url = `${socketio.nodejs.host}:${socketio.nodejs.port}/notification`;
		// 	let token = '';
		// 	var str = '; ' + document.cookie;
		// 	var parts = str.split('; ' + socketio.nodejs.tokenFromLocalKey + '=');
		// 	if (parts.length == 2) token = parts.pop().split(';').shift();
			
			
		// 	const options = {
		// 		path: socketio.nodejs.path,
		// 		reconnection: socketio.nodejs.reconnection,
		// 		reconnectionAttempts: socketio.nodejs.reconnectionAttempts,
		// 		reconnectionDelay: socketio.nodejs.reconnectionDelay,				
		// 		query: socketio.nodejs.query.replace('$token$', token)
		// 	};
		// 	return { url: url, options: options };
		// })(environment));

		// console.log(this);
	}	
}