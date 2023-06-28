import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import WebStrat from "./components/WebStrat";
import PublicidadStrat from "./components/PublicidadStrat";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
	Aos.init();
	const [toggle, setToggle] = useState(false);

	const handleToggleChange = () => {
		setToggle(!toggle);
	};
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route
						index
						element={
							<Home
								toggle={toggle}
								handleToggleChange={handleToggleChange}
							/>
						}
					/>
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
