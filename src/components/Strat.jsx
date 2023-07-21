import { Parallax } from "react-parallax";

const Strat = () => {
	const recorrido = [
		{
			id: 1,
			name: "Experiencia especializada",
			items: "Contamos con un equipo de expertos en marketing digital que comprenden a la perfección las necesidades específicas del mercado inmobiliario. Nuestra amplia experiencia en el sector nos permite diseñar estrategias personalizadas y efectivas que te ayudarán a alcanzar tus objetivos comerciales.",
		},
		{
			id: 2,
			name: "Generación de leads de calidad",
			items: "Sabemos que cada cliente potencial es valioso para tu negocio. Es por eso que nos enfocamos en la generación de leads de alta calidad y altamente segmentados, lo que se traduce en un mayor número de oportunidades de venta y alquiler de propiedades para ti.",
		},
		{
			id: 3,
			name: "Automatización inteligente",
			items: "Simplifica tus tareas y ahorra tiempo valioso con nuestras soluciones de automatización. Implementamos herramientas inteligentes que agilizan y optimizan tus procesos de adquisición de clientes, lo que te permite concentrarte en cerrar más negocios.",
		},
		{
			id: 4,
			name: "Estrategias multicanal",
			items: "Nuestro enfoque integral aprovecha diversas plataformas digitales para amplificar tu presencia en línea. Desde redes sociales hasta campañas de correo electrónico y anuncios segmentados, nos aseguramos de que tu mensaje llegue al público adecuado en el momento oportuno.",
		},
		{
			id: 5,
			name: "Rendimiento medible",
			items: "Creemos en los resultados tangibles. Con el análisis y seguimiento de datos en tiempo real, podrás ver claramente el impacto positivo de nuestras estrategias en el crecimiento de tu negocio inmobiliario.",
		},
		{
			id: 6,
			name: "Soporte personalizado",
			items: "Cada agente y agencia inmobiliaria es única, por lo que brindamos un servicio personalizado y adaptado a tus necesidades específicas. Nuestro equipo estará a tu disposición para brindarte asesoramiento y orientación en cada paso del camino.",
		},
	];
	return (
		<Parallax
			bgImage="https://th.bing.com/th/id/R.426b223c7a4442311bca8636772504bc?rik=%2b8AVZbh13rYH3w&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2017%2f06%2f4K-Skyscrapers-Wallpaper-For-PC.jpg&ehk=5%2flNDnyKUaD4QmE%2bGuO9KD%2burIUdicmzQuwaiKgq%2f18%3d&risl=&pid=ImgRaw&r=0"
			bgImageAlt=""
			bgImageStyle={{ objectFit: "cover" }}
			strength={800}
			className="image"
		>
			<div id="estrategia" className="bg-harvest-gold-200/30 py-24 px-4">
				{/* <h2
					data-aos="fade-right"
					className="text-white font-teko tracking-widest text-2xl md:text-4xl uppercase mx-auto max-w-screen-xl"
				>
					Recorre el camino hacia el éxito inmobiliario:
				</h2> */}
				<h2
					data-aos="fade-right"
					className="text-white font-teko tracking-widest text-3xl md:text-5xl uppercase mx-auto max-w-screen-xl"
				>
					¿Por qué elegirnos como tu aliado en el marketing digital
					inmobiliario?
				</h2>
				<div className="mt-6 text-sm grid sm:grid-cols-2 md:grid-cols-3 content-center gap-10 max-w-screen-xl mx-auto">
					{recorrido.map((strat) => (
						<div
							key={strat.id}
							data-aos="flip-right"
							className="w-full text-white flex flex-col justify-start gap-4 border p-6 rounded-lg bg-black/70 hover:bg-black/90 ease-in duration-300 cursor-pointer"
						>
							<h3 className="font-medium text-2xl">
								{strat.name}:
							</h3>
							<ul>
								<li className="text-lg md:text-base">
									• {strat.items}
								</li>
							</ul>
						</div>
					))}
				</div>
			</div>
		</Parallax>
	);
};

export default Strat;
