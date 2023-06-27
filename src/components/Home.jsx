import Blog from "./Blog";
import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";
import Something from "./Something";
import Strat from "./Strat";
import TestimonialBeta from "./TestimonialBeta";
// import Testimonials from "./Testimonials";

const Home = () => {
	return (
		<div className="font-roboto ">
			<Hero />
			<Services />
			<Something />
			<Strat />
			{/* <Testimonials /> */}
			<TestimonialBeta />
			<Blog />
			<Contact />
		</div>
	);
};

export default Home;
