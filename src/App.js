import './App.css';
require("typeface-inter");

//this is the start, right here

function Navbar() {
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

function Title(){
  return (
    <>
      <div className = "head-text">
        <div className = "head-image">
          <img src = {require ('./assets/code.png')} alt = "javascript code" />
        </div>
          <div class='text-on-image' >
             <h1> Luke Schnetlage </h1>
             <p> Software developer</p>
          </div>
      </div>
    </>
    
  );
}


export default function HomePage(){
  return (
    <>
    <Navbar sticky="top" />
    <Title />
    
    </>
  );
}


