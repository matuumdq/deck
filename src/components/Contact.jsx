import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import { Toaster, toast } from "sonner";
const Contact = () => {
	const form = useRef();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [messages, setMessages] = useState("");
	const sendEmail = (e) => {
		e.preventDefault();

		if (name === "" || email === "" || messages === "") {
			toast.error("Todos los campos son obligatorios");
			return;
		}

		emailjs
			.send(
				import.meta.env.VITE_SERVICE,
				import.meta.env.VITE_TEMPLATE,
				{
					from_name: name,
					from_email: email,
					message: messages,
				},
				import.meta.env.VITE_USER_API
			)
			.then(
				() => {
					toast.success("Email enviado satisfactoriamente");
					e.target.reset();
					setName("");
					setEmail("");
					setMessages("");
				},
				(error) => {
					toast.error(error.text);
				}
			);
	};
	return (
		<section
			id="contacto"
			data-aos="zoom-in"
			className="bg-white py-10 my-20 lg:my-32 overflow-hidden relative z-10"
		>
			<div className="container max-w-screen-xl mx-auto">
				<div className="flex flex-wrap lg:justify-between -mx-4">
					<div className="w-full lg:w-1/2 xl:w-6/12 px-4">
						<div className="max-w-[570px] mx-5 mb-12 lg:mb-0">
							<span className="block mb-4 text-sm text-harvest-gold-300 tracking-widest font-semibold">
								Contactanos
							</span>
							<h2 className="text-dark mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
								aclara tus dudas
							</h2>
							<p className="text-base text-body-color leading-relaxed mb-9">
								Nuestro equipo esta atento para resolver
								cualquier duda e inquietud que puedas tener al
								momento de elegir como de hacer tu compra, te
								esperamos!
							</p>
							<div className="flex gap-5 w-full justify-center items-center">
								<BsWhatsapp
									size={30}
									className="text-gray-600 hover:text-green-500 hover:scale-105 hover:cursor-pointer ease-in duration-300"
								/>
								<BsInstagram
									size={30}
									className="text-gray-600 hover:text-pink-600 hover:scale-105 hover:cursor-pointer ease-in duration-300"
								/>
								<BsFacebook
									size={30}
									className="text-gray-600 hover:text-blue-700 hover:scale-105 hover:cursor-pointer ease-in duration-300"
								/>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/2 xl:w-5/12 px-4">
						<div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
							<form ref={form} onSubmit={sendEmail}>
								<div className="mb-6">
									<input
										type="text"
										placeholder="Ingrese su Nombre"
										onChange={(e) =>
											setName(e.target.value)
										}
										name="user_name"
										id="user_name"
										className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
									/>
									<label htmlFor="user_name" />
								</div>
								<div className="mb-6">
									<input
										type="email"
										onChange={(e) =>
											setEmail(e.target.value)
										}
										name="user_email"
										id="user_email"
										placeholder="Ingrese su Email"
										className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
									/>
									<label htmlFor="user_email" />
								</div>
								<div className="mb-6">
									<textarea
										rows="6"
										onChange={(e) =>
											setMessages(e.target.value)
										}
										name="message"
										id="message"
										placeholder="Escribe su Mensaje"
										className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary"
									></textarea>
								</div>
								<div>
									<button
										type="submit"
										className="w-full uppercase hover:scale-105 ease-out duration-300 font-bold text-black bg-primary rounded border border-primary p-3 transition hover:bg-opacity-90"
									>
										Enviar
									</button>
								</div>
							</form>
							<Toaster richColors />
							<div>
								<span className="absolute -right-6 -top-6 z-[-1]">
									<svg
										width="107"
										height="134"
										viewBox="0 0 107 134"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="104.999"
											cy="132"
											r="1.66667"
											transform="rotate(180 104.999 132)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 104.999 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 104.999 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="88"
											r="1.66667"
											transform="rotate(180 104.999 88)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 104.999 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="45"
											r="1.66667"
											transform="rotate(180 104.999 45)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="16"
											r="1.66667"
											transform="rotate(180 104.999 16)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="59"
											r="1.66667"
											transform="rotate(180 104.999 59)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 104.999 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 104.999 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="132"
											r="1.66667"
											transform="rotate(180 90.3333 132)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 90.3333 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 90.3333 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="88"
											r="1.66667"
											transform="rotate(180 90.3333 88)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 90.3333 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="45"
											r="1.66667"
											transform="rotate(180 90.3333 45)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="16"
											r="1.66667"
											transform="rotate(180 90.3333 16)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="59"
											r="1.66667"
											transform="rotate(180 90.3333 59)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 90.3333 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 90.3333 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="132"
											r="1.66667"
											transform="rotate(180 75.6654 132)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="132"
											r="1.66667"
											transform="rotate(180 31.9993 132)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 75.6654 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 31.9993 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 75.6654 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 31.9993 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="88"
											r="1.66667"
											transform="rotate(180 75.6654 88)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="88"
											r="1.66667"
											transform="rotate(180 31.9993 88)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 75.6654 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 31.9993 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="45"
											r="1.66667"
											transform="rotate(180 75.6654 45)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="45"
											r="1.66667"
											transform="rotate(180 31.9993 45)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="16"
											r="1.66667"
											transform="rotate(180 75.6654 16)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="16"
											r="1.66667"
											transform="rotate(180 31.9993 16)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="59"
											r="1.66667"
											transform="rotate(180 75.6654 59)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="59"
											r="1.66667"
											transform="rotate(180 31.9993 59)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 75.6654 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 31.9993 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 75.6654 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 31.9993 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="132"
											r="1.66667"
											transform="rotate(180 60.9993 132)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="132"
											r="1.66667"
											transform="rotate(180 17.3333 132)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 60.9993 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 17.3333 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 60.9993 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 17.3333 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="88"
											r="1.66667"
											transform="rotate(180 60.9993 88)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="88"
											r="1.66667"
											transform="rotate(180 17.3333 88)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 60.9993 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 17.3333 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="45"
											r="1.66667"
											transform="rotate(180 60.9993 45)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="45"
											r="1.66667"
											transform="rotate(180 17.3333 45)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="16"
											r="1.66667"
											transform="rotate(180 60.9993 16)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="16"
											r="1.66667"
											transform="rotate(180 17.3333 16)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="59"
											r="1.66667"
											transform="rotate(180 60.9993 59)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="59"
											r="1.66667"
											transform="rotate(180 17.3333 59)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 60.9993 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 17.3333 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 60.9993 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 17.3333 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="132"
											r="1.66667"
											transform="rotate(180 46.3333 132)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="132"
											r="1.66667"
											transform="rotate(180 2.66536 132)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 46.3333 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 2.66536 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 46.3333 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 2.66536 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="88"
											r="1.66667"
											transform="rotate(180 46.3333 88)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="88"
											r="1.66667"
											transform="rotate(180 2.66536 88)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 46.3333 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 2.66536 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="45"
											r="1.66667"
											transform="rotate(180 46.3333 45)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="45"
											r="1.66667"
											transform="rotate(180 2.66536 45)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="16"
											r="1.66667"
											transform="rotate(180 46.3333 16)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="16"
											r="1.66667"
											transform="rotate(180 2.66536 16)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="59"
											r="1.66667"
											transform="rotate(180 46.3333 59)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="59"
											r="1.66667"
											transform="rotate(180 2.66536 59)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 46.3333 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 2.66536 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 46.3333 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 2.66536 1.66665)"
											fill="#e6af79"
										/>
									</svg>
								</span>
								<span className="absolute -left-7 -bottom-7 z-[-1]">
									<svg
										width="107"
										height="134"
										viewBox="0 0 107 134"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="104.999"
											cy="132"
											r="1.66667"
											transform="rotate(180 104.999 132)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 104.999 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 104.999 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="88"
											r="1.66667"
											transform="rotate(180 104.999 88)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 104.999 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="45"
											r="1.66667"
											transform="rotate(180 104.999 45)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="16"
											r="1.66667"
											transform="rotate(180 104.999 16)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="59"
											r="1.66667"
											transform="rotate(180 104.999 59)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 104.999 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="104.999"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 104.999 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="132"
											r="1.66667"
											transform="rotate(180 90.3333 132)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 90.3333 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 90.3333 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="88"
											r="1.66667"
											transform="rotate(180 90.3333 88)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 90.3333 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="45"
											r="1.66667"
											transform="rotate(180 90.3333 45)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="16"
											r="1.66667"
											transform="rotate(180 90.3333 16)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="59"
											r="1.66667"
											transform="rotate(180 90.3333 59)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 90.3333 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="90.3333"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 90.3333 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="132"
											r="1.66667"
											transform="rotate(180 75.6654 132)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="132"
											r="1.66667"
											transform="rotate(180 31.9993 132)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 75.6654 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 31.9993 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 75.6654 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 31.9993 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="88"
											r="1.66667"
											transform="rotate(180 75.6654 88)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="88"
											r="1.66667"
											transform="rotate(180 31.9993 88)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 75.6654 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 31.9993 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="45"
											r="1.66667"
											transform="rotate(180 75.6654 45)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="45"
											r="1.66667"
											transform="rotate(180 31.9993 45)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="16"
											r="1.66667"
											transform="rotate(180 75.6654 16)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="16"
											r="1.66667"
											transform="rotate(180 31.9993 16)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="59"
											r="1.66667"
											transform="rotate(180 75.6654 59)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="59"
											r="1.66667"
											transform="rotate(180 31.9993 59)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 75.6654 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 31.9993 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="75.6654"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 75.6654 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="31.9993"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 31.9993 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="132"
											r="1.66667"
											transform="rotate(180 60.9993 132)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="132"
											r="1.66667"
											transform="rotate(180 17.3333 132)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 60.9993 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 17.3333 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 60.9993 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 17.3333 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="88"
											r="1.66667"
											transform="rotate(180 60.9993 88)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="88"
											r="1.66667"
											transform="rotate(180 17.3333 88)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 60.9993 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 17.3333 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="45"
											r="1.66667"
											transform="rotate(180 60.9993 45)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="45"
											r="1.66667"
											transform="rotate(180 17.3333 45)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="16"
											r="1.66667"
											transform="rotate(180 60.9993 16)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="16"
											r="1.66667"
											transform="rotate(180 17.3333 16)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="59"
											r="1.66667"
											transform="rotate(180 60.9993 59)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="59"
											r="1.66667"
											transform="rotate(180 17.3333 59)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 60.9993 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 17.3333 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="60.9993"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 60.9993 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="17.3333"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 17.3333 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="132"
											r="1.66667"
											transform="rotate(180 46.3333 132)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="132"
											r="1.66667"
											transform="rotate(180 2.66536 132)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 46.3333 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="117.333"
											r="1.66667"
											transform="rotate(180 2.66536 117.333)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 46.3333 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="102.667"
											r="1.66667"
											transform="rotate(180 2.66536 102.667)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="88"
											r="1.66667"
											transform="rotate(180 46.3333 88)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="88"
											r="1.66667"
											transform="rotate(180 2.66536 88)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 46.3333 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="73.3333"
											r="1.66667"
											transform="rotate(180 2.66536 73.3333)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="45"
											r="1.66667"
											transform="rotate(180 46.3333 45)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="45"
											r="1.66667"
											transform="rotate(180 2.66536 45)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="16"
											r="1.66667"
											transform="rotate(180 46.3333 16)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="16"
											r="1.66667"
											transform="rotate(180 2.66536 16)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="59"
											r="1.66667"
											transform="rotate(180 46.3333 59)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="59"
											r="1.66667"
											transform="rotate(180 2.66536 59)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 46.3333 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="30.6666"
											r="1.66667"
											transform="rotate(180 2.66536 30.6666)"
											fill="#e6af79"
										/>
										<circle
											cx="46.3333"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 46.3333 1.66665)"
											fill="#e6af79"
										/>
										<circle
											cx="2.66536"
											cy="1.66665"
											r="1.66667"
											transform="rotate(180 2.66536 1.66665)"
											fill="#e6af79"
										/>
									</svg>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
