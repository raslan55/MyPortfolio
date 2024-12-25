import MySkills from "../../assets/data/MySkills.json";

export default function Capabilities() {
  return (
    <div>
      <section className="px-4 lg:py-8" >
        <div className="flex flex-col lg:flex-row justify-evenly">
          <div className="w-full mr-auto lg:w-1/3 ">
            <h2 className="max-w-2xl lg:mt-20 mt-5  lg:mb-4 text-5xl font-extrabold leading-relaxed tracking-tight text-white md:text-5xl xl:text-5xl dark:text-white">
              My Capabilities
            </h2>
          </div>
          <div className="w-full mt-6 lg:w-2/3 ">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h2 className="mb-3 lg:text-3xl text-white">
                I am always looking for opportunities to expand my skill set and
                stay on the cutting edge of front-end development.
              </h2>

              <div className="py-10 Capabilities flex flex-wrap gap-5">
                {MySkills.Skills.map((Item) => (
                  <span
                    key={Item.i}
                    className="p-4 text-white border-2 border-gray-600 border-solid rounded-2xl ml-3 "
                  >
                    {Item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
