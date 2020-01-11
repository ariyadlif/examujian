import React, {Component} from 'react';
import '../App.css';

class Header extends Component {
  	render(){
    	return(
	      <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <a class="navbar-brand" href="#"><img class="logonavbar" src={require('../img/logobaba.png')}/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fa fa-th"></i>  Categories
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Design</a>
                        <a class="dropdown-item" href="#">Digital Marketing</a>
                        <a class="dropdown-item" href="#">Programming Front End</a>
                        <a class="dropdown-item" href="#">Programming Back End</a>
                        <a class="dropdown-item" href="#">Mobile</a>
                        <a class="dropdown-item" href="#">Video Editing</a>
                        <a class="dropdown-item" href="#">Database</a>
                        <a class="dropdown-item" href="#">Paket Kursus</a>
                        <a class="dropdown-item" href="#">Chat Realtime</a>
                        <a class="dropdown-item" href="#">All Course</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"> </a>
                </li>
              </ul>

              <form class="form-inline my-2 my-lg-0">
                <input class="bulat lebar form-control mr-sm-2" type="text" placeholder="search for course..."></input>
              </form>

              <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Techfor Community</a></li>
                <li class="nav-item geser">
                  <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>

              <div class="geser">
                <a href="#" class="bulat btn btn-outline-light" >Login</a>
              </div>
              <button class="bulat btn btn-outline-light my-2 my-sm-0" type="submit">Sign Up</button>
            </div>
        </nav>
    	);
  	}
}

export default Header;


