import './NavBar.css';

function NavBar() {
    function toggleNav(e) {
      e.target.classList.toggle("change");
    }
    return (
      <nav>        
        <div className="container" onClick={toggleNav}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <h1 id="navItem" className="title">
          Open Study
        </h1>
        <button>£</button>
        <button>Cart</button>
        <input placeholder="search" />
      </nav>
    );
  }
  
  export default NavBar;
  