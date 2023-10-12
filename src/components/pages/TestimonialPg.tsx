import Banner from "../sections/Banner";
import Events from "../sections/Events";
import Testimonial from "../sections/Testimonial";

const TestimonialPg = () => {
	const styling = {
		newStyle: {
			color: "#111",
			backgroundImage: "none",
		},
	};

	return (
		<main>
			<Banner title="TESTIMONIALS" />
			<Testimonial style={styling.newStyle} />
			<Events />
		</main>
	);
};

export default TestimonialPg;
