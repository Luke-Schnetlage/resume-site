import logo from './logo.svg';
import './App.css';


//this is the start, right here

export function Navbar() {
  return (
    <div className="navBar">
      <header className="nav-header">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </header>
    </div>
  );
}

export function HomePage(){
  return (
    <div className="homePage">
      <p>homepage</p>
    </div>
  );
}


