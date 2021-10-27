import React from 'react';
import ContentRowMovie from './ContentRowMovie';
import ContentRowCenter from './ContentRowCenter';
import Chart from './Chart';

function index(props) {
	return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard Rue</h1>
			</div>

			{/* <!-- Content Row Movies--> */}
			<ContentRowMovie />
			{/* <!-- End movies in Data Base --> */}


			{/* <!-- Content Row Last Movie in Data Base --> */}
			<ContentRowCenter />

			{/* content chart */}
			<Chart />
		</div>
	);
}

export default index;