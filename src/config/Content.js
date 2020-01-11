import React, {Component} from 'react';
import '../App.css';

class Content extends Component {
	render(){
		return(
			<div className="card-post">
				<div>
		   			<div className="hapusbulat">
		   				<li className="container"><a href="#">Home</a><i class="fas fa-chevron-right geser2"></i> All Course</li>
			   		</div>
		   		</div>

				{/*layar ke-1*/}
		   		<div className="breadcrumbb warna">
		   			<div className="container">
		   				<h2 class="turun">Semua Kursus Yang Tersedia</h2>
			   		</div>
		   		</div>
			   		<div className="container">
			   			<h2 className="inner">All Courses</h2>
			   			<form className="hapusbulat">
			   				<div className="course_filter">
			   					<span><b>Filter by </b></span>
			   					<div className="split__filter">
			   						<select className="form-control searchable bulat">
			   							<option value="" selected="">Pilih</option>
			   							<option value="" selected="">Kursus</option>
			   							<option value="" selected="">Paket Kursus</option>
			   							<option value="" selected="">Kategori</option>
			   							<option value="" selected="">Sub Kategori</option>
			   							<option value="" selected="">Harga Khusus</option>
			   						</select>
			   					</div>
			   					<div className="split__filter search">
			   						<input className="bulat geserbulat" type="text" name="search" placeholder="  search" value=""></input>
										
			   					</div>
			   				</div>
			   			</form><br />
			   		</div>

			   			{/*konten kursus*/}
			   		<div className="container2">
			   			<div className="course_list">
			   				{/*<ul className="list_item">
			   					<li>
			   						<div className="course_box">
			   							<a href="#">
			   								<div className="image">
			   									<img className="img-responsive" src={require('../img/gambar1.JPG')}/>
			   								</div>
			   								<div className="course_desc">
			   									<p className="title">Web Master Developer Pro</p>
			   									<p className="info_course">
			   										<i className="fa fa-play-circle" aria-hidden="true"> Total Durasi Video Kursus 21:29:00</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-users" aria-hidden="true"> 15.439 Murid</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-book" aria-hidden="true"> 12 Materi kursus</i>
			   									</p> <br/>
			   									<div className="clearfix">
			   										<small className="pull-left text-secondary">
			   											<del>Rp. 998.000</del>
			   										</small>
			   										<span className="price pull-right m-0" size="4px" color="#215CA0">
			   											<strong>Rp. 698.600</strong>
			   										</span>
			   									</div>
			   								</div>
			   							</a>
			   						</div>
			   					</li>

			   					<li>
			   						<div className="course_box">
			   							<a href="#">
			   								<div className="image">
			   									<img className="img-responsive" src={require('../img/gambar2.JPG')}/>
			   								</div>
			   								<div className="course_desc">
			   									<p className="title">Web Master Developer Pro Plus</p>
			   									<p className="info_course">
			   										<i className="fa fa-play-circle" aria-hidden="true"> Total Durasi Video Kursus 35:40:05</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-users" aria-hidden="true"> 15.439 Murid</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-book" aria-hidden="true"> 19 Materi kursus</i>
			   									</p> <br/>
			   									<div className="clearfix">
			   										<small className="pull-left text-secondary">
			   											<del>Rp. 2.994.000</del>
			   										</small>
			   										<span className="price pull-right m-0" size="4px" color="#215CA0">
			   											<strong>Rp. 2.095.800</strong>
			   										</span>
			   									</div>
			   								</div>
			   							</a>
			   						</div>
			   					</li>

			   					<li>
			   						<div className="course_box">
			   							<a href="#">
			   								<div className="image">
			   									<img className="img-responsive" src={require('../img/gambar3.JPG')}/>
			   								</div>
			   								<div className="course_desc">
			   									<p className="title">Web Master Developer Developer</p>
			   									<p className="info_course">
			   										<i className="fa fa-play-circle" aria-hidden="true"> Total Durasi Video Kursus 48:28:20</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-users" aria-hidden="true"> 15.427 Murid</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-book" aria-hidden="true"> 22 Materi kursus</i>
			   									</p> <br/>
			   									<div className="clearfix">
			   										<small className="pull-left text-secondary">
			   											<del>Rp. 3.992.000</del>
			   										</small>
			   										<span className="price pull-right m-0" size="4px" color="#215CA0">
			   											<strong>Rp. 2.794.400</strong>
			   										</span>
			   									</div>
			   								</div>
			   							</a>
			   						</div>
			   					</li>

			   					<li>
			   						<div className="course_box">
			   							<a href="#">
			   								<div className="image lebar2">
			   									<img className="img-responsive" src={require('../img/gambar4.JPG')}/>
			   								</div>
			   								<div className="course_desc">
			   									<p className="title">Web Master Developer Platinum</p>
			   									<p className="info_course">
			   										<i className="fa fa-play-circle" aria-hidden="true"> Total Durasi Video Kursus 104:27:07</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-users" aria-hidden="true"> 15.444 Murid</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-book" aria-hidden="true"> 29 Materi kursus</i>
			   									</p> <br/>
			   									<div className="clearfix">
			   										<small className="pull-left text-secondary">
			   											<del>Rp. 8.483.000</del>
			   										</small>
			   										<span className="price pull-right m-0" size="4px" color="#215CA0">
			   											<strong>Rp. 5.000.000</strong>
			   										</span>
			   									</div>
			   								</div>
			   							</a>
			   						</div>
			   					</li>

			   					<li>
			   						<div className="course_box">
			   							<a href="#">
			   								<div className="image">
			   									<img className="img-responsive" src={require('../img/gambar5.JPG')}/>
			   								</div>
			   								<div className="course_desc">
			   									<p className="title">Php Elite</p>
			   									<p className="info_course">
			   										<i className="fa fa-play-circle" aria-hidden="true"> Total Durasi Video Kursus 18:52:00</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-users" aria-hidden="true"> 15.322 Murid</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-book" aria-hidden="true"> 12 Materi kursus</i>
			   									</p> <br/>
			   									<div className="clearfix">
			   										<small className="pull-left text-secondary">
			   											<del>Rp. 998.000</del>
			   										</small>
			   										<span className="price pull-right m-0" size="4px" color="#215CA0">
			   											<strong>Rp. 698.600</strong>
			   										</span>
			   									</div>
			   								</div>
			   							</a>
			   						</div>
			   					</li>

			   					<li>
			   						<div className="course_box">
			   							<a href="#">
			   								<div className="image">
			   									<img className="img-responsive" src={require('../img/gambar6.JPG')}/>
			   								</div>
			   								<div className="course_desc">
			   									<p className="title">Php Platinum</p>
			   									<p className="info_course">
			   										<i className="fa fa-play-circle" aria-hidden="true"> Total Durasi Video Kursus 28:28:00</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-users" aria-hidden="true"> 15.443 Murid</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-book" aria-hidden="true"> 15 Materi kursus</i>
			   									</p> <br/>
			   									<div className="clearfix">
			   										<small className="pull-left text-secondary">
			   											<del>Rp. 1.497.000</del>
			   										</small>
			   										<span className="price pull-right m-0" size="4px" color="#215CA0">
			   											<strong>Rp. 1.047.900</strong>
			   										</span>
			   									</div>
			   								</div>
			   							</a>
			   						</div>
			   					</li>

			   					<li>
			   						<div className="course_box">
			   							<a href="#">
			   								<div className="image">
			   									<img className="img-responsive" src={require('../img/gambar7.JPG')}/>
			   								</div>
			   								<div className="course_desc">
			   									<p className="title">Full Package Komputer</p>
			   									<p className="info_course">
			   										<i className="fa fa-play-circle" aria-hidden="true"> Total Durasi Video Kursus 13:17:12</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-users" aria-hidden="true"> 15.439 Murid</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-book" aria-hidden="true"> 3 Materi kursus</i>
			   									</p> <br/>
			   									<div className="clearfix">
			   										<small className="pull-left text-secondary">
			   											<del>Rp. 1.497.000</del>
			   										</small>
			   										<span className="price pull-right m-0" size="4px" color="#215CA0">
			   											<strong>Rp. 1.047.900</strong>
			   										</span>
			   									</div>
			   								</div>
			   							</a>
			   						</div>
			   					</li>

			   					<li>
			   						<div className="course_box">
			   							<a href="#">
			   								<div className="image lebar2">
			   									<img className="img-responsive" src={require('../img/gambar4.JPG')}/>
			   								</div>
			   								<div className="course_desc">
			   									<p className="title">Internet Marketing</p>
			   									<p className="info_course">
			   										<i className="fa fa-play-circle" aria-hidden="true"> Total Durasi Video Kursus 22:25:00</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-users" aria-hidden="true"> 15.439 Murid</i>
			   									</p>
			   									<p className="info_course">
			   										<i className="fa fa-book" aria-hidden="true"> 21 Materi kursus</i>
			   									</p> <br/>
			   									<div className="clearfix">
			   										<small className="pull-left text-secondary">
			   											<del>Rp. 4.990.000</del>
			   										</small>
			   										<span className="price pull-right m-0" size="4px" color="#215CA0">
			   											<strong>Rp. 2.000.600</strong>
			   										</span>
			   									</div>
			   								</div>
			   							</a>
			   						</div>
			   					</li>
			   				</ul>*/}
			   				{/*akhir konten kursus*/}

			   				{/*paginasi halaman*/}
							{/*<nav aria-label="Page navigation example">
							  <ul class="pagination">
							    <li class="page-item">
							      <a class="page-link" href="#" aria-label="Previous">
							        <span aria-hidden="true">&laquo;</span>
							      </a>
							    </li>
							    <li class="page-item active"><a class="page-link" href="#">1</a></li>
							    <li class="page-item"><a class="page-link" href="#">2</a></li>
							    <li class="page-item"><a class="page-link" href="#">3</a></li>
							    <li class="page-item"><a class="page-link" href="#">4</a></li>
							    <li class="page-item"><a class="page-link" href="#">5</a></li>
							    <li class="page-item"><a class="page-link" href="#">6</a></li>
							    <li class="page-item"><a class="page-link" href="#">7</a></li>
							    <li class="page-item">
							      <a class="page-link" href="#" aria-label="Next">
							        <span aria-hidden="true">&raquo;</span>
							      </a>
							    </li>
							  </ul>
							</nav>*/}
			   			</div>
			   		</div>
		   	</div>
		)
	}
}

export default Content;
