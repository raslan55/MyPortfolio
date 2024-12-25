import { useForm, ValidationError } from "@formspree/react";
import { FaRegPaperPlane } from "react-icons/fa";
import Icons from "../MyIcons/Icons";

export default function ContactMe() {
  const [state, handleSubmit] = useForm("mnnnqzyb");

  return (
    <>
      <section className="px-4 lg:py-8" id="Contact">
        <div className="flex flex-col lg:flex-row justify-evenly">
          <div className="w-full mr-auto lg:w-1/3 ">
            <h1 className="max-w-2xl lg:mt-20 mb-4 text-4xl font-extrabold leading-relaxed tracking-tight text-white md:text-5xl xl:text-6xl dark:text-white">
              Let’s connect
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
               
              Transform Your Ideas into Reality 
            </p>
            <Icons />
          </div>

          <div className="w-full lg:mt-6 lg:w-2/3 ">
            <div className="mr-auto place-self-center lg:col-span-7">
              <form className="lg:px-8 pt-6 lg:pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold text-white capitalize"
                  >
                     
                    your Email 
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none bg-zinc-950 focus:outline-none focus:shadow-outline focus:border-slate-200"
                  />
                  <ValidationError
                   className="text-white underline"
                    field="email"
                    prefix="Email"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="Message"
                    className="block mb-2 text-sm font-bold text-white capitalize"
                  >
                     
                    your Message 
                  </label>
                  <textarea
                    name="Message"
                    id="Message"
                    cols="30"
                    rows="10"
                    className="w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none bg-zinc-950 focus:outline-none focus:shadow-outline focus:border-slate-200"
                  ></textarea>
                  <ValidationError
                  className="text-white underline"
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  className="flex p-5 ml-3 text-white transition duration-500 ease-in-out bg-gray-900 shadow dark-bg rounded-2xl hover:bg-gray-600"
                  disabled={state.submitting}
                >
               {state.submitting ? "Submiting" : "Submit"}   
                  <FaRegPaperPlane className="ml-3" />
                </button>

                {state.succeeded ? ( 
                  <div
                    className="mt-4 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                    role="alert"
                  >
                    <span className="font-medium"> Thank You </span> Your message has been sent successfully
                  </div>
                ) 
                : null}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
