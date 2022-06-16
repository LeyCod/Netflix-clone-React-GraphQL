const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list-container">
        <li>
          <div className="logo"></div>
        </li>
        <li>
          <select name="select" className="btn-select-lenguage">
            <option value="english" selected>English</option>
            <option value="spanish">Spanish</option>
          </select>
          <a className="btn-Sign-In">Sign In</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
