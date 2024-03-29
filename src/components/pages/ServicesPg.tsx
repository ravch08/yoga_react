import { Banner, Events, Testimonial, serviceImg } from "../utils/helper";

const ServicesPg = () => {
	return (
		<main>
			<Banner title="SERVICES" />
			<section className="service-sec">
				<div className="container">
					<div className="title text-center mb-5">
						<h2>TAKE CHARGE OF YOUR LIFE</h2>
					</div>

					<div className="d-flex serv-det">
						<ul className="nav nav-tabs">
							<li className="nav-item">
								<a className="nav-link active" data-toggle="tab" href="#tab1">
									<strong>Yoga Training</strong>
									<span>Moving minds</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#tab2">
									<strong>Meditation guru training</strong>
									<span>People. Process. Power</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#tab3">
									<strong>Pilates instructor training</strong>
									<span>We deliver results</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#tab4">
									<strong>Classes & Courses</strong>
									<span>Provide traning all classes</span>
								</a>
							</li>
						</ul>

						<div className="tab-content" id="myTabContent">
							<div className="tab-pane fade show active" id="tab1">
								<h3>CLASSICAL YOGA</h3>
								<p>
									Lorem Ipsn gravida nibh vel velit auctor aliquetenean sollicitudin, lorem quis
									bibendum.
								</p>
								<ul className="ullist">
									<li>The Friendlier, Easier Place to Bank.</li>
									<li>The Key To Success Is Staying With A Positive Attitude!</li>
									<li>From Humble Beginnings Come Great Things.</li>
									<li>Today May Be Just Like Any Other Day, But It’s Yours!</li>
									<li>The Friendlier, Easier Place to Bank.</li>
								</ul>
								<p>
									Lorem Ipsn gravida nibh vel velit auctor aliquetenean sollicitudin, lorem quis
									bibendum.
								</p>
								<img alt="CLASSICAL YOGA" src={serviceImg} />
							</div>

							<div className="tab-pane fade show" id="tab2">
								<h3>CLASSICAL YOGA</h3>
								<p>
									Lorem Ipsn gravida nibh vel velit auctor aliquetenean sollicitudin, lorem quis
									bibendum.
								</p>
								<ul className="ullist">
									<li>The Friendlier, Easier Place to Bank.</li>
									<li>The Key To Success Is Staying With A Positive Attitude!</li>
									<li>From Humble Beginnings Come Great Things.</li>
									<li>Today May Be Just Like Any Other Day, But It’s Yours!</li>
									<li>The Friendlier, Easier Place to Bank.</li>
								</ul>
								<p>
									Lorem Ipsn gravida nibh vel velit auctor aliquetenean sollicitudin, lorem quis
									bibendum.
								</p>
								<img alt="CLASSICAL YOGA" src={serviceImg} />
							</div>

							<div className="tab-pane fade show" id="tab3">
								<h3>CLASSICAL YOGA</h3>
								<p>
									Lorem Ipsn gravida nibh vel velit auctor aliquetenean sollicitudin, lorem quis
									bibendum.
								</p>
								<ul className="ullist">
									<li>The Friendlier, Easier Place to Bank.</li>
									<li>The Key To Success Is Staying With A Positive Attitude!</li>
									<li>From Humble Beginnings Come Great Things.</li>
									<li>Today May Be Just Like Any Other Day, But It’s Yours!</li>
									<li>The Friendlier, Easier Place to Bank.</li>
								</ul>
								<p>
									Lorem Ipsn gravida nibh vel velit auctor aliquetenean sollicitudin, lorem quis
									bibendum.
								</p>
								<img alt="CLASSICAL YOGA" src={serviceImg} />
							</div>

							<div className="tab-pane fade show" id="tab4">
								<h3>CLASSICAL YOGA</h3>
								<p>
									Lorem Ipsn gravida nibh vel velit auctor aliquetenean sollicitudin, lorem quis
									bibendum.
								</p>
								<ul className="ullist">
									<li>The Friendlier, Easier Place to Bank.</li>
									<li>The Key To Success Is Staying With A Positive Attitude!</li>
									<li>From Humble Beginnings Come Great Things.</li>
									<li>Today May Be Just Like Any Other Day, But It’s Yours!</li>
									<li>The Friendlier, Easier Place to Bank.</li>
								</ul>
								<p>
									Lorem Ipsn gravida nibh vel velit auctor aliquetenean sollicitudin, lorem quis
									bibendum.
								</p>
								<img alt="CLASSICAL YOGA" src={serviceImg} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<Testimonial />
			<Events />
		</main>
	);
};

export default ServicesPg;
