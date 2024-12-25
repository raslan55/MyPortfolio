import {Link} from  'react-router'


export default function AboutMe() {
  return (
    <div>
    <section className="px-4 lg:py-8" >
    <div className="flex flex-col lg:flex-row justify-evenly">
        <div className="w-full mr-auto lg:w-1/3 ">
            <h1 className="max-w-2xl lg:mt-20 mt-6  lg:mb-4 text-4xl font-extrabold leading-relaxed tracking-tight text-white md:text-5xl xl:text-6xl dark:text-white">
              About Me
            </h1>
        </div>

        <div className="w-full mt-6 lg:w-2/3 ">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="mb-3 text-3xl text-white">
            Highly talented Front End Developer with 3+ years of experience . 
            </h2>
            <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Skilled in structuring, developing, and implementing interactive UIs that prioritize user needs, 
            preferences, and performance. Proficient in HTML , CSS , JavaScript ,
             along with wireframing and prototyping in Figma. 
              Passionate about collaborating with teams to create intuitive and visually
              appealing user experiences. Eager to contribute
             my expertise and continuously learn new skills. 🎨👨‍💻
               Let&apos;s create something amazing together!  
            </p>
            
            <span>
           <Link to="about" className="font-light text-gray-600 underline hover:text-white" >
             More about me
           </Link> 
            </span>
        </div>
        </div>                
    </div>
   </section>
    </div>
  )
}

