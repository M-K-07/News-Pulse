
const Navbar = ({setCategory}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <a
          className="navbar-brand p-2"
          style={{ fontSize: "23px", fontWeight: "bold" }}
          href="/"
        >
          <span style={{ color: "cyan" }}>News</span> Pulse
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item mx-2 " >
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item mx-2" >
              <a className="nav-link" style={{cursor:"pointer"}} onClick={()=>{
                setCategory("sports");
                window.scrollTo({ top: 0, behavior: "smooth" });}}>
                Sports
              </a>
            </li>
            <li className="nav-item mx-2" >
              <a className="nav-link" style={{cursor:"pointer"}} onClick={()=>{
                setCategory("business");
                window.scrollTo({ top: 0, behavior: "smooth" });}}>
                Business
              </a>
            </li>
            <li className="nav-item mx-2" >
              <a className="nav-link" style={{cursor:"pointer"}} onClick={()=>{
                setCategory("entertainment");
                window.scrollTo({ top: 0, behavior: "smooth" });}}>
                Entertainment
              </a>
            </li>
            <li className="nav-item mx-2" >
              <a className="nav-link" style={{cursor:"pointer"}} onClick={()=>{
                setCategory("health");
                window.scrollTo({ top: 0, behavior: "smooth" });}}>
                Health
              </a>
            </li>
            <li className="nav-item mx-2" >
              <a className="nav-link" style={{cursor:"pointer"}} onClick={()=>{
                setCategory("science");
                window.scrollTo({ top: 0, behavior: "smooth" });}}>
                Science
              </a>
            </li>
            <li className="nav-item mx-2" >
              <a className="nav-link" style={{cursor:"pointer"}} onClick={()=>{
                setCategory("technology");
                window.scrollTo({ top: 0, behavior: "smooth" });}}>
                Technology
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
