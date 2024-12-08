import AboutMe from './Components/About/AboutMe'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import ContactMe from './Components/ContactMe/ContactMe'
function App() {
  return (
    <>
   <div className='lg:container lg:mx-auto  px-5'>
   <Header/>
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

export default App
