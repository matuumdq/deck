import Cinematic from "../assets/cinematic.mp4";
const VideoPlayer = () => {
	return (
		<div>
			<video
				className="max-w-full h-[91vh] top-20 object-cover absolute"
				autoPlay
				muted
				loop
			>
				<source src={Cinematic} type="video/mp4" />
				Tu navegador no admite la reproducción de videos.
			</video>
		</div>
	);
};

export default VideoPlayer;
