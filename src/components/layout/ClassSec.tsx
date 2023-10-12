import { classesItems } from "../utils/data";
import { ClassesItem } from "../utils/helper";

const ClassSec = () => {
	const classesItemsList = classesItems.map((classesItem) => (
		<div key={classesItem.id} className="col-xs-12 col-sm-6 col-lg-4 mb-5">
			<ClassesItem
				url={classesItem.url}
				date={classesItem.date}
				title={classesItem.title}
				author={classesItem.author}
				imgSrc={classesItem.imgSrc}
				timing={classesItem.timing}
			/>
		</div>
	));

	return (
		<div className="clss-sec">
			<div className="container">
				<div className="row mb-5 justify-content-center">
					<div className="title text-center">
						<h2 className="mb-3">Our Classes</h2>
						<h6>Lorem ipsum dolor sit amet consectetur adipisicing </h6>
					</div>
				</div>

				<div className="row mb-4"> {classesItemsList} </div>
			</div>
		</div>
	);
};

export default ClassSec;
