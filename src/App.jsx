import { useSelector } from "react-redux";
import "./App.css";
import FetchWeather from "./components/FetchWeather";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Loading from "./components/Loading";

function App() {

  const fetchStatus = useSelector((store) => store.fetch)

  return (
    <>
    <div className="mobile-warning">Mobile Users not Allowed</div>
      <div className="media flex justify-center items-center flex-row">
        <div className="m-8 w-[5%]">
          <Sidebar />
        </div>
        <FetchWeather></FetchWeather>
        <div className="w-[95%] m-8">
          {/* <MainContainer weatherInfo={weatherInfo} /> */}
          {fetchStatus.fetching ? <Loading/> : <Outlet/>}
        </div>
      </div>
    </>
  );
}

export default App;
