import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const Clients = () => {
	const responsive = {
		0: { items: 2 },
		568: { items: 3 },
		1024: { items: 4 },
	};
	const items = [
		<div className="item w-full" data-value="1" key="1">
			<img
				src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685735474/ninio_qvqpku.png"
				alt=""
			/>
		</div>,
		<div className="item w-full" data-value="2" key="2">
			<img
				src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685735474/casa_dgs2f3.png"
				alt=""
			/>
		</div>,
		<div className="item w-full" data-value="3" key="3">
			<img
				src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685735474/bonjus_ofwhca.png"
				alt=""
			/>
		</div>,
		<div className="item w-full" data-value="4" key="4">
			<img
				src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685735474/gato_ythnaa.png"
				alt=""
			/>
		</div>,
		<div className="item w-full" data-value="5" key="5">
			<img
				src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685735474/barista_thweox.png"
				alt=""
			/>
		</div>,
	];
	return (
		<div className="max-w-screen-lg mx-auto">
			<AliceCarousel
				mouseTracking
				items={items}
				responsive={responsive}
				infinite
				autoPlay
				autoPlayStrategy="default"
				animationDuration="1500"
				disableDotsControls
				disableButtonsControls
			/>
		</div>
	);
};

export default Clients;
