import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";


export default function Home() {
  return (
    <>
<div className='lg:px-5 px-3 mt-3 lg:container lg:mx-auto'>
   <Hero/>
   <hr className='h-px my-8 bg-gray-700 border-0 dark:bg-gray-700'/>
   <Projects/>
   <hr className='h-px my-8 bg-gray-700 border-0 dark:bg-gray-700'/>
  <AboutMe/>
  </div>
    <hr className='h-px my-8 bg-gray-700 border-0 dark:bg-gray-700'/>
  <ContactMe/> 
    </>
  )
}
