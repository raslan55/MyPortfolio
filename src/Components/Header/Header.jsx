import {  Navbar } from "flowbite-react";
import {Link} from  'react-router'

import  "./Header.css";
export default function Header() {
  return (
    <div>
    <Navbar fluid  className="bg-zinc-950">
      <Navbar.Brand href="#">
      <span className="self-center text-xl font-semibold text-white whitespace-nowrap dark:text-white"> Raslan </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="ml-auto">
      <Link to="/">
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        </Link>
        <Navbar.Link> Work </Navbar.Link>
        <Link to="about">
        <Navbar.Link >About</Navbar.Link>
        </Link>
        <Navbar.Link href="#Contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
