import { Link } from "react-router-dom";
const Services = () => {
	const services = [
		{
			id: 1,
			name: "Publicidad en Redes Sociales",
			icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClElEQVR4nO2bQW7UMBRAvQa2g2AQXAKJS5AepCPaTSvarqkQ5Rwtt2AQ7XTVruiCUyBUhk1h8ZDpLwpRnGTyncT25EldjP3zEz977HGSGjMy8h/ABvAJ+Ek62LbMgcxUAbwlfQ6ret5yA7wGpiYRbFuAPWkbpSOB22Fv2SuUPwQ2G5xk08aagAH2pY0fyyqXUjktNP5KymcViWcSc9WFBOAcHYvcSLD8KDvJX3KfJ8CX21K+Ao8qLrAY+9izADWudv6jJPBylV4tjJYL4xHnRbc4dhQgNDE1aTqsV/m6+OjFXgS4JsG7uHx8D5PgMALKlsEyAV0vg4MKCIFBBBCQkFGA4EOeMxcNA+/KXfE+CXIEsO4ChqAXmYQt4EzZ/tOoBfhELYCaoaXB9EASAlj9/sDCm4AQ0MgNRgCKvcMq1xakAJS7xxQETDS30AYRgGchmltoowChjSznsdQEuj7XlZfFaW+hpSBg1mQSdK0UQQjoehmskpSEAM1KsRYCqlYKWlA81mgFUHMCDQ0EnPW+Hcbxua68DV0+bPEmoGu6etgSjYCuHrY0FpAqowDBaWZdGAUUwWUmMWpHgFljAUupS+b9wCLAE2njdVnlXCr3TaIAB1XvCWZSeSMvFE4T6/mD3JuiL12Bh6TPmzpbmR0iuTkhBZbSpvKe74rctvVVi2O3ilvZqACeSwO+Aw9aHH8P+CY5XpjYAD7Ixb9T5DiSHCcmwln3l/w99ZDnN/DMxALwXnru2EOuE8l1ZGIAuO/zu6udS3oH2JYL/uwx56nk3PKVs+//2BiChU8BS+Lj2qeAuSTdMYED7Do3PIqkmSS1S9KOvWdvAkOeI+zKkon3n73EtVGq3vAoJGQBb5SG2fCMmLj5AwxSPaRbSnN0AAAAAElFTkSuQmCC",
			url: "/strat/publicidad",
			data: "flip-down",
		},
		{
			id: 2,
			name: "Diseño Web",
			icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADV0lEQVR4nO2av2sUQRTHV3IBsVJBC6NlrlKwUEmwPLQ22CmclaX3R6Q26cSQWiFBjSkkouUtZxSLlIETf+CPzvP0Kg3IV0a/S56bmd05b3bd3ZsvDMzOzJuZ99k3yztugsDLy8vLy8sLwAkA9wEMUF0p39YA1HXO9zA+Ur4elwDuseMRgKmqngflNIAN+roqO6Kw36VSUTHalb7Kxt8Szx2LMAqDkirub6ABEFoAaAdVBVB12URApwqh7uoItBMmOgrgGYEdMYypcT5VarE+m2+N85fg5AgA2A9gU2zyJYADmnHXxJimbiM2Gs3lbADcptlbAO9Yv6V5+13hR1dGgc26hQQA4CyAnwB+ADjH8p1tZ8S4pnC8G4+CMgNYp8m8aJtn25rm7TdjMGqmdU3fBVfOuwLQp8lULM1U+sLnyGGdmgkAtDmIK+ddARjQ5JBoO8y2b3zeTgCwbbtuUQG8oMmcaLvMtk05J4AJMWZCrlVmAC2avAZwEsApAG/YdkPOaVLauvFvgW1ukReASQDPNX6pvGDSEYC/vgWxvqYpt8gFgBKAaY1f02lz2gIwzZOWW+QJoEGzKBSVGgZHO1E66wBAYm6RJ4AWzZZYlFoGAKl1mzzAJrfIE8BS5LSE4QCAMQ+IOTzBMnQUuALQpllDHIf2qACSNityC5lON2VukSeAnuZF9TIGkJpb5AlgRwNgxxUAXR6AFOUNoE+zgyxKfYcAwqID+ESzY+pHEesfXQFImyfRoZwAvKKZSojqrHfzAmDKLRKOUugawBbNTrMobWWcB4xylNquAXRodp5FqZNxHjA0AMPenQB4SrMLAC6y/mRUAEmbtZ3HEEXOj8A6zS6xKD00bDyMQtAhAO2coi8u50fgLs2uALjK+p20OV0BMI2x3LsTAMs0u86itFxqAOOmwAOg9hCpuIwRENj9aRmaMqwyAxjIKzIpFyTapgyrzFdkHrBxo8r3hOj8Y/q6IjvqY3ZN7vOe23D489/eqgoNVFfKt5XcrwICWOQGFizGLtiOLYUA7BMXKGYsxs9w7AdlG5RdAGbp0Hsbh2LAZoOyC7vhf3MIm+gYLAZlE+xvfv2Lip90IWMFRRcy2uh/B4BsQ7v4RwZ2F6iLplL9TvHy8vLyCnLWL0KYUUSypLQgAAAAAElFTkSuQmCC",
			url: "/strat/web",
			data: "flip-up",
		},
		// {
		// 	id: 3,
		// 	name: "Optimización SEO",
		// 	icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACWElEQVR4nO2bv27TUBSHzxS6MPcNingAhiIYKjFRhkrdEDDAE1SCgbIUhpJKLX0CGIGlMwMICSKGNE8AndvQoRsDmT7k6mcUOdeVZbux773+phznHh2fL/6re2PW0XEOcA84BCaEy0Q9rpqj+dhYmxYw0sbnQC8dMfV9ELF629Tn4bSA9LDvtWmHLyMGrij8a23cwSZiSzcAt4DbscTmEBAV5hBwBpwCu8AOMAZOgH4A8Z56O8sVYJHQCRCWayRwOgHCco0ETidAWK6R6oZ/MMsni0jAADcLFoOALHoASVi0SAX8Uokli1TAIfUw8FXA55oE/PFVwIFKrJfMv678n74KeKsSTzK3ykGRGFhR/jdfBeyrxEZezYti4IHC974K2FKJrZICninc81XAhkrslxTwRuFTXwU8Vol3JQV8VHjfVwHrKnGQeVz+XiROLn7KX/FVwB2V+FIy/0j513wVcIN6uOqrgKUamq/tdboJAYsqcWotoAkBC8T8MpQAfK1BwP+7hI8C+o6GXpcd56OAscrc1CRlwnHBcSchCPjtmKE9LjhuHIKAnYKngGtcPwQBPZ3f6YztdroixTEundkdK6fnvYA20QkQlmskcDoBwrJGYsM6AWLGSODkHgEWsYCJttX6wNFG8pbKjrRxM2QJesp84VosvUp83M3aSSQMI/jDxHCm+csCWFbhUYnc9LRcNl8BHpWd1AQ+KPeh+QrwSk28nGdua6DCr1jl6GkNVDiPq1w/5gruRZHzYtAGAY3SdP/W1I60TkBTNN2/XbAueB7UMlXWYRHzDyUAFaibymwyAAAAAElFTkSuQmCC",
		// },
		// {
		// 	id: 4,
		// 	name: "Gestión de redes sociales",
		// 	icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADX0lEQVR4nO2bz0sVURTH7+pRajv3mdXGpHIjGPYP9Be0yvoLAv+MVqZZREgZaRRYf0FBSeBCCyqkFq1qkQRBUGjU8xPXdx7dppm5P7zz3jjOB4R3551z7jnf+2Pue75RqqYmFRJkXU9hFTihIqNjSuxcbPl3QgDNJnA5YvEXgO84EE2AEIAe4LbR7zzQm7AZBqaBN8a113JtOGHbKzHa6Ng9quwAE8aIrUvRDWAGaOaMVlOEaIiP9kViTXS6CCeS9kZ7CHgrl38AazZfgzXxQWIM5fTjlWfHBNAAB4Crrr4p3E1ZQq6+qX11HFq793aAAHo5HFV7HVrrPnQGXOlm4r7J/mNn2K/bbHPCrdryco3ZTQG2fJM1+No1AWLhIkClAd7lDNi4qjrAdcKZVnsd4HTWbdBCM3k07lTCL4jDT2BAYt4M8J8V3yMSKwbLLgLEZMk4ET7z8HuqfcT3ccyEQgTYAqaAUfm0N+7Z587HYuAgcMuyHJqyZ7SLn8SfbzrXrLp8BfgInNzlLNk2vxsARoAbwHvgt0xv/XrW7EuK9907dLxzeXX5CLDZTgg4BtwLFKDNEnDYof8B4FFgH5MSox/4kGbgI8CUUfxn05lw9HJ6AJwHBmVJ9chrfe3hLja8Ocmtkbff+AgwKu2FpDPlQxfckNzm8gx9BOiT9obNOWBjjIme6v2um2aIAF9sR1fgULID1w49NrfcY7Pe/MQumgCj0l7MibcgNmMFCzBviTEqtz9iCjBt7MrmLGijN8ZBsblGcehRPS79mN8QZ3Emb4n6CLClz/HGcfS+FL0hs2LQuK/HOqpmjr4WAfhlM7bV5SOA5pMuMMd2RGxw7iC/v7wC7viMsK3tnBCt0Z2Rdd4nf2My7f8b+SIEkAJ3Rt8WpwgBSkVowcl2LUAW5CjlrKIHKYMcZY3vegYoz/dCyZritr4ruwRUQQUn27UAWeCqVKQ4pZ0Bar8L0C1qAYSiBckEV8NA+yx/W5yi3y+NAGlffABnY70fklClqAWoqcmHimMpX9UCUHFcZsAy1eW5VYCamviEzldVFagFCENVBfaTALSe81khPivJhydKCX//iVkEi6rMAJconouqjNB6NKb9oFOR6J/vnVJlA3hF53ipygat3/d2iifdrrdGVYQ/d3LR9D1pv3MAAAAASUVORK5CYII=",
		// },
	];

	return (
		<div
			data-aos="zoom-in-right"
			data-aos-easing="ease-out-cubic"
			data-aos-duration="2000"
			id="services"
			className="flex px-5 py-24 flex-col gap-1 w-full text-white bg-teak-500/60"
		>
			<div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 justify-items-center gap-8">
				<div className="sm:col-span-2 flex flex-col gap-4 justify-self-start">
					<h3 className="font-teko tracking-widest text-5xl uppercase">
						Nuestros servicios
					</h3>
					<p className="text-base font-roboto font-thin tracking-wider lg:pr-24">
						Nos enorgullece ofrecer soluciones estratégicas y
						efectivas que impulsarán el crecimiento de tu empresa de
						real estate. Ya sea que busques aumentar la visibilidad
						en línea, generar leads cualificados o establecer una
						sólida presencia en las redes sociales, estamos aquí
						para brindarte el conocimiento y la experiencia
						necesarios para alcanzar tus objetivos.
					</p>
				</div>
				{services.map((service, index) => (
					<a
						data-aos={service.data}
						data-aos-delay="300"
						key={index}
						href="#contacto"
						className="font-teko w-full flex gap-8 justify-between items-center font-thin tracking-wider text-2xl uppercase border p-6 rounded-lg bg-black/40 hover:bg-black ease-in duration-300"
					>
						<div className="flex flex-col gap-8">
							<p className="text-tundora-600 text-4xl">
								0{service.id}
							</p>
							<h2 className="md:text-5xl">{service.name}</h2>
							<Link to={service.url}>
								<button className="w-fit border uppercase px-5 py-2 rounded-md hover:bg-teak-400 hover:text-black  ease-in duration-300">
									ver estrategia
								</button>
							</Link>
						</div>
						<img
							src={service.icon}
							alt={service.name}
							className="w-auto h-20"
						/>
					</a>
				))}
			</div>
		</div>
	);
};

export default Services;
