// eslint-disable-next-line react/prop-types
const Focus = ({ toggle }) => {
	let content;
	if (toggle) {
		content = (
			<>
				<div
					data-aos="fade-left"
					className="mt-8 flex flex-col md:flex-row justify-center items-center gap-3"
				>
					<p className="md:px-8">
						At{" "}
						<span className="text-teak-400 font-bold uppercase">
							{" "}
							Deck
						</span>
						, we focus on providing customized digital marketing
						solutions for real estate companies. Our goal is to help
						you increase your online visibility and strengthen your
						digital presence in the competitive world of real
						estate.
					</p>
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1686323570/descarga_bdlmeu.jpg"
						alt=""
						className="w-full max-h-44 md:max-h-full object-cover md:w-1/2"
					/>
				</div>
				<div
					data-aos="fade-right"
					className="md:bg-teak-400/50 flex flex-col md:flex-row-reverse justify-center items-center gap-3"
				>
					<p className="md:px-8">
						Through effective social media advertising strategies
						and cutting-edge website designs, we ensure that your
						company stands out from the crowd and reaches your
						target audience in an impactful way.
					</p>
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1686323570/descarga_bdlmeu.jpg"
						alt=""
						className="w-full max-h-44 md:max-h-full object-cover md:w-1/2"
					/>
				</div>
				<div
					data-aos="fade-left"
					className="flex flex-col md:flex-row justify-center items-center gap-3"
				>
					<p className="md:px-8">
						In addition, our web design experts will create a
						professional and attractive website for your real estate
						company. Your website will be designed with a focus on
						user experience and search engine optimization (SEO).
						This ensures that your company appears in search results
						and that your customers can easily find the information
						they are looking for.
					</p>
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1686323570/descarga_bdlmeu.jpg"
						alt=""
						className="w-full max-h-44 md:max-h-full object-cover md:w-1/2"
					/>
				</div>
			</>
		);
	} else {
		content = (
			<>
				<div
					data-aos="fade-left"
					className="mt-8 flex flex-col md:flex-row justify-center items-center gap-3"
				>
					<p className="md:px-8">
						En{" "}
						<span className="text-teak-400 font-bold uppercase">
							{" "}
							Deck
						</span>
						, nuestro enfoque es claro y determinante: queremos
						impulsar tu éxito en el mercado inmobiliario. Sabemos lo
						crucial que es para tu negocio obtener resultados
						excepcionales y alcanzar tus metas comerciales de manera
						consistente. Es por eso que hemos diseñado una
						estrategia única y especializada que se centra en
						aumentar y automatizar la adquisición de clientes, tanto
						para la renta como para la venta de propiedades.
					</p>
					<img
						src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
						className="w-full max-h-44 md:max-h-full object-cover md:w-1/2"
					/>
				</div>
				<div
					data-aos="fade-right"
					className="md:bg-teak-400/50 flex flex-col md:flex-row-reverse justify-center items-center gap-3"
				>
					<p className="md:px-8">
						No se trata solo de conseguir más leads, sino de atraer
						a los clientes potenciales adecuados para tu negocio.
						Nuestra experiencia en marketing digital nos permite
						identificar y alcanzar a tu audiencia objetivo de manera
						precisa. Gracias a técnicas avanzadas de segmentación,
						generamos leads altamente cualificados que tienen un
						genuino interés en tus propiedades y servicios.
					</p>
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1686323570/descarga_bdlmeu.jpg"
						alt=""
						className="w-full max-h-44 md:max-h-full object-cover md:w-1/2"
					/>
				</div>
				<div
					data-aos="fade-left"
					className="flex flex-col md:flex-row justify-center items-center gap-3"
				>
					<p className="md:px-8">
						Entendemos que tu tiempo es valioso y que necesitas
						centrarte en cerrar tratos y hacer crecer tu negocio.
						Por ello, implementamos soluciones de automatización
						inteligente que simplifican tus tareas diarias y
						optimizan tus procesos de adquisición de clientes. Esto
						te permitirá aumentar tu productividad y enfocarte en lo
						que realmente importa: tus clientes y tu éxito.
					</p>
					<img
						src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
						className="w-full max-h-44 md:max-h-full object-cover md:w-1/2"
					/>
				</div>
				<div
					data-aos="fade-right"
					className="md:bg-teak-400/50 flex flex-col md:flex-row-reverse justify-center items-center gap-3"
				>
					<p className="md:px-8">
						En{" "}
						<span className="text-teak-400 md:text-white font-bold uppercase">
							{" "}
							Deck
						</span>
						, no solo ofrecemos promesas, sino resultados tangibles.
						Estamos dedicados a ayudarte a alcanzar un éxito
						sostenible en el mercado inmobiliario, proporcionándote
						las herramientas y el apoyo necesarios para destacar y
						prosperar en un mundo digital en constante evolución.
					</p>
					<img
						src="https://img.freepik.com/foto-gratis/inmobiliaria-alojamiento-propiedad-inversion-palabra-grafica_53876-138587.jpg?w=1060&t=st=1689983251~exp=1689983851~hmac=3a7a9fc0560a5829e054989b9cdaa278db16cfe2781c1599b4bd795ea1cdfb86"
						alt=""
						className="w-full max-h-44 md:max-h-full object-cover md:w-1/2"
					/>
				</div>
			</>
		);
	}
	return (
		<div
			data-aos="fade-right"
			id="enfoque"
			className="h-auto px-5 pt-24 pb-12 w-full"
		>
			<div className="max-w-screen-xl mx-auto grid gap-4 md:gap-0">
				<h3 className="font-teko tracking-widest text-5xl uppercase justify-self-center md:justify-self-end">
					{toggle ? "Our focus" : "Nuestro Enfoque"}
				</h3>
				{content}
			</div>
		</div>
	);
};

export default Focus;
