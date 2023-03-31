import logo from "./logo.svg";
import "./App.css";
import profile from "./images/profile.jpg";
import React, { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState({
    ischatbox: "visually-hidden",
  });
  const [sendMessage, setSendMessage] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "Hi Praveen,",
  });
  function visibilityTrue() {
    setIsVisible({
      ischatbox: "visually-true",
    });
  }
  function visibilityHidden() {
    setIsVisible({
      ischatbox: "visually-hidden",
    });
  }
  function handleData(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setSendMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div class="mainDiv">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  <i class="fa fa-home " aria-hidden="true"></i>Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">
                  Skills
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="home mx-auto " id="home">
        <div class="row content">
          <div class="col-sm-4">
            <img class="img-thumbnail" src={profile} alt="Profile" />
          </div>
          <div class="col-sm-8">
            <h4>Praveenraj Subramaniyan | Certified Full Stack Developer</h4>
            <p class="startp">
              Junior software developer with over 1+ year of experience in
              windows and web application development. Proficient in ASP.NET
              Core with experience in SQL and database migration. Skilled in
              creating new tools for updating values in a database from GitHub
              API and triggering Azure pipeline in C# using API. Familiar with
              Azure DevOps and AWS Cloud.
            </p>
            <a
              href="mailto:spr887011@gmail.com"
              onclick="window.location=another.html"
              class="emailid"
            >
              <p>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                spr887011@gmail.com
              </p>
            </a>
            <a
              href="tel:8870118193"
              onclick="window.location=another.html"
              class="emailid"
            >
              <p>
                <i class="fa fa-mobile fa-2x" aria-hidden="true"></i>+91
                8870118193
              </p>
            </a>
          </div>
          <div class="row icondiv mx-auto">
            <div class="col-sm-4">
              <a href="https://github.com/orgs/Praveenraj-subramaniyan/repositories">
                <button class="btn btn-dark buttommargin">
                  <i class="fa fa-github"></i>Github
                </button>
              </a>
              <a href="https://www.linkedin.com/in/praveen-raj-132bbb22a/">
                <button class="btn btn-primary buttommargin">
                  <i class="fa fa-linkedin"></i>LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="experience mx-auto content" id="experience">
        <div class="row content">
          <div class="col-sm-4">
            <h4>Work Experience</h4>
          </div>
          <div class="col-sm-8">
            <h6>
              Software Developer - <spam>Syncfusion Software</spam>
            </h6>
            <p>Nov,2021 - Mar,2023</p>
            <p>
              • 1+ years experience as junior software developer in syncfusion
              software
            </p>
            <p>• Web application development in ASP.NET Core</p>
            <p>
              • Create new tools for update value in database and Trigger Azure
              pipeline in C# using API
            </p>
            <p>
              • Windows application development using Final builder, WIX,
              bootstrapper
            </p>
            <p>
              • Azure DevOps – Virtual Machine , Image , Virtual Machine Scale
              Set, Pipeline and Azure SQL .
            </p>
            <p>• Database migration, GIT, AWS Cloud.</p>
          </div>
        </div>
      </div>
      <div class="education mx-auto content" id="education">
        <div class="row content">
          <div class="col-sm-4">
            <h4>Education</h4>
          </div>
          <div class="col-sm-8">
            <h6>Bachelor Of Engineering</h6>
            <p>Jun,2017 - Jun,2021</p>
            <p>
              <span class="Sideheading">Institute : </span>Mookabigai College Of
              Engineering
            </p>
            <p>
              <span class="Sideheading">Branch : </span>Computer Science
              Engineering
            </p>
            <br />
            <h6>Full Stack Developer</h6>
            <p>Mar,2023 - Inprogress</p>
            <p>
              <span class="Sideheading">Institute : </span>Guvi Geeks
            </p>
            <p>
              <span class="Sideheading">Course : </span>MERN Stack
            </p>
          </div>
        </div>
      </div>
      <div class="skills mx-auto content" id="skills">
        <div class="row content">
          <div class="col-sm-4">
            <h4>Skills</h4>
          </div>
          <div class="col-sm-8">
            <h6>Language Known</h6>
            <p>C#, JavaScript, ReactJS, Java, Python</p>
            <br />
            <h6>Database</h6>
            <p>SQL, MongoDB</p>
          </div>
        </div>
        <div class="chatdiv">
          <div class="chaticon">
            <button className="chatButton" onClick={visibilityTrue}>
              <i class="fa fa-commenting fa-5x chat " aria-hidden="true"></i>
            </button>
          </div>
          <div
            className={`container mt-3 chatbox img-thumbnail ${isVisible.ischatbox}`}
          >
            <form action="">
              <div class="mb-3 mt-3">
                <button
                  class="btn btn-dark closeButton"
                  onClick={visibilityHidden}
                  type="button"
                >
                  x
                </button>
              </div>
              <div class="mb-3 mt-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name*"
                  required
                  pattern="^\s*(\w+\s+){0,19}\w+\s*$"
                  title="Max 20 characters is allowed"
                  value={sendMessage.name}
                  name="name"
                  onChange={handleData}
                />
              </div>
              <div class="mb-3 mt-3">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email*"
                  required
                  value={sendMessage.email}
                  name="email"
                  onChange={handleData}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Mobile"
                  pattern="^\d{10}$"
                  title="Max 10 digit is allowed."
                  value={sendMessage.mobile}
                  name="mobile"
                  onChange={handleData}
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Message*"
                  required
                  value={sendMessage.message}
                  name="message"
                  onChange={handleData}
                />
              </div>
              <button type="submit" class="btn btn-dark sendbtn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
