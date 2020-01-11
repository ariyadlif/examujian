import React, {Component} from 'react';
import '../App.css';

class Footer extends Component {
	render(){
		return(
      <footer>
  			<div className="container"> 
          <div className="row"> 
            <div className="col-md-5 col-sm-5 col-xs-12">
              <div className="widget"> 
                <div className="widget_title">
                  <a href="#"><img className="logonavbar" src={require('../img/logobaba.png')}/></a>
                </div>
                <div className="widget_description">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-12">
              <div className="widget">  
                <div className="widget_title">
                  <h3>Tentang</h3>
                </div>
                <div className="widget_description"> 
                  <ul>
                    <li><a href="#">Kupon</a></li>
                    <li><a href="#">Kursus</a></li>
                    <li><a href="#">Login</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-12">
              <div className="widget">
                <div className="widget_title">
                  <h3>Customer Service</h3>
                </div>
                <div className="widget_description">
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Kontak Kami</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12"> 
              <div className="widget">
                <div className="widget_title">
                  <h3>Subscribe</h3>
                </div>
                <div className="widget_description">
                  <p>Ikuti berita kami</p>
                  <form className="form-inline">
                    <div className="form-group">
                      <input className="form-control bulat" type="email" placeholder="Enter your email"></input>
                    </div>
                  </form><br/>
                  <p>Terkoneksi dengan kami</p>
                  <ul className="media">
                    <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" className="gplus"><i className="fab fa-google-plus-g"></i></a></li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="copyright_text text-center">
              <p>Copyright @2019 <a href="#">techfor.id</a>, All right reserved</p>
            </div>
          </div>
        </div>
      </footer>
		);
	}
}

export default Footer;