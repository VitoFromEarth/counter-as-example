import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./counter/counter";

function App() {
	return (
		<>
			<div>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<div className="card">
				<Counter />
			</div>
		</>
	);
}

export default App;
