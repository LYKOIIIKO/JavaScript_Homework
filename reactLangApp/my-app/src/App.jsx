import * as styles from "./App.module.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import Library from "./components/Library/Library";
import { useState } from "react";

function App() {
	const [library, setLibrary] = useState(
		JSON.parse(localStorage.getItem("library")) || []
	);
	console.log(library);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route
					path="/library"
					element={
						<Library library={library} setLibrary={setLibrary} />
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
