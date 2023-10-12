import { Banner, Events, SectionInfo, Testimonial } from "../utils/helper";

const AboutPg = () => {
	return (
		<main>
			<Banner title="ABOUT US" />
			<SectionInfo className="row" />
			<Testimonial />
			<SectionInfo className="d-flex flex-row-reverse" />
			<Events />
		</main>
	);
};

export default AboutPg;
