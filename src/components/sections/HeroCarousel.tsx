import { Link } from "react-router-dom";
import { bannerImg } from "../utils/helper";

const HeroCarousel = () => {
	return (
		<div id="mslider" className="carousel slide" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src={bannerImg} className="d-block w-100" alt="..." />
					<div className="carousel-caption d-none d-md-block ">
						<h5>Body & Soul</h5>
						<p>
							Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
							industries for previewing layouts and visual mockups.
						</p>
						<Link to="#!">Join Now</Link>
					</div>
				</div>
				<div className="carousel-item">
					<img src={bannerImg} className="d-block w-100" alt="..." />
					<div className="carousel-caption d-none d-md-block ">
						<h5>Body & Soul</h5>
						<p>
							Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
							industries for previewing layouts and visual mockups.
						</p>
						<Link to="#!">Join Now</Link>
					</div>
				</div>
				<div className="carousel-item">
					<img src={bannerImg} className="d-block w-100" alt="..." />
					<div className="carousel-caption d-none d-md-block ">
						<h5>Body & Soul</h5>
						<p>
							Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
							industries for previewing layouts and visual mockups.
						</p>
						<Link to="#!">Join Now</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroCarousel;
