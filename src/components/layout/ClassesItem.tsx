import { Link } from "react-router-dom";
import { ClassesProps } from "../../types/types";

const ClassesItem = (props: ClassesProps) => {
	return (
		<div className="oc-box">
			<Link to={props.url}>
				<figure>
					<img alt={props.title} src={props.imgSrc} />
				</figure>
				<h3>{props.title}</h3>
			</Link>
			<p>
				<span>{props.date}</span>
				<span> | </span>
				<span>
					<strong>{props.timing}</strong>
				</span>
				<br />
				<span>By: {props.author} </span>
			</p>
			<Link to={props.url} className="w-btn btn-s">
				Join now
			</Link>
		</div>
	);
};

export default ClassesItem;
