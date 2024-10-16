import { useEffect, useRef } from "react";
import { useState } from "react";
import { SocketManager } from "../infrastructure/sockets";

interface ICounterHook {
	count: number;
	decrement: () => void;
	increment: () => void;
}

export function useCounterHook(): ICounterHook {
	const [count, setCount] = useState<number>(0);
	const socketManager = useRef<SocketManager | null>(null);

	useEffect(() => {
		if (socketManager.current) {
			socketManager.current.updateData({ count });
		}
	}, [count]);

	useEffect(() => {
		socketManager.current = new SocketManager({ count });

		return () => {
			socketManager.current?.close();
		};
	}, []);

	function decrement() {
		if (count === 0) {
			return;
		}

		setCount((count) => count - 1);
	}

	function increment() {
		setCount((count) => count + 1);
	}

	return { count, decrement, increment };
}
