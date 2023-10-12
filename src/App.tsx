import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
	AboutPg,
	BlogPg,
	ClassesPg,
	ContactPg,
	ErrorPg,
	EventPg,
	EventsDetailPg,
	Footer,
	Header,
	HomePg,
	ServicesDetailPg,
	ServicesPg,
	TestimonialPg,
} from "./components/utils/helper";

import "./app.css";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route index path="/" element={<HomePg />} />
				<Route path="about" element={<AboutPg />} />
				<Route path="classes" element={<ClassesPg />} />
				<Route path="services" element={<ServicesPg />}>
					<Route path="services-detail" element={<ServicesDetailPg />} />
				</Route>
				<Route path="events" element={<EventPg />}>
					<Route path="events-detail" element={<EventsDetailPg />} />
				</Route>
				<Route path="testimonial" element={<TestimonialPg />} />
				<Route path="blog" element={<BlogPg />} />
				<Route path="contact" element={<ContactPg />} />
				<Route path="*" element={<ErrorPg />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
