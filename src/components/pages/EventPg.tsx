import { Link } from "react-router-dom";

import {
	Banner,
	Blog,
	gallery1,
	gallery2,
	gallery3,
	gallery4,
	gallery5,
	gallery6,
} from "../utils/helper";

const EventPg = () => {
	return (
		<main>
			<Banner title="EVENTS" />

			<div className="gallery-sec">
				<div className="container p-0">
					<div className="row justify-content-center">
						<div className="title mb-5">
							<h2>Lorem ipsum</h2>
						</div>
					</div>

					<div className="row" id="gallery">
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5 pics animation all 2">
							<Link to="events-detail">
								<figure>
									<img className="img-fluid" src={gallery1} alt="Card" />
								</figure>
								<div className="album_name">
									<h3 className="pb-2">Album Name </h3>
								</div>
							</Link>
						</div>

						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5 pics animation all 1">
							<Link to="events-detail">
								<figure>
									<img className="img-fluid" src={gallery2} alt="Card" />
								</figure>
								<div className="album_name">
									<h3 className="pb-2">Album Name </h3>
								</div>
							</Link>
						</div>

						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5 pics animation all 1">
							<Link to="events-detail">
								<figure>
									<img className="img-fluid" src={gallery3} alt="Card" />
								</figure>
								<div className="album_name">
									<h3 className="pb-2">Album Name </h3>
								</div>
							</Link>
						</div>

						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5 pics animation all 2">
							<Link to="events-detail">
								<figure>
									<img className="img-fluid" src={gallery4} alt="Card" />
								</figure>
								<div className="album_name">
									<h3 className="pb-2">Album Name </h3>
								</div>
							</Link>
						</div>

						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5 pics animation all 2">
							<Link to="events-detail">
								<figure>
									<img className="img-fluid" src={gallery5} alt="Card" />
								</figure>
								<div className="album_name">
									<h3 className="pb-2">Album Name </h3>
								</div>
							</Link>
						</div>

						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5 pics animation all 1">
							<Link to="events-detail">
								<figure>
									<img className="img-fluid" src={gallery6} alt="Card" />
								</figure>
								<div className="album_name">
									<h3 className="pb-2">Album Name </h3>
								</div>
							</Link>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5 pics animation all 2">
							<Link to="events-detail">
								<figure>
									<img className="img-fluid" src={gallery1} alt="Card" />
								</figure>
								<div className="album_name">
									<h3 className="pb-2">Album Name </h3>
								</div>
							</Link>
						</div>

						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5 pics animation all 1">
							<Link to="events-detail">
								<figure>
									<img className="img-fluid" src={gallery2} alt="Card" />
								</figure>
								<div className="album_name">
									<h3 className="pb-2">Album Name </h3>
								</div>
							</Link>
						</div>

						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5 pics animation all 1">
							<Link to="events-detail">
								<figure>
									<img className="img-fluid" src={gallery3} alt="Card" />
								</figure>
								<div className="album_name">
									<h3 className="pb-2">Album Name </h3>
								</div>
							</Link>
						</div>

						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5 pics animation all 2">
							<Link to="events-detail">
								<figure>
									<img className="img-fluid" src={gallery4} alt="Card" />
								</figure>
								<div className="album_name">
									<h3 className="pb-2">Album Name </h3>
								</div>
							</Link>
						</div>

						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5 pics animation all 2">
							<Link to="events-detail">
								<figure>
									<img className="img-fluid" src={gallery5} alt="Card" />
								</figure>
								<div className="album_name">
									<h3 className="pb-2">Album Name </h3>
								</div>
							</Link>
						</div>

						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5 pics animation all 1">
							<Link to="events-detail">
								<figure>
									<img className="img-fluid" src={gallery6} alt="Card" />
								</figure>
								<div className="album_name">
									<h3 className="pb-2">Album Name </h3>
								</div>
							</Link>
						</div>
					</div>

					<div className="text-center">
						<Link to="events-detail" className="w-btn btn-s">
							View More
						</Link>
					</div>
				</div>
			</div>

			<div className="upcom_event">
				<div className="container mb-5">
					<div className="row">
						<div className="col-12 col-md-12 col-lg-6 mb-5"> No Upcoming Events as of yet...</div>

						<div className="col-12 col-md-12 col-lg-6">
							<div className="card card-body position-sticky pt_100">
								<div className="title mt-2 mb-3 text-center">
									<div>
										<h2>
											<strong>Calendar</strong>{" "}
										</h2>
									</div>
								</div>

								<div id="datepicker" className="w-100">
									<div className="datepicker datepicker-inline">
										<div className="datepicker-days" style={{ display: "block" }}>
											<table className="table table-condensed">
												<thead>
													<tr>
														<th className="prev" style={{ visibility: "visible" }}>
															«
														</th>
														<th colSpan="5" className="datepicker-switch text-center">
															January 2020
														</th>
														<th className="next" style={{ visibility: "visible" }}>
															»
														</th>
													</tr>
													<tr>
														<th className="dow">Su</th>
														<th className="dow">Mo</th>
														<th className="dow">Tu</th>
														<th className="dow">We</th>
														<th className="dow">Th</th>
														<th className="dow">Fr</th>
														<th className="dow">Sa</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className="old day">29</td>
														<td className="old day">30</td>
														<td className="old day">31</td>
														<td className="day">1</td>
														<td className="day">2</td>
														<td className="day">3</td>
														<td className="day">4</td>
													</tr>
													<tr>
														<td className="day">5</td>
														<td className="day">6</td>
														<td className="day">7</td>
														<td className="day">8</td>
														<td className="active day">9</td>
														<td className="day">10</td>
														<td className="day">11</td>
													</tr>
													<tr>
														<td className="day">12</td>
														<td className="day">13</td>
														<td className="day">14</td>
														<td className="day">15</td>
														<td className="day">16</td>
														<td className="day">17</td>
														<td className="day">18</td>
													</tr>
													<tr>
														<td className="day">19</td>
														<td className="day">20</td>
														<td className="day">21</td>
														<td className="day">22</td>
														<td className="day">23</td>
														<td className="day">24</td>
														<td className="day">25</td>
													</tr>
													<tr>
														<td className="day">26</td>
														<td className="day">27</td>
														<td className="day">28</td>
														<td className="day">29</td>
														<td className="day">30</td>
														<td className="day">31</td>
														<td className="new day">1</td>
													</tr>
													<tr>
														<td className="new day">2</td>
														<td className="new day">3</td>
														<td className="new day">4</td>
														<td className="new day">5</td>
														<td className="new day">6</td>
														<td className="new day">7</td>
														<td className="new day">8</td>
													</tr>
												</tbody>
												<tfoot>
													<tr>
														<th colspan={7} className="today" style={{ display: "none" }}>
															Today
														</th>
													</tr>
													<tr>
														<th colspan={7} className="clear" style={{ display: "none" }}>
															Clear
														</th>
													</tr>
												</tfoot>
											</table>
										</div>
										<div className="datepicker-months" style={{ display: "none" }}>
											<table className="table table-condensed">
												<thead>
													<tr>
														<th className="prev" style={{ visibility: "visible" }}>
															«
														</th>
														<th colspan="5" className="datepicker-switch">
															2020
														</th>
														<th className="next" style={{ visibility: "visible" }}>
															»
														</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td colspan="7">
															<span className="month active">Jan</span>
															<span className="month">Feb</span>
															<span className="month">Mar</span>
															<span className="month">Apr</span>
															<span className="month">May</span>
															<span className="month">Jun</span>
															<span className="month">Jul</span>
															<span className="month">Aug</span>
															<span className="month">Sep</span>
															<span className="month">Oct</span>
															<span className="month">Nov</span>
															<span className="month">Dec</span>
														</td>
													</tr>
												</tbody>
												<tfoot>
													<tr>
														<th colspan="7" className="today" style={{ display: "none" }}>
															Today
														</th>
													</tr>
													<tr>
														<th colspan="7" className="clear" style={{ display: "none" }}>
															Clear
														</th>
													</tr>
												</tfoot>
											</table>
										</div>
										<div className="datepicker-years" style={{ display: "none" }}>
											<table className="table table-condensed">
												<thead>
													<tr>
														<th className="prev" style={{ visibility: "visible" }}>
															«
														</th>
														<th colspan="5" className="datepicker-switch">
															2020-2029
														</th>
														<th className="next" style={{ visibility: "visible" }}>
															»
														</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td colspan="7">
															<span className="year old">2019</span>
															<span className="year active">2020</span>
															<span className="year">2021</span>
															<span className="year">2022</span>
															<span className="year">2023</span>
															<span className="year">2024</span>
															<span className="year">2025</span>
															<span className="year">2026</span>
															<span className="year">2027</span>
															<span className="year">2028</span>
															<span className="year">2029</span>
															<span className="year new">2030</span>
														</td>
													</tr>
												</tbody>
												<tfoot>
													<tr>
														<th colspan="7" className="today" style={{ display: "none" }}>
															Today
														</th>
													</tr>
													<tr>
														<th colspan="7" className="clear" style={{ display: "none" }}>
															Clear
														</th>
													</tr>
												</tfoot>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center mt-4"> </div>
				</div>
			</div>

			<Blog />
		</main>
	);
};

export default EventPg;
