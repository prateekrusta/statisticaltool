import React from "react"
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-outer">
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown nav-li-main">
                    <a class="nav-link dropdown-toggle nav-link-main" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    File
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li class="nav-item"><input type="file"></input>
                    </li>
                    </ul>
                </li>
                <li class="nav-item dropdown nav-li-main">
                    <a class="nav-link dropdown-toggle nav-link-main" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Models
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle nav-link-outer" data-toggle="dropdown" href="#">MMM</a>
                        <ul class="dropdown-menu">
                        <a class="dropdown-item nav-link-inner" href="#">Dummy 1</a>
                        <a class="dropdown-item nav-link-inner" href="#">Dummy 2</a>
                        </ul>
                    </li>
                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle nav-link-outer" data-toggle="dropdown" href="#">JioLift</a>
                        <ul class="dropdown-menu">
                        <a class="dropdown-item nav-link-inner" href="#">Bootstrap</a>
                        <a class="dropdown-item nav-link-inner" href="#">Synthetic Control</a>
                        </ul>
                    </li>
                    </ul>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  )
};

export default Navbar;
