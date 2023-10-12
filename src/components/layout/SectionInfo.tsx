import { Link } from "react-router-dom";
import { SectionProps } from "../../types/types";
import { about, health, yoga, youth } from "../utils/helper";

const SectionInfo = (props: SectionProps) => {
	return (
		<div className="info-sec">
			<div className="container">
				<div className={props.className} data-aos="fade-up">
					<div className="col-sm-12 col-md-5 col-lg-6 text-center">
						<figure>
							<img src={about} className="info-img" alt="About Us" />
						</figure>
					</div>
					<div className="col-sm-12 col-md-7 col-lg-6 text-right pt-5">
						<h6>Lorem Ipsum</h6>
						<h2 className="mb-4">WELCOME TO DIVYAA YOGA INSTITUTE</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eveniet officia nemo
							minima, voluptatibus ullam accusamus, obcaecati, delectus asperiores aliquid soluta!
							Deleniti porro explicabo nesciunt ipsam numquam voluptate culpa fugit.
							<br /> <br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi rem quos,
							neque sequi nesciunt temporibus ut, aspernatur optio aliquid nulla quo earum voluptate
							molestiae dignissimos ea, modi ipsum ab.
						</p>
						<a href="contact.html" className="w-btn btn-2 bdr1-30 mt-4">
							Get in Touch
						</a>
					</div>
				</div>

				<div className="about-sec justify-content-center text-center pt-5 d-none d-sm-block">
					<div className="row">
						<div className="feat">
							<div className="d-flex" data-aos="fade-up">
								<div className="col">
									<div className="wc-box">
										<Link to="#">
											<figure>
												<img alt="Excellent health" src={health} />
											</figure>
											<h3>Excellent health</h3>
											<p>Lorem ipsum proin gravida nibh vel velit auctor aliquet.</p>
										</Link>
									</div>
								</div>
								<div className="col">
									<div className="wc-box">
										<Link to="#">
											<figure>
												<img alt="Youth and Beauty" src={youth} />
											</figure>
											<h3>Youth and Beauty</h3>
											<p>Lorem ipsum proin gravida nibh vel velit auctor aliquet.</p>
										</Link>
									</div>
								</div>
								<div className="col">
									<div className="wc-box">
										<Link to="#">
											<figure>
												<img alt="Yoga classes" src={yoga} />
											</figure>
											<h3>Yoga classes</h3>
											<p>Lorem ipsum proin gravida nibh vel velit auctor aliquet.</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionInfo;
