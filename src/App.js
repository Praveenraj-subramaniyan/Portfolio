import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
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
                <a class="nav-link" href="#skills">Skills</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="home mx-auto " id='home'>
        <div class="row content">
          <div class="col-sm-4">
            <img class="rounded-circle" src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/havjfrq3liewx4q6eitx' alt='Profile' />
          </div>
          <div class="col-sm-8">
            <h4>Praveenraj Subramaniyan | Certified full stack developer</h4>
            <p>To start in making a professional full stack developer resume,let's clarify the distinction between a CV and a resume. Although it may sound tricky, there are actually evident features that enable us to differentiate. The features are namely its Content, Objective, and Length.</p>
          </div>
          <div class="row icondiv">
            <div class="col-sm-4">
              <a href='https://github.com/orgs/Praveenraj-subramaniyan/repositories'>
                <button class="btn btn-dark buttommargin">Github</button>
              </a>
              <a href='https://www.linkedin.com/in/praveen-raj-132bbb22a/'>
                <button class="btn btn-primary buttommargin">LinkedIn</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="experience mx-auto content" id='experience'>
        <div class="row content">
          <div class="col-sm-4">
            <h4>Work Experience</h4>
          </div>
          <div class="col-sm-8">
            <h6>Software Developer - <spam>Syncfusion Software</spam></h6>
            <p>Nov.2021 - Mar.2023</p>
          </div>
        </div>
      </div>
      <div class="education mx-auto content" id='education'>
        <div class="row content">
          <div class="col-sm-4">
            <h4>Education</h4>
          </div>
          <div class="col-sm-8">
            <h6>Bachelor Of Engineering</h6>
            <p>Jun.2017 - Jun.2021</p>
            <p><span class="Sideheading">Institute : </span>Mookabigai College Of Engineering</p>
            <p><span class="Sideheading">Branch : </span>Computer Science Engineering</p>
            <br />
            <h6>Full Stack Developer</h6>
            <p>Mar.2023 - Inprogress</p>
            <p><span class="Sideheading">Institute : </span>Guvi Geeks</p>
            <p><span class="Sideheading">Course : </span>MERN Stack</p>
          </div>
        </div>
      </div>
      <div class="skills mx-auto content" id='skills'>
        <div class="row content">
          <div class="col-sm-4">
            <h4>Skills</h4>
          </div>
          <div class="col-sm-8">
            <h6>Software Developer - <spam>Syncfusion Software</spam></h6>
            <p>Nov.2021 - Mar.2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
