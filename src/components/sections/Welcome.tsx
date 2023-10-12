import { Link } from "react-router-dom";
import { health, logoIcon, yoga, youth } from "../utils/helper";

const Welcome = () => {
	return (
		<div className="welcome-sec text-center">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-11 col-lg-10">
						<div className="title">
							<figure>
								<img alt="WELCOME TO Divyaa Yoga Institute" src={logoIcon} />
							</figure>
							<h1>WELCOME TO Divyaa Yoga Institute</h1>
							<p>
								Donec dictum magna orci, ultricies vehicula erat egestas eget. Aliquam ac nulla ac
								purus semper elementum. Sed at pharetra quam, convallis pretium libero. Cras a ante
								risus. Nulla risus justo, auctor blandit felis nec, ornare dictum tellus. In congue
								ante quis nibh imperdiet, vitae posuere massa mollis. Mauris condimentum sit amet
								nibh ac elementum.
							</p>
						</div>

						<div className="d-flex" id="wel-feat">
							<div className="col">
								<div className="wc-box">
									<Link to="#!">
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
									<Link to="#!">
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
									<Link to="#!">
										<figure>
											<img alt="Yoga classes" src={yoga} />
										</figure>
										<h3>Yoga classNamees</h3>
										<p>Lorem ipsum proin gravida nibh vel velit auctor aliquet.</p>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
