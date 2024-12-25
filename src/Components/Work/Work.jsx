import AllProjects from "../AllProjects/AllProjects";
import ContactMe from "../ContactMe/ContactMe";

export default function Work() {
  return (
    <>
         <AllProjects/>
         <hr className='h-px my-8 bg-gray-700 border-0 dark:bg-gray-700'/>
         <ContactMe/> 
    </>
  )
}
