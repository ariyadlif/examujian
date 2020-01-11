import React from 'react';
import Header from "./config/Header"; //code ini class Component dengan file terpisah
							          //dan menggil header <Header/> yg ada didalam class App
import Content from "./config/Content";
import ApiContent from "./config/ApiContent";
import Pagination from "./config/Pagination";
import Footer from "./config/Footer";
import './App.css';


// class Footer extends Component{   //code ini class Component satu file dan tinggal
// 	render(){					     //dipanggil didalam class App <Footer/>
// 		return(
// 			<div>
// 				<h3>ini footer</h3>
// 			</div>
// 		);
// 	}
// }

function App() {
  
    return(
      	<div clasName="App">
  		    <Header/>
          <Content/>
          <div className="berjajar">
  		   	  <ApiContent/>
          </div>
          <Pagination/>
  		    <Footer/>

      	</div>
    );
  
}

export default App;
