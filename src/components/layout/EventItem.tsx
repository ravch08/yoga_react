import { Link } from "react-router-dom";
import { EventProps } from "../../types/types";

const EventItem = (props: EventProps) => {
	return (
		<div className="event-item">
			<Link to={props.url}>
				<figure>
					<img alt="Event" src={props.imgSrc} />
				</figure>
				<div className="event-hover">
					<img src={props.play} alt="play" />
				</div>
			</Link>
		</div>
	);
};

export default EventItem;
