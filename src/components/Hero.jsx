// import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import VideoPlayer from "./VideoPlayer";
import { motion } from "framer-motion";
const Hero = () => {
	const [showMouse, setShowMouse] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY || window.pageYOffset;

			if (scrollY === 0) {
				setShowMouse(true);
			} else {
				setShowMouse(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			id="container"
			className="w-full h-[90vh] bg-black flex items-center  md:justify-start md:items-start"
		>
			<VideoPlayer />
			<div className="text-white z-10 flex flex-col items-center mx-auto text-xl md:text-6xl font-bold font-roboto tracking-wider md:ml-32 md:my-72">
				<p className="ml-4 uppercase">
					las claves del éxito inmobiliario:
				</p>
				<p className="uppercase ml-8 md:ml-20 text-java-400 text-2xl md:text-7xl py-2 ">
					nuestro marketing digital a
				</p>
				<p className="ml-4 uppercase">medida.</p>
				<div className="mt-5 ">
					<a
						href="#contacto"
						className="cursor-pointer hover:bg-white hover:text-black ease-in duration-300 text-lg uppercase border border-white w-fit px-5 py-2 mx-auto rounded-md"
					>
						Contactanos
					</a>
				</div>
			</div>
			{showMouse && (
				<div className="fixed left-0 right-0 bottom-4 animate-bounce flex justify-center items-center">
					<a href="#enfoque">
						{/* <BsMouse className="z-20 text-white text-2xl" /> */}
						<FaAngleDown className="z-20 text-teak-400 text-3xl " />
					</a>
				</div>
			)}
		</motion.div>
	);
};

export default Hero;
