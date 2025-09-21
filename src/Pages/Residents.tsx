import Navbar from "../Components/Navbar";

import ResidentForm from "../Components/ResidentForm";
import residents from "../assets/residents.jpg"


const Residents = () => {
  return (
    <>
    <Navbar/>
    <div className="relative">
      <img src={residents} alt="" className="absolute" />
      
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center h-180">
  
      <ResidentForm/>
    </div>
    </>
  )
}

export default Residents
