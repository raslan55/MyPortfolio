import { Link } from "react-router";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

export default function Projects() {
  return (
    <div>
      <section>
        <div className="container px-6 lg:py-12 mb-10 mx-auto text-left">
          <h1 className="max-w-2xl mt-20 mb-4 text-4xl font-extrabold leading-relaxed tracking-tight text-white md:text-5xl xl:text-6xl dark:text-white">
            Featured Projects
          </h1>

          <p className="text-white">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>

        <PortfolioCard />

        <div className="text-center mt-5">
          <Link
            to="work"
            className="font-light text-xl leading-relaxed  capitalize text-gray-600 border-b hover:text-white"
          >
            see More
          </Link>
        </div>
      </section>
    </div>
  );
}
