import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';





class Cover extends Component {
  state = {  }
  render() { 
  return ( <div className="container bag-cover img-cover">
          <nav className="navbar navbar-expand pt-5 navbar-light">
              <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link btn btn-light ml-2 bg-dark text-white" href="https://github.com/Sugarcothe">Github<span className="sr-only">(current)<i className="fa fa-github"></i></span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-light ml-2 bg-dark text-white" href="https://bitbucket.org/sugarCothe/">BitBucket</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-light ml-2 bg-dark text-white" href="https://www.figma.com/files/user/852436901002326960/Ifeanyi-valentine">Figma</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-light ml-2 bg-dark text-white" href="https://www.twitter.com/sweetestshuga">Twitter</a>
                </li>
               
              </ul>
          </nav>
          <main className="header1 pt-5 col-left pl-5">
            <h1>Eze Valentine</h1>
            <h3 className="pt-0">Fullstack(JavaScript) Graphist</h3>
            
            <p className="text-bold pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis a iusto voluptatem iste reprehenderit minus, fugiat est, nemo saepe quisquam rem recusandae doloremque iure ea numquam cupiditate cum corporis, nostrum neque inventore rerum aut minima beatae voluptates? Blanditiis, neque voluptates? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, omnis!</p>
           <Navbar />
          </main>
        
    </div>
    
  
  );
  }
}
 
export default Cover;