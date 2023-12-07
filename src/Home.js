import Leftbar from "./Leftbar.js";
import Rightbar from "./Rightbar.js";
import Topbar from "./Topbar.js";
import Centerbar from "./Centerbar.js";
import "./Home.css";
function Home(){
    return (
    <>
    <div>
        <Topbar/>
    </div>
    <div className="homeContanier">
        <Leftbar/>
        <Centerbar/>
        <Rightbar/>
    </div>
    </>
    )
}
export default Home;