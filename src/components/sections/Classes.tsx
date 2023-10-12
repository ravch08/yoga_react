import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

import { classesItems } from "../utils/data";
import { ClassesItem } from "../utils/helper";

const Classes = () => {
	const options = {
		autoplay: 500,
		loop: true,
		margin: 20,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			564: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
		},
	};

	const classesItemsList = classesItems.map((classesItem) => (
		<ClassesItem
			key={classesItem.id}
			url={classesItem.url}
			date={classesItem.date}
			title={classesItem.title}
			author={classesItem.author}
			imgSrc={classesItem.imgSrc}
			timing={classesItem.timing}
		/>
	));

	return (
		<div className="oc-sec text-center">
			<div className="container">
				<div className="title">
					<h2>Our Classes</h2>
				</div>

				<OwlCarousel {...options}> {classesItemsList} </OwlCarousel>
			</div>
		</div>
	);
};

export default Classes;
