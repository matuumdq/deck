import Blog from "./Blog";
import Contact from "./Contact";
import Focus from "./Focus";
import Hero from "./Hero";
import Services from "./Services";
import Strat from "./Strat";
import ToggleSwitch from "./ToggleSwitch";

// eslint-disable-next-line react/prop-types
const Home = ({ toggle, handleToggleChange }) => {
	return (
		<div className="font-roboto overflow-x-hidden">
			<Hero />
			<ToggleSwitch checked={toggle} onChange={handleToggleChange} />
			<Focus toggle={toggle} />
			<Services toggle={toggle} />
			<Strat toggle={toggle} />
			<Blog toggle={toggle} />
			<Contact toggle={toggle} />
		</div>
	);
};

export default Home;
