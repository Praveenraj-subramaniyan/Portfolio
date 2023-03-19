import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div >
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#experience">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#education">Education</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Skills</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="home mx-auto " id='home'>
        <div class="row content">
          <div class="col-sm-4">
          <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/havjfrq3liewx4q6eitx' alt='Profile' />
          </div>
          <div class="col-sm-8">
            <h3>Praveenraj Subramaniyan | Certified full stack developer</h3>
            <p>To start in making a professional full stack developer resume,let's clarify the distinction between a CV and a resume. Although it may sound tricky, there are actually evident features that enable us to differentiate. The features are namely its Content, Objective, and Length.</p>
          </div>
        </div>
      </div>
      <div class="experience mx-auto content" id='experience'>
        <p>experience</p>
      </div>
      <div class="education mx-auto content" id='education'>
        <p>education</p>
      </div>
      <div class="contact mx-auto content" id='contact'>
        <p>contact</p>
      </div>
    </div>
  );
}

export default App;
