import { CiBoxList, CiMap, CiSettings } from "react-icons/ci";
import { TiWeatherSnow } from "react-icons/ti";
import { WiDayCloudyWindy } from "react-icons/wi";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { expandAction } from "../store/expandSlice";

export default function Sidebar() {

const dispatch = useDispatch();
  const currURL = useLocation();



  return (
    <>
      <div>
        <div className="icon w-[140%] bg-[#202B3B] text-white-g flex  h-[92vh] rounded-lg flex-col items-center p-8 ">
          <TiWeatherSnow className="size-12 bg-transparent  text-white" />

          <div className="belowicon mt-20 bg-transparent space-y-4 w-28 h-[60vh] flex flex-col items-center p-2  ">

            <Link to="/" className={`bg-transparent  flex flex-col justify-center items-center  ${currURL.pathname === "/" && "text-[#0095ff]"} group hover:bg-[#364a66] transition duration-400 ease-in-out cursor-pointer  w-full p-2 rounded-lg`} onClick={() => dispatch(expandAction.contract())}>
              <WiDayCloudyWindy className="text-[2.5rem] bg-transparent" />
              <p className="text-[0.85rem] mt-1 bg-transparent ">Home</p>
            </Link>

            
            <Link to="/cities" className={`bg-transparent flex flex-col justify-center items-center group hover:bg-[#364a66] transition duration-400 ease-in-out cursor-pointer rounded-lg w-full p-2  ${currURL.pathname === "/cities" && "text-[#0095ff]"}`}>
              <CiBoxList className="text-[2.5rem] bg-transparent" />
              <p className="text-[0.85rem] mt-1 bg-transparent ">Cities</p>
            </Link>
            <Link to="/dashboard" className={`bg-transparent flex flex-col  ${currURL.pathname === "/dashboard" && "text-[#0095ff]"} justify-center items-center group hover:bg-[#364a66] transition duration-400 ease-in-out cursor-pointer rounded-lg w-full p-2`}>
              <CiMap className="text-[2.5rem] bg-transparent" />
              <p className="text-[0.85rem] mt-1 bg-transparent ">Graphs</p>
            </Link>
            <div  className=" bg-transparent flex flex-col justify-center items-center group hover:bg-[#364a66] transition duration-400 ease-in-out cursor-pointer rounded-lg w-full p-2">
              <CiSettings className="text-[2.5rem] bg-transparent" />
              <p className="text-[0.85rem] mt-1 bg-transparent ">Settings</p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
