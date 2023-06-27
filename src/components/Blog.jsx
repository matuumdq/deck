const Blog = () => {
	const blogs = [
		{
			id: 1,
			img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1686323570/descarga_bdlmeu.jpg",
			title: "10 consejos para invertir en bienes raíces",
			description:
				"Descubre estrategias probadas para invertir de manera inteligente en el mercado inmobiliario y obtener beneficios significativos.",
			author: "John Doe",
			date: "20 de enero de 2023",
			tags: ["inversiones", "bienes raíces", "consejos"],
		},
		{
			id: 2,
			img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1686323570/descarga_bdlmeu.jpg",
			title: "El poder del marketing digital inmobiliario",
			description:
				"Explora cómo el marketing digital puede potenciar tu negocio inmobiliario y aumentar tu visibilidad en línea para atraer a más clientes.",
			author: "Jane Smith",
			date: "5 de febrero de 2023",
			tags: ["marketing", "inmobiliaria", "visibilidad"],
		},
		{
			id: 3,
			img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1686323570/descarga_bdlmeu.jpg",
			title: "Dominando la negociación inmobiliaria",
			description:
				"Aprende técnicas y enfoques efectivos para negociar con éxito en el sector inmobiliario y lograr acuerdos beneficiosos para todas las partes involucradas.",
			author: "Michael Johnson",
			date: "15 de marzo de 2023",
			tags: ["negociación", "inmobiliaria", "acuerdos"],
		},
	];
	return (
		<div id="blog" className="pt-24 px-4">
			<div className="max-w-screen-xl mx-auto">
				<h2 className="font-teko tracking-widest text-xl md:text-4xl uppercase mx-auto max-w-screen-xl">
					Explora lo Mejor del Mundo Inmobiliario:
				</h2>
				<h2 className="font-teko tracking-widest text-2xl md:text-5xl uppercase mx-auto max-w-screen-xl">
					Recomendaciones de Articulos esenciales
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
					{blogs.map((blog) => (
						<div
							key={blog.id}
							className="rounded-lg border border-harvest-gold-300 pb-4"
						>
							<img
								src={blog.img}
								alt={blog.title}
								className="object-cover w-full rounded-t-lg"
							/>
							<div className="flex flex-col gap-3 px-3">
								<h4 className="pt-4 text-lg uppercase font-bold">
									{blog.title}
								</h4>
								<div className="flex justify-between text-xs text-harvest-gold-300">
									<h6 className="">{blog.author}</h6>
									<p className="">{blog.date}</p>
								</div>
								<p className="text-sm">{blog.description}</p>
								<div className="flex items-center gap-2 mt-3">
									{blog.tags.map((tag, index) => (
										<p
											key={index}
											className="text-[8px] bg-harvest-gold-300 px-2 py-1 rounded-lg uppercase cursor-default text-gray-50"
										>
											{tag}
										</p>
									))}
								</div>
								<button className="uppercase font-bold text-sm tracking-widest border border-harvest-gold-200 hover:bg-harvest-gold-200 hover:text-white rounded-lg w-fit mx-auto px-10 py-2 mt-4 ease-in duration-300">
									Ir al post
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Blog;
