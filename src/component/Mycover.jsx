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
          <main className="pt-5 col-left pl-5">
            <h1>Eze Valentine</h1>
            <h3 className="pt-0">Fullstack(JavaScript) Graphist</h3>
            
            <p className="text-bold pt-4 pull-left d-flex align-left">I am a 70% self taught Innovative tech mind with 2 years of experience learning and working as a computer programmer. I am very much capable of variety of technology and software solutions, and managing databases. A valuable team member who has experience diagnosing problems and developing solutions. A manageable level networking systems and working with mainframe computers. Talented leader/follower with unique ideas and a history of successful contributions in the field.</p>
           <Navbar />
          </main>
        
    </div>
    
  
  );
  }
}
 
export default Cover;