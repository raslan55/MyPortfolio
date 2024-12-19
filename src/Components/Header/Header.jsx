import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router";

import "./Header.css";
export default function Header() {
  return (
    <div>
      <Navbar fluid className="bg-zinc-950">
        <Navbar.Brand href="#">
          <span className="self-center text-xl font-semibold text-white whitespace-nowrap dark:text-white">
            <Link to="/">Raslan</Link>
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse className="ml-auto">
          <NavLink to="/">
            <Navbar.Link>Home</Navbar.Link>
          </NavLink>

          <NavLink to="work">
            <Navbar.Link> Work </Navbar.Link>
          </NavLink>
          <NavLink to="about">
            <Navbar.Link>About</Navbar.Link>
          </NavLink>
          <Navbar.Link href="#Contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
