import Blog from "./Blog";
import Clients from "./Clients";
import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";
import Strat from "./Strat";
import Testimonials from "./Testimonials";

const Home = () => {
	return (
		<div className="font-roboto ">
			<Hero />
			<Clients />
			<Services />
			<Strat />
			<Testimonials />
			<Blog />
			<Contact />
		</div>
	);
};

export default Home;
