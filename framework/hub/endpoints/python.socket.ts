import { Injectable } from '@angular/core';

import { UtilityHelper } from '@framework/utilities';
import { LocalStorage } from '@framework/utilities/storage';
import { environment } from '@app/env/environment';

// Document: https://www.npmjs.com/package/ngx-socket-io
// https://github.com/socketio/engine.io-client#methods

@Injectable()
export class PythonSocket {
	// private url: string = `${environment.socketio.host}:${environment.socketio.port}`;

	constructor() {		
		// super(((env) => {
		// 	const socketio = env.socketio;
		// 	const url = `${socketio.python.host}:${socketio.python.port}/chat`;
		// 	let token = '';
		// 	var str = '; ' + document.cookie;
		// 	var parts = str.split('; ' + socketio.python.tokenFromLocalKey + '=');
		// 	if (parts.length == 2) token = parts.pop().split(';').shift();
			
			
		// 	const options = {
		// 		path: socketio.python.path,
		// 		reconnection: socketio.python.reconnection,
		// 		reconnectionAttempts: socketio.python.reconnectionAttempts,
		// 		reconnectionDelay: socketio.python.reconnectionDelay,				
		// 		query: socketio.python.query.replace('$token$', token)
		// 	};
		// 	return { url: url, options: options };
		// })(environment));

		// console.log(this);
	}	
}