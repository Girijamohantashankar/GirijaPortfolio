import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	
	Tech,
	Works,
	StarsCanvas,
} from "./components";

export default function Home() {
	return (
		<div className="relative z-0 bg-primary font-sans">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				
				<Hero />
			</div>
			<About />
			<Experience />
			<Tech />
			<Works />
			<Feedbacks />
			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div>
		</div>
	);
}
