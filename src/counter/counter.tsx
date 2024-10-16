import { useCounterHook } from "./counter.hook";
import "./counter.css";

function Counter() {
	const { count, decrement, increment } = useCounterHook();
	return (
		<div className="container">
			<h2>Counter demo</h2>
			<p>
				Current count is: <b>{count}</b>
			</p>
			<div className="card action-row">
				<button className="decrement" onClick={decrement}>
					Decrease
				</button>
				<button className="increment" onClick={increment}>
					Increase
				</button>
			</div>
		</div>
	);
}

export default Counter;
