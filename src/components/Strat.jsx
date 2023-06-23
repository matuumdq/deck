const Strat = () => {
	const recorrido = [
		{
			id: 1,
			name: "Análisis de mercado",
			items: [
				"Investigación de mercado",
				"Estudio de tendencias",
				"Evaluación competitiva",
			],
		},
		{
			id: 2,
			name: "Estrategia de marketing personalizada",
			items: [
				"Posicionamiento efectivo",
				"Promoción estratégica",
				"Campañas impactantes",
			],
		},
		{
			id: 3,
			name: "Generación de leads y prospección",
			items: [
				"Captación de clientes",
				"Identificación de oportunidades",
				"Networking estratégico",
			],
		},
		{
			id: 4,
			name: "Presentación y negociación",
			items: [
				"Impacto persuasivo",
				"Negociación efectiva",
				"Propuestas convincentes",
			],
		},
		{
			id: 5,
			name: "Cierre de transacciones y seguimiento",
			items: [
				"Proceso sin problemas",
				"Gestión de cierre",
				"Seguimiento personalizado",
			],
		},
		{
			id: 6,
			name: "Asesoramiento continuo",
			items: [
				"Soporte especializado",
				"Orientación estratégica",
				"Consultoría personalizada",
			],
		},
	];
	return (
		<div id="estrategia" className="bg-harvest-gold-200/70 py-24 px-4">
			<h2 className="font-teko tracking-widest text-2xl md:text-5xl uppercase mx-auto max-w-screen-xl">
				Recorre el camino hacia el éxito inmobiliario:
			</h2>
			<h2 className="font-teko pl-6 tracking-widest text-2xl md:text-5xl uppercase mx-auto max-w-screen-xl">
				Nuestro Proceso Transformador
			</h2>
			<div className="mt-6 text-sm grid sm:grid-cols-2 md:grid-cols-3 content-center gap-10 max-w-screen-xl mx-auto">
				{recorrido.map((strat) => (
					<div
						key={strat.id}
						className="w-full text-white flex flex-col justify-between gap-2 border p-6 rounded-lg bg-black/40 hover:bg-black ease-in duration-300 cursor-pointer"
					>
						<h3 className="font-medium text-2xl">{strat.name}:</h3>
						<ul>
							{strat.items.map((item, index) => (
								<li key={index}>- {item}.</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default Strat;
