import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	return (
		<div className="bg-white/80 h-20 mx-auto flex md:gap-24 justify-between md:justify-start items-center p-6 sticky top-0 z-20 shadow-[0px_0px_20px_5px_#00000024]">
			{/* Left */}
			<Link to="/" className="flex items-center gap-6">
				<img
					src="https://res.cloudinary.com/dnqmez68n/image/upload/v1687903209/decklogosinrealstate_uuo1iz.png"
					alt="logo"
					className="h-20 w-auto"
				/>
			</Link>
			<div className="hidden text-harvest-gold-400 md:flex font-roboto uppercase text-sm items-center cursor-pointer font-medium gap-10 p-1">
				<a
					href="#enfoque"
					className="border-b-2 border-transparent hover:border-harvest-gold-400 ease-in duration-300"
				>
					Enfoque
				</a>
				<a
					href="#services"
					className="border-b-2 border-transparent hover:border-harvest-gold-400 ease-in duration-300"
				>
					Servicios
				</a>
				<a
					href="#estrategia"
					className="border-b-2 border-transparent hover:border-harvest-gold-400 ease-in duration-300"
				>
					Estrategia
				</a>
				<a
					href="#blog"
					className="border-b-2 border-transparent hover:border-harvest-gold-400 ease-in duration-300"
				>
					Blog
				</a>
				<a
					href="#contacto"
					className="border-b-2 border-transparent hover:border-harvest-gold-400 ease-in duration-300"
				>
					Contactanos
				</a>
			</div>
			<div
				className="cursor-pointer md:hidden"
				onClick={() => setNav(!nav)}
			>
				<AiOutlineMenu
					size={30}
					className="hover:scale-110 ease-in duration-300 text-teak-400"
				/>
			</div>

			{/* Mobile Menu */}
			{/* Overlay */}
			{nav ? (
				<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
			) : (
				""
			)}

			{/* Side menu */}
			<div
				className={
					nav
						? "fixed top-0 left-0 w-full sm:w-[300px] h-screen bg-gray-200 z-20 duration-300"
						: "fixed top-0 left-[-120%] w-[300px] h-screen bg-white z-10 duration-300"
				}
			>
				<AiOutlineClose
					size={30}
					className="absolute right-4 top-4 cursor-pointer hover:scale-110 hover:text-harvest-gold-400 ease-in duration-300"
					onClick={() => setNav(!nav)}
				/>
				<Link to="/" onClick={() => setNav(false)}>
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1687903209/decklogosinrealstate_uuo1iz.png"
						alt="logo"
						className="h-32 w-auto mx-auto mt-4"
					/>
				</Link>
				<nav>
					<ul className="my-32 flex flex-col px-4 py-8 gap-4 text-xl text-black">
						<a
							onClick={() => setNav(false)}
							href="#enfoque"
							className="border-b-2 pb-2 border-transparent hover:border-harvest-gold-400 hover:text-harvest-gold-400 ease-in duration-300"
						>
							Enfoque
						</a>
						<a
							onClick={() => setNav(false)}
							href="#services"
							className="border-b-2 pb-2 border-transparent hover:border-harvest-gold-400 hover:text-harvest-gold-400 ease-in duration-300"
						>
							Servicios
						</a>
						<a
							onClick={() => setNav(false)}
							href="#estrategia"
							className="border-b-2 pb-2 border-transparent hover:border-harvest-gold-400 hover:text-harvest-gold-400 ease-in duration-300"
						>
							Estrategia
						</a>
						<a
							onClick={() => setNav(false)}
							href="#blog"
							className="border-b-2 pb-2 border-transparent hover:border-harvest-gold-400 hover:text-harvest-gold-400 ease-in duration-300"
						>
							Blog
						</a>
						<a
							onClick={() => setNav(false)}
							href="#contacto"
							className="border-b-2 pb-2 border-transparent hover:border-harvest-gold-400 hover:text-harvest-gold-400 ease-in duration-300"
						>
							Contactanos
						</a>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
