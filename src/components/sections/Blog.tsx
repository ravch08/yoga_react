import { Link } from "react-router-dom";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

import { BlogItemsProps } from "../../types/types";
import { blogItems } from "../utils/data";
import { BlogItem } from "../utils/helper";

const Blog = () => {
	const options = {
		autoplay: 500,
		loop: true,
		margin: 30,
		dots: true,
		nav: false,

		responsive: {
			0: {
				items: 1,
			},
			460: {
				items: 1,
			},
			768: {
				items: 3,
			},
		},
	};

	const blogItemsList = blogItems.map((blogItem: BlogItemsProps) => (
		<BlogItem
			key={blogItem.id}
			url={blogItem.url}
			title={blogItem.title}
			imgSrc={blogItem.imgSrc}
			description={blogItem.description}
		/>
	));

	return (
		<div className="blog-sec">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-12 col-lg-10">
						<div className="title text-center">
							<h2>Blog</h2>
						</div>

						<OwlCarousel {...options}> {blogItemsList} </OwlCarousel>

						<div className="text-center mt-4">
							<Link to="blog" className="w-btn btn-2">
								View all
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
