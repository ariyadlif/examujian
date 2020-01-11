import React from 'react';
import '../App.css';

const ContentKomponen = (props) => {

	return (

		<div id="card-post">
			{/*<div>
		   		<div className="hapusbulat">
		   			<li className="container"><a href="#">Home</a><i class="fas fa-chevron-right geser2"></i> All Course</li>
			   	</div>
		   	</div>*/}
		   	{/*<div className="breadcrumbb warna">
		   		<div className="container">
		   			<h2 class="turun">Semua Kursus Yang Tersedia</h2>
			   	</div>
		   	</div>*/}
			{/*<div className="container">
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
			   				<input className="form-control bulat" type="text" name="search" placeholder="search" value=""></input>
			   				<button className="btn btn-default" type="submit">SEARCH</button>
			   			</div>
			   			</div>
			   	</form><br />
			</div>*/}
			{/*Konten Kursus*/}
			<div className="container2">
				<div className="course_list">
					<ul className="list_item">
						<li>
							<div className="course_box">
								<a href="#">
									<div className="image">
										<img src={props.image} alt="gambar"/>
									</div>
									<div className="course_desc">
			   							<p className="title">{props.nama_kursus}</p>
			   							<p className="info_course">
			   								<i className="fa fa-play-circle" aria-hidden="true"> Total Durasi Video Kursus : {props.total_durasi}</i>
			   							</p>
			   							<p className="info_course">
			   								<i className="fa fa-users" aria-hidden="true"> {props.total_murid} Murid</i>
			   							</p>
			   							<p className="info_course">
			   								<i className="fa fa-book" aria-hidden="true"> {props.jumlah_video} Materi kursus </i>
			   							</p> <br/>
			   							<div className="clearfix">
			   								<small className="pull-left text-secondary">
			   									<del>Rp. {props.harga}</del>
			   								</small>
			   								<span className="price pull-right m-0" size="4px" color="#215CA0">
			   									<strong>Rp. {props.diskon}</strong>
			   								</span>
			   							</div>
			   						</div>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ContentKomponen;
