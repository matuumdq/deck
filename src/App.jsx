import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import WebStrat from "./components/WebStrat";
import PublicidadStrat from "./components/PublicidadStrat";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="/strat/web" element={<WebStrat />} />
					<Route
						path="/strat/publicidad"
						element={<PublicidadStrat />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
