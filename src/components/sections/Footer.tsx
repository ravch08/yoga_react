import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-3">
						<h4>ABOUT US</h4>
						<p>
							Lorem ipsum proin gravida nibh vel veliauctor aliquenean sollicitudiem quis bibendum
							auctornisi consequat ipsutis sem nibh id elit.
						</p>
						<div className="fsocial">
							<Link to="#!">
								<i className="fa fa-facebook"></i>
							</Link>
							<Link to="#!">
								<i className="fa fa-twitter"></i>
							</Link>
							<Link to="#!">
								<i className="fa fa-youtube-play"></i>
							</Link>
							<Link to="#!">
								<i className="fa fa-linkedin"></i>
							</Link>
							<Link to="#!">
								<i className="fa fa-instagram"></i>
							</Link>
						</div>
					</div>
					<div className="col-6 col-sm-6 col-xs-6 col-md-2">
						<h4>Quick link</h4>
						<ul>
							<li>
								<Link to="/"> Home</Link>
							</li>
							<li>
								<Link to="classes"> Classes</Link>
							</li>
							<li>
								<Link to="services"> Services</Link>
							</li>
							<li>
								<Link to="testimonial"> Testimonials</Link>
							</li>
							<li>
								<Link to="events"> Events</Link>
							</li>
							<li>
								<Link to="contact"> Contact us</Link>
							</li>
						</ul>
					</div>
					<div className="col-6 col-sm-6 col-xs-6 col-md-3">
						<h4>Open Hours</h4>
						<ul>
							<li>
								<Link to="#!"> Monday 11am-7pm</Link>
							</li>
							<li>
								<Link to="#!"> Tuesday-Friday 11am-8pm</Link>
							</li>
							<li>
								<Link to="#!"> Saturday 10am-6pm</Link>
							</li>
							<li>
								<Link to="#!"> Sunday 11am-6pm</Link>
							</li>
							<li>
								<Link to="#!"> Festival Day OFF</Link>
							</li>
						</ul>
					</div>
					<div className="col-12 col-sm-12 col-md-3">
						<h4>Contact Info</h4>
						<ul className="fc-info">
							<li>
								<i className="fa fa-map-marker"></i>
								<Link to="#!"> 210, Cross Road Broadway, Lorem City, Indian 18813</Link>
							</li>
							<li>
								<i className="fa fa-envelope"></i>
								<Link to="#!">Info@divyaayogainstitute.com</Link>
							</li>
							<li>
								<i className="fa fa-phone"></i>
								<Link to="#!">+ 91 76949 39493</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<p>
						Copyright © 2019. <strong>Divyaa Yoga Institute</strong> All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
