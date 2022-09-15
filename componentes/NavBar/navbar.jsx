import React from 'react'
import listatipoke from '../drowdop/Drow';


function NavBar() {
    

    return (
        <React.Fragment>
            <>
			    <nav className="logo">
				    <div className="logo-container">
					    <img src="/mipokeapi/public/Assets/img/logo.png" alt="Logo" className="navbar-logo"></img>
					    <span>pokeapi</span>
				    
				        <div class="navbar">
                        <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a> 
                        <a href="#"><i class="fa fa-fw fa-search"></i> Search</a> 
                        <a href="#"><i class="fa fa-fw fa-envelope"></i>TIPO</a> 
                        <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
                        </div>
                    </div>
			    </nav>
		    </>
        </React.Fragment>
    );
}

export default NavBar;