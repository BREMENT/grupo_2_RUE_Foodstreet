import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/Rue_logo_pink.png';

function SideBar(props) {
    return (
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<Link className="sidebar-brand d-flex align-items-center justify-content-center" 
				to="/" exact="true">
				<div className="sidebar-brand-icon">
					<img className="w-75" src={logo} 
                    alt="Digital House" />
				</div>
			</Link>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0" />

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item active">
				<Link className="nav-link" 
						to="/"
						exact="true">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - Rue</span>
				</Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Actions</div>

			{/* <!-- Nav Item - Pages --> */}
			<li className="nav-item">
				<Link className="nav-link collapsed" 
						to="/pages">
					<i className="fas fa-fw fa-folder"></i>
					<span>Pages</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Charts --> */}
			<li className="nav-item">
				<Link className="nav-link" 
						to="/charts">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Charts</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			<li className="nav-item">
				<Link className="nav-link" 
						to="/tables">
					<i className="fas fa-fw fa-table"></i>
					<span>Tables</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" 
						to="/search">
					<i className="fas fa-fw fa-table"></i>
					<span>Search</span>
				</Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
	
    );
}

export default SideBar;