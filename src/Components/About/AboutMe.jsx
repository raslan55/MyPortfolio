export default function AboutMe() {
  return (
    <div>
    <section className="px-4 py-8">
    <div className="flex flex-col lg:flex-row justify-evenly">
        <div className="w-full lg:w-1/3	mr-auto ">
            <h1 className="text-white mt-20 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-relaxed md:text-5xl xl:text-6xl dark:text-white">
              About Me
            </h1>
        </div>
        <div className="w-full lg:w-2/3  mt-6  ">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="text-white text-3xl	mb-3">
            Highly talented Front End Developer with 3+ years of experience . 
            </h2>
            <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Skilled in structuring, developing, and implementing interactive UIs that prioritize user needs, 
            preferences, and performance. Proficient in HTML , CSS , JavaScript ,
             along with wireframing and prototyping in Figma.
              Passionate about collaborating with teams to create intuitive and visually
              appealing user experiences. Eager to contribute
             my expertise and continuously learn new skills. 🎨👨‍💻
            Connect with me to see my latest projects!             </p>

            <span>
            <a href="http://"className="text-gray-600 font-light underline  hover:text-white  " >More about me</a>
            </span>
          

        </div>
        </div>                
    </div>
   </section>
    </div>
  )
}

