import { FaGithub } from "react-icons/fa";
import { Items } from "../../assets/data/AllProjects.js";

import { HiArrowUpRight } from "react-icons/hi2";
export default function AllProjects() {
  return (
    <>

<div className="container px-6 lg:py-12 mb-10 mx-auto text-left">
          <h1 className="max-w-2xl mt-20 mb-4 text-4xl font-extrabold leading-relaxed tracking-tight text-white md:text-5xl xl:text-6xl dark:text-white">
            Projects
          </h1>

          <p className="text-white">
          projects demonstrates my skills in creating dynamic <br/> user-friendly interfaces, utilizing modern web technologies <br/> From responsive designs to interactive features,
          </p>
     </div>
     <div className="px-5 lg:container lg:mx-auto">
      {Items.map((Item) => (
        <div key={Item.id} className="flex flex-col md:flex-row my-7 mb-10 ">
          <div className="md:w-1/2 p-12 img-bg rounded-lg shadow-md mb-5">
            <img
              src={Item.ItemImg}
              alt={Item.ItemText}
              className="rounded-lg shadow-md  mx-auto"
            />
          </div>

          <div className="md:w-1/2 md:ml-8">
            <h3 className="text-lg font-semibold capitalize text-white mb-2">
              {Item.ItemTitle}
            </h3>

            <p className="text-gray-400 leading-relaxed  ">{Item.ItemDisc}</p>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-white">Project Info</h4>
              <ul className="list-none mt-2">
                <li className="text-gray-400">
                  <span className="font-semibold">Role:</span> Front-end
                  Developer
                </li>
              </ul>
            </div>

            <div className="mt-4 flex gap-7">
              {Item.ItemLink ? (
                <a
                  href={Item.ItemLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex font-light text-gray-400   leading-relaxed uppercase border-b  hover:text-white "
                >
                  Live Demo
                  <HiArrowUpRight className="ml-3" />
                </a>
              ) : null}
              {Item.ItemCode ? (
                <a
                  href={Item.ItemCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex font-light text-gray-400 leading-relaxed uppercase  border-b  hover:text-white "
                >
                  See on GitHub
                  <FaGithub className="ml-3" />
                </a>
                ) : (
                <span className=" text-gray-400   leading-relaxed uppercase border-b  hover:text-white">
                  code is confidential
                </span>
              )}
            </div>
          </div>
        </div>
      ))}


</div>
    </>
  );
}
