import {
	Blog,
	Classes,
	Events,
	Experience,
	HeroCarousel,
	Services,
	Testimonial,
	Welcome,
} from "../utils/helper";

const HomePg = () => {
	return (
		<main>
			<HeroCarousel />
			<Welcome />
			<Classes />
			<Services />
			<Experience />
			<Blog />
			<Testimonial />
			<Events />
		</main>
	);
};

export default HomePg;
