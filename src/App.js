import "./App.css";
import profile from "./images/profile.jpg";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [isVisible, setIsVisible] = useState({
    ischatbox: "visually-hidden",
  });
  const [sendMessage, setSendMessage] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "Hi Praveen,\n",
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
  function handleSubmit(event) {
    event.preventDefault();
    const url = "https://portfolionode-guui.onrender.com/bot";
    axios
      .post(url, sendMessage)
      .then((res) => {
        alert("Message sent successfully");
      })
      .catch((error) => {
        alert("Error in sending message" + error);
      });
    visibilityHidden();
    setSendMessage((prevState) => ({
      name: "",
      email: "",
      mobile: "",
      message: "Hi Praveen,\n",
    }));
  }
  return (
    <div className="mainDiv">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  <i className="fa fa-home " aria-hidden="true"></i>Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="home mx-auto " id="home">
        <div className="row content">
          <div className="col-sm-4 imagediv">
            <img className="img-thumbnail p-0" src={profile} alt="Profile" />
          </div>
          <div className="col-sm-8">
            <h4>Praveenraj Subramaniyan | Certified Full Stack Developer</h4>
            <p className="startp">
              Skilled Computer Science specialist with a robust background in
              ASP.NET Core for web app development and adept in crafting Windows
              applications using tools like Final Builder, WIX, and
              bootstrapper. Proven expertise in Azure DevOps, encompassing
              Virtual Machines, Images, Pipelines, and Azure SQL. Well-versed in
              database migration, GIT version control, and AWS Cloud.
              Additionally, completed an immersive Full Stack Developer program
              in MERN Stack from Guvi Geeks.
            </p>
            <a
              href="mailto:spr887011@gmail.com?body=Hi%20Praveen,"
              onClick="window.location=another.html"
              className="emailid"
            >
              <i className="fa fa-envelope" aria-hidden="true"></i>
              spr887011@gmail.com
            </a>
            <br></br>
            <br></br>
            <a
              href="tel:8870118193"
              onclick="window.location=another.html"
              className="emailid"
            >
              <i className="fa fa-mobile fa-2x" aria-hidden="true"></i>+91
              8870118193
            </a>
          </div>
          <div className="row icondiv mx-auto">
            <div className="col-sm-4 iconsubdiv">
              <a
                href="https://github.com/orgs/Praveenraj-subramaniyan/repositories"
                target="_blank"
              >
                <button className="btn btn-dark buttommargin">
                  <i className="fa fa-github"></i>Github
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/praveen-raj-132bbb22a/"
                target="_blank"
              >
                <button className="btn btn-primary buttommargin">
                  <i className="fa fa-linkedin"></i>LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="experience mx-auto content" id="experience">
        <div className="row content">
          <div className="col-sm-4">
            <h4>Experience</h4>
          </div>
          <div className="col-sm-8">
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
      <div className="education mx-auto content" id="education">
        <div className="row content">
          <div className="col-sm-4">
            <h4>Education</h4>
          </div>
          <div className="col-sm-8">
            <h6>1.Bachelor Of Engineering</h6>
            <p>Jun,2017 - Jun,2021</p>
            <p>
              <span className="Sideheading">Institute : </span>Mookambigai College
              of Engineering
            </p>
            <p>
              <span className="Sideheading">Branch : </span>Computer Science
            </p>
            <br />
            <h6>2.Full Stack Developer</h6>
            <p>Mar, 01 ,2023 - July, 31, 2023</p>
            <p>
              <span className="Sideheading">Institute : </span>Guvi Geeks
            </p>
            <p>
              <span className="Sideheading">Course : </span>MERN Stack
            </p>
            <p>
              <span className="Sideheading">Certificate : </span><a href="https://www.guvi.in/verify-certificate?id=54r61g6iLI7NK26930">https://www.guvi.in/verify-certificate?id=54r61g6iLI7NK26930</a>
            </p>
            
          </div>
        </div>
      </div>
      <div className="project mx-auto content" id="project">
        <div className="row content">
          <div className="col-sm-4">
            <h4>Projects</h4>
          </div>
          <div className="col-sm-8">
            <p>
              <strong>1.Project Title :</strong> Stack overflow Clone
            </p>
            <p>
              <strong>Project Description : </strong>Created a web application
              that replicates the functionality of StackOverflow, employing the
              MERN stack (MongoDB, Express.js, React, and Node.js). The
              application enables users to post questions and answers.
            </p>
            <p>
              <span className="Sideheading">Key Skills Demonstrated : </span>
              <ul>
                <li>
                  <b>Redux</b>
                </li>
                <li>Javascript programming (React JS, Node JS)</li>
                <li>API integration</li>
                <li>Responsive user interface design</li>
                <li>
                  CRUD (Create, Read, Update, Delete) operations using MongoDB.
                </li>
              </ul>
            </p>
            <p>
              <span className="Sideheading">Front-end Source code: </span>
              <a
                href="https://github.com/Praveenraj-subramaniyan/stack-overflow-client/"
                target="_blank"
              >
                https://github.com/Praveenraj-subramaniyan/stack-overflow-client
              </a>
            </p>
            <p>
              <span className="Sideheading">Back-end Source code : </span>
              <a
                href="https://github.com/Praveenraj-subramaniyan/stack-overflow-server/"
                target="_blank"
              >
                https://github.com/Praveenraj-subramaniyan/stack-overflow-server
              </a>
            </p>
            <p>
              <span className="Sideheading">Link to Project : </span>
              <a
                href="https://stack-overflow-clone-praveenraj.netlify.app/"
                target="_blank"
              >
                https://stack-overflow-clone-praveenraj.netlify.app/
              </a>
            </p>
            <br />
            <p>
              <strong>2.Project Title :</strong> Swiggy Clone
            </p>
            <p>
              <strong>Project Description : </strong>Developed a web application
              similar to Swiggy, a food delivery platform, using the MERN stack
              (MongoDB, Express.js, React, and Node.js). The application allows
              users to search for restaurants, view menus, and place orders for
              delivery.
            </p>
            <p>
              <span className="Sideheading">Key Skills Demonstrated : </span>
              <ul>
                <li>Javascript programming (React JS, Node JS)</li>
                <li>API integration</li>
                <li>Responsive user interface design</li>
                <li>
                  CRUD (Create, Read, Update, Delete) operations using MongoDB.
                </li>
              </ul>
            </p>
            <p>
              <span className="Sideheading">Front-end Source code: </span>
              <a
                href="https://github.com/Praveenraj-subramaniyan/swiggy-client/"
                target="_blank"
              >
                https://github.com/Praveenraj-subramaniyan/swiggy-client
              </a>
            </p>
            <p>
              <span className="Sideheading">Back-end Source code : </span>
              <a
                href="https://github.com/Praveenraj-subramaniyan/swiggy-server/"
                target="_blank"
              >
                https://github.com/Praveenraj-subramaniyan/swiggy-server
              </a>
            </p>
            <p>
              <span className="Sideheading">Link to Project : </span>
              <a
                href="https://master--praveenswiggycloneapp.netlify.app/"
                target="_blank"
              >
                https://master--praveenswiggycloneapp.netlify.app/
              </a>
            </p>
            <br />
            <p>
              <strong>3.Project Title :</strong> Customer Relationship
              Management - CRM
            </p>
            <p>
              <strong>Project Description : </strong>Developed a web-based CRM
              dashboard and customer management system using the MERN stack
              (MongoDB, Express.js, React, and Node.js). The application allows
              businesses to manage their customer relationships.
            </p>
            <p>
              <span className="Sideheading">Key Skills Demonstrated : </span>
              <ul>
                <li>Javascript programming (React JS, Node JS)</li>
                <li>API integration</li>
                <li>Responsive user interface design</li>
                <li>
                  CRUD (Create, Read, Update, Delete) operations using MongoDB.
                </li>
              </ul>
            </p>
            <p>
              <span className="Sideheading">Front-end Source code: </span>
              <a
                href="https://github.com/Praveenraj-subramaniyan/crm_client/"
                target="_blank"
              >
                https://github.com/Praveenraj-subramaniyan/crm_client
              </a>
            </p>
            <p>
              <span className="Sideheading">Back-end Source code : </span>
              <a
                href="https://github.com/Praveenraj-subramaniyan/crm_server/"
                target="_blank"
              >
                https://github.com/Praveenraj-subramaniyan/crm_server
              </a>
            </p>
            <p>
              <span className="Sideheading">Link to Project : </span>
              <a
                href="https://stellar-rolypoly-618bc4.netlify.app/"
                target="_blank"
              >
                https://stellar-rolypoly-618bc4.netlify.app/
              </a>
            </p>
            {/* <h6>Full Stack Developer</h6>
            <p>Mar,2023 - Inprogress</p>
            <p>
              <span className="Sideheading">Institute : </span>Guvi Geeks
            </p>
            <p>
              <span className="Sideheading">Course : </span>MERN Stack
            </p> */}
          </div>
        </div>
      </div>
      <div className="skills mx-auto mb-5 pb-5 content" id="skills">
        <div className="row content">
          <div className="col-sm-4">
            <h4>Skills</h4>
          </div>
          <div className="col-sm-8">
            <h6>Language Known</h6>
            <p>C#, JavaScript, Java, Python</p>
            <br />
            <h6>Database</h6>
            <p>SQL, MongoDB</p>
          </div>
        </div>
        <div className="chatdiv">
          <div className="chaticon">
            <i
              className="fa fa-commenting fa-4x chat "
              aria-hidden="true"
              onClick={visibilityTrue}
            ></i>
          </div>
          <div
            className={`container mt-3 chatbox img-thumbnail ${isVisible.ischatbox}`}
          >
            <form id="loginForm" onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <button
                  className="btn btn-dark closeButton"
                  onClick={visibilityHidden}
                  type="button"
                >
                  x
                </button>
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name*"
                  required
                  pattern="^\s*(\w+\s+){0,19}\w+\s*$"
                  title="Max 20 characters is allowed"
                  value={sendMessage.name}
                  name="name"
                  onChange={handleData}
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email*"
                  required
                  value={sendMessage.email}
                  name="email"
                  onChange={handleData}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile"
                  pattern="^\d{10}$"
                  title="Max 10 digit is allowed."
                  value={sendMessage.mobile}
                  name="mobile"
                  onChange={handleData}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Message*"
                  required
                  value={sendMessage.message}
                  name="message"
                  onChange={handleData}
                />
              </div>
              <button type="submit" className="btn btn-dark sendbtn">
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
