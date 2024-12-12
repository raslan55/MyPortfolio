import AboutMe from "../AboutMe/AboutMe";
import myImage from '../../assets/My-IMG.jpeg';

export default function About() {
  return (
    <>
    <div className="container mx-auto">
      
        <AboutMe/>

    </div>
    
    <div className="container w-3/4 mx-auto ">
    <img className="w-1/2 mx-auto mt-5 shadow-lg rounded-3xl" src={myImage} alt="myImage"/>
     </div>  
     
</>
  )
}
