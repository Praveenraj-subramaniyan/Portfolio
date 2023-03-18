import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="body">
     <div class="header">
      <div class="header-right">
      <img  src="" alt='Home'/>
      <a href="#home">Home</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
      </div>
     </div>
     <div className='content'>
    <div className='home' id='home'>
       <p>----------home</p>
    </div>
    <div className='experience' id='experience'>
    <p>----------experience</p>
    </div>
    <div className='education' id='education'>
    <p>----------education</p>
    </div>
    <div className='contact' id='contact'>
    <p>----------contact</p>
    </div>
  </div>
  </div>
  );
}

export default App;
