import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

import { eventItems } from "../utils/data";
import { EventItem } from "../utils/helper";

const Events = () => {
	const options = {
		nav: true,
		loop: true,
		margin: 15,
		dots: false,
		autoplay: 500,
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			577: {
				items: 3,
			},
			768: {
				items: 4,
			},
			992: {
				items: 5,
			},
			1200: {
				items: 6,
			},
		},
	};

	const eventItemsList = eventItems.map((eventItem) => (
		<EventItem
			key={eventItem.id}
			url={eventItem.url}
			play={eventItem.play}
			imgSrc={eventItem.imgSrc}
		/>
	));

	return (
		<div className="event-sec text-center">
			<div className="container-fluid">
				<div className="title">
					<h2>Events</h2>
				</div>

				<OwlCarousel rel="events" {...options}>
					{" "}
					{eventItemsList}{" "}
				</OwlCarousel>
			</div>
		</div>
	);
};

export default Events;
