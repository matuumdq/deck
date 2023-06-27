import Blog from "./Blog";
import Contact from "./Contact";
import Focus from "./Focus";
import Hero from "./Hero";
import Services from "./Services";
// import Something from "./Something";
import Strat from "./Strat";

const Home = () => {
	return (
		<div className="font-roboto ">
			<Hero />
			<Focus />
			<Services />
			{/* <Something /> */}
			<Strat />
			{/* <Testimonials /> */}
			{/* <TestimonialBeta /> */}
			<Blog />
			<Contact />
		</div>
	);
};

export default Home;
