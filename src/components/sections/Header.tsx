import { Link, NavLink } from "react-router-dom";
import { logo } from "../utils/helper";

const Header = () => {
	return (
		<header>
			<nav>
				<div className="container">
					<div className="navbar navbar-expand-md">
						<div className="d-lg-none w-100 d-flex justify-content-between align-items-center">
							<Link to="/" className="navbar-brand">
								<img alt="Divyaa Yoga Institute" src={logo} />
							</Link>

							<button
								type="button"
								aria-expanded="false"
								data-toggle="collapse"
								data-target="#navbar_icon"
								className="navbar-toggler"
								aria-controls="navbar_icon"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
						</div>

						<div className="collapse navbar-collapse justify-content-center" id="navbar_icon">
							<ul className="navbar-nav">
								<li>
									<NavLink className="nav-link" to="/">
										Home
									</NavLink>
								</li>
								<li>
									<NavLink className="nav-link" to="about">
										About Us
									</NavLink>
								</li>

								<li className="dropdown">
									<NavLink className="nav-link" to="classes">
										Classes
									</NavLink>
									<div className="dropdown-nav">
										<Link to="#!">POWER YOGA</Link>
										<Link to="#!">BIKRAM YOGA</Link>
										<Link to="#!">VINYASA YOGA</Link>
										<Link to="#!">CLASSICAL YOGA</Link>
									</div>
								</li>
								<li className="dropdown">
									<NavLink className="nav-link" to="services">
										Services
									</NavLink>
									<div className="dropdown-nav text-right">
										<Link to="#!">CLASSICAL YOGA</Link>
										<Link to="#!">CLASSICAL YOGA</Link>
										<Link to="#!">CLASSICAL YOGA</Link>
										<Link to="#!">CLASSICAL YOGA</Link>
									</div>
								</li>

								<li className="center-logo">
									<Link to="/" className="navbar-brand">
										<img alt="Divyaa Yoga Institute" src={logo} />
									</Link>
								</li>

								<li>
									<NavLink className="nav-link" to="events">
										Events
									</NavLink>
								</li>
								<li>
									<NavLink className="nav-link" to="testimonial">
										Testimonials
									</NavLink>
								</li>
								<li>
									<NavLink className="nav-link" to="blog">
										Blog
									</NavLink>
								</li>
								<li>
									<NavLink className="nav-link" to="contact">
										Contact Us
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
