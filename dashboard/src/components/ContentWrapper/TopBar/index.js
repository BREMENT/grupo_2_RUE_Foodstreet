import React, {useEffect, useState} from 'react';
import perfil from '../../../assets/images/jordan-walke.png';

function TopBar(props) {
	const [user, setUser] = useState({});

	const peticion = async() =>{
		const usuario = await fetch('http://localhost:8080/api/users/1')
								.then(resp => resp.json());

		console.log(usuario.users);
		setUser(usuario.users);
	}

	useEffect(()=>{
		peticion();
	}, [])

	useEffect(()=>{
		return ()=>console.error('Se desmonto el componente');
	},[]);

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

			{/* <!-- Sidebar Toggle (Topbar) --> */}
			<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
			    <i className="fa fa-bars"></i>
			</button>

			{/* <!-- Topbar Navbar --> */}
			<ul className="navbar-nav ml-auto">

				{/* <!-- Nav Item - Alerts --> */}
				<li className="nav-item dropdown no-arrow mx-1">
					<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
						<i className="fas fa-bell fa-fw"></i>
						{/* <!-- Counter - Alerts --> */}
						<span className="badge badge-danger badge-counter">3+</span>
					</a>
				</li>

				{/* <!-- Nav Item - Messages --> */}
				<li className="nav-item dropdown no-arrow mx-1">
					<a className="nav-link dropdown-toggle" 
                        href="/" id="messagesDropdown">
						<i className="fas fa-envelope fa-fw"></i>
						{/* <!-- Counter - Messages --> */}
						<span className="badge badge-danger badge-counter">7</span>
					</a>
				</li>

                <div className="topbar-divider d-none d-sm-block"></div>

				{/* <!-- Nav Item - User Information --> */}
				<li className="nav-item dropdown no-arrow">
					<a className="nav-link dropdown-toggle" 
                        href="/" id="userDropdown">
						<span className="mr-2 d-none d-lg-inline text-gray-600 small">{user.email}</span>
						<img className="img-profile rounded-circle" 
                        src={`http://localhost:8080${user.img}`} 
                        alt="Jordan Walke - Creador de React" width="60" />
					</a>
				</li>

			</ul>

		</nav>
    );
}

export default TopBar;