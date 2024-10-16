const WS_CONNECTION = "ws://localhost:3000";

export class SocketManager {
	public socket: WebSocket | null = null;
	private dataToSend: Record<string, any>;

	constructor(dataToSend: Record<string, any>) {
		this.dataToSend = dataToSend;
		this.socket = new WebSocket(WS_CONNECTION);
		this.socket.onmessage = this.onMessage;
	}

	public updateData = (newData: Record<string, any>) => {
		this.dataToSend = newData;
	};

	private onMessage = (message: MessageEvent) => {
		if (message.data === "sendCounterValue") {
			this.socket?.send(JSON.stringify(this.dataToSend));
		}
	};

	public close = () => {
		this.socket?.close();
	};
}
