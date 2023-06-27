const Focus = () => {
	return (
		<section id="enfoque" className="h-auto px-5 pt-24 pb-12 w-full">
			<div className="max-w-screen-xl mx-auto grid gap-4 md:gap-0">
				<h3 className="font-teko tracking-widest text-5xl uppercase justify-self-center md:justify-self-end">
					Nuestro Enfoque
				</h3>
				<div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-3">
					<p className="md:px-8">
						En{" "}
						<span className="text-teak-400 font-bold uppercase">
							{" "}
							Deck
						</span>
						, nos enfocamos en ofrecer soluciones de marketing
						digital personalizadas para empresas inmobiliarias.
						Nuestro objetivo es ayudarte a aumentar tu visibilidad
						en línea y fortalecer tu presencia digital en el
						competitivo mundo del real estate.
					</p>
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1686323570/descarga_bdlmeu.jpg"
						alt=""
						className="w-full max-h-44 md:max-h-full object-cover md:w-1/2"
					/>
				</div>
				<div className="md:bg-teak-400/50 flex flex-col md:flex-row-reverse justify-center items-center gap-3">
					<p className="md:px-8">
						A través de estrategias efectivas de publicidad en redes
						sociales y diseños de sitios web de última generación,
						nos aseguramos de que tu empresa destaque entre la
						multitud y llegue a tu audiencia objetivo de manera
						impactante.
					</p>
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1686323570/descarga_bdlmeu.jpg"
						alt=""
						className="w-full max-h-44 md:max-h-full object-cover md:w-1/2"
					/>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center gap-3">
					<p className="md:px-8">
						Además, nuestros expertos en diseño web se encargarán de
						crear un sitio web profesional y atractivo para tu
						empresa inmobiliaria. Tu sitio web será diseñado
						pensando en la experiencia del usuario y la optimización
						para los motores de búsqueda (SEO). Esto garantiza que
						tu empresa aparezca en los resultados de búsqueda y que
						tus clientes puedan encontrar fácilmente la información
						que están buscando.
					</p>
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1686323570/descarga_bdlmeu.jpg"
						alt=""
						className="w-full max-h-44 md:max-h-full object-cover md:w-1/2"
					/>
				</div>
			</div>
		</section>
	);
};

export default Focus;
