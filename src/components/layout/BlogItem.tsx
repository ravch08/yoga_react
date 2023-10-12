import { Link } from "react-router-dom";
import { BlogItemsProps } from "../../types/types";

const BlogItem = (props: BlogItemsProps) => {
	return (
		<div className="blog-item">
			<Link to={props.url}>
				<figure>
					<img alt={props.title} src={props.imgSrc} />
				</figure>
				<h3>{props.title}</h3>
			</Link>
			<p>{props.description}</p>
		</div>
	);
};

export default BlogItem;
