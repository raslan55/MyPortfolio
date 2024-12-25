import myImage from "../../assets/Mahmoud-Raslan - Web Developer.jpg";
import Icons from "../MyIcons/Icons";
export default function Hero() {
  return (
    <div>
      <section className="px-4 lg:py-8 mt-20">
        
        <div className= "flex flex-col lg:flex-row justify-evenly ">
          <div className="w-full mr-auto lg:w-1/2">
            <h1 className="max-w-2xl mt-16 lg:mt-20 mb-4 text-3xl capitalize font-extrabold leading-relaxed tracking-tight text-white md:text-5xl xl:text-6xl dark:text-white">
              hi, i am Mahmoud Raslan
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Highly talented Front End Developer with years of experience
              crafting user-centric interfaces. Skilled in structuring,
              developing, and implementing interactive UIs that prioritize user
              needs
            </p>

            <Icons />

          </div>

          <div className="mt-10 lg:mt-0 w-full mr-auto lg:w-1/2 ">
            <img
              className="shadow-lg rounded-3xl"
              src={myImage}
              alt="myImage"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
