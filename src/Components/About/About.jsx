import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Capabilities from "../MyCapabilities/Capabilities";
import Experience from "../MyExperience/Experience";

export default function About() {
  return (
    <>
    <div className="container mx-auto mt-6">
        <AboutMe/>
        <hr className='h-px my-8 bg-gray-700 border-0 dark:bg-gray-700'/>
        <Capabilities/>
        <hr className='h-px my-8 bg-gray-700 border-0 dark:bg-gray-700'/>
        <Experience/>
        <hr className='h-px my-8 bg-gray-700 border-0 dark:bg-gray-700'/>
       <ContactMe/> 
    </div>
       

     
</>
  )
}
