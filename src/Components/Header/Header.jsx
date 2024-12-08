import {  Navbar } from "flowbite-react";

import  "./Header.css";
export default function Header() {
  return (
    <div>
          
<Navbar fluid  className="bg-zinc-950">
      <Navbar.Brand href="#">
      <span className="self-center text-white whitespace-nowrap text-xl font-semibold dark:text-white"> Raslan </span>

      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="ml-auto">
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Work</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    
    </div>
  )
}
