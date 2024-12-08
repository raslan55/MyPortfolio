import { useForm } from '@formspree/react';
import { FaRegPaperPlane } from "react-icons/fa";
import { Footer } from "flowbite-react";

import Icons from '../Icons/icons';
export default function ContactMe() {
    const [state, handleSubmit, reset] = useForm('{your-form-id}');
        if (state.succeeded) {
          return <div>Thank you for signing up!</div>;
        }
  return (
    <>
 <section className="px-4 py-8">
    <div className="flex flex-col lg:flex-row justify-evenly">
        <div className="w-full lg:w-1/3	mr-auto ">
            <h1 className="text-white mt-20 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-relaxed md:text-5xl xl:text-6xl dark:text-white">
            Let’s connect
            </h1>
            <p className='max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'> Transform Your Ideas into Reality </p>
            <Icons/>
        </div>
        <div className="w-full lg:w-2/3  mt-6  ">
        <div className="mr-auto place-self-center lg:col-span-7">
        <form className=' px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
        <div className='mb-4'>
      <label htmlFor="email" className='block text-white text-sm font-bold mb-2 capitalize'>your Email</label>
      <input id="email" type="email" name="email" className=' bg-zinc-950 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline' />
      </div>
      <div className='mb-4'>
      <label htmlFor="Message"  className='block text-white text-sm font-bold mb-2 capitalize'>your Message</label>
      <textarea name="Message" id="Message" cols="30" rows="10" className=' bg-zinc-950 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'></textarea>
      </div>
      <button type="submit" className='bg-gray-900 dark-bg flex text-white p-5 rounded-2xl shadow ml-3 transition duration-500 ease-in-out  hover:bg-gray-600' disabled={state.submitting}>
        
        
        Submit
        <FaRegPaperPlane className='ml-3' />

        </button>
    </form>

        </div>
        </div>                
    </div>
   </section>

   <Footer.Copyright href="#" by="Mahmoud Raslan" year={2024} />
 
    </>
  )
}
