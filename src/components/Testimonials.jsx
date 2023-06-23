import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
const Testimonials = () => {
	const clientes = [
		{
			id: 0,
			name: "John Smith",
			work: "CEO de XYZ Realty",
			comment:
				"Trabajar con Deck ha sido una experiencia transformadora para nuestra empresa inmobiliaria. Sus estrategias de optimización SEO y gestión de redes sociales nos permitieron alcanzar una mayor audiencia y generar un mayor número de leads. Su equipo profesional y altamente capacitado nos guió en cada paso del proceso, brindándonos recomendaciones y soluciones personalizadas. Gracias a ellos, hemos logrado expandir nuestro negocio y establecer asociaciones clave en el mercado inmobiliario. Recomendaría sin dudarlo los servicios de Deck a cualquier empresa inmobiliaria que desee destacarse y crecer en el competitivo mundo actual",
			img: "https://th.bing.com/th/id/R.6dea4444cf3aa6e0ccc6182c06d4c874?rik=gbHXa74v%2fgMX6A&riu=http%3a%2f%2fatlantablackstar.com%2fwp-content%2fuploads%2f2014%2f09%2fceo-bob-johnson.png&ehk=pmAGFtu3Pj3KL1Ztc%2bWMUMJlszSMRrNxqAZ2BqMhiMI%3d&risl=&pid=ImgRaw&r=0",
		},
		{
			id: 1,
			name: "Laura Rodriguez",
			work: "Directora de Marketing de ABC Properties",
			comment:
				"Nuestra empresa inmobiliaria ha experimentado un crecimiento exponencial gracias a las estrategias de marketing inteligente de Deck. Su enfoque innovador y personalizado nos ayudó a aumentar nuestra visibilidad en línea y atraer a más clientes potenciales. Su equipo de expertos comprendió nuestras necesidades y objetivos, y nos brindaron soluciones efectivas. Estamos muy contentos con los resultados y seguimos trabajando con Deck para mantenernos a la vanguardia del mercado inmobiliario",
			img: "https://th.bing.com/th/id/OIP.tz4ZkFc6GrRD-jK0oP458AHaJ8?pid=ImgDet&rs=1",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? clientes.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === clientes.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<section className="">
			<div className="max-w-screen-lg h-full w-full mx-auto pt-16 pb-4 group">
				<div
					key={clientes[currentIndex].id}
					className="flex flex-col mx-4 my-6 shadow-[0px_0px_20px_5px_#00000024] rounded-lg"
				>
					<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12  relative bg-harvest-gold-400/80">
						<p className="relative py-2 text-lg text-black max-w-xl mx-auto">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								fill="currentColor"
								className="absolute md:-left-12 -top-6 w-8 h-8 text-harvest-gold-600"
							>
								<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
								<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
							</svg>
							{clientes[currentIndex].comment}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								fill="currentColor"
								className="absolute right-0 w-8 h-8 text-harvest-gold-600"
							>
								<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
								<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
							</svg>
						</p>
						<div className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
						{/* left */}
						<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-black ease-in duration-300 text-white cursor-pointer">
							<BsChevronCompactLeft
								onClick={prevSlide}
								size={30}
							/>
						</div>
						<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-black ease-in duration-300 text-white cursor-pointer">
							<BsChevronCompactRight
								onClick={nextSlide}
								size={30}
							/>
						</div>
					</div>
					<div className="relative flex flex-col items-center justify-center p-8 rounded-b-lg bg-harvest-gold-200 text-black">
						<img
							src={clientes[currentIndex].img}
							alt={clientes[currentIndex].name}
							className="w-16 h-16 mb-2 -mt-16 object-cover rounded-full"
						/>
						<p className="text-xl font-semibold leading-tight">
							{clientes[currentIndex].name}
						</p>
						<p className="text-sm uppercase italic font-light">
							{clientes[currentIndex].work}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
