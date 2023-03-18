import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="body">
     <div class="header">
      <div class="header-right">
      {/* <img  src="../public/favicon.ico" alt='Home'/> */}
      <a href="#home">Home</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
      </div>
     </div>
    <div className='home' id='contachomet'>
       <p>----------</p>
    </div>
    <div className='experience' id='experience'>
    <p>----------</p>
    </div>
    <div className='education' id='education'>
    <p>----------</p>
    </div>
    <div className='contact' id='contact'>
    <p>----------</p>
    </div>
  </div>
  );
}

export default App;
