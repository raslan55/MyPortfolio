import MyCv from '../../assets/file/Mahmoud raslan cv 2024.pdf'
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function Icons() {
  return (
    <> 
    <div className="flex Icons mt-5">
     <ul className="flex flex-wrap justify-start   text-white "> 
     <li className="p-3"><a className="text-2xl" href="https://www.linkedin.com/in/mahmoud-raslan-382a29157/" target="_blank" rel="noopener noreferrer"> <BiLogoLinkedinSquare   />
     </a>
     </li>
     
    <li className="p-3 "><a className="text-2xl" href="https://github.com/raslan55" target="_blank" rel="noopener noreferrer">   <FaGithub  />
       </a>
    </li>
    <li className="p-3">
        <a href="https://api.whatsapp.com/send?phone=01127990329"  className="text-2xl" target="_blank" rel="noopener noreferrer">  <FaWhatsapp  />
        </a>
     </li>
     
     </ul>

     <a href = {MyCv} download  className="bg-gray-900 flex text-white p-5 rounded-2xl shadow ml-3 transition duration-500 ease-in-out  hover:bg-gray-600 ">
     Download Resume
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </a>
    </div>
    </>
  )
}

