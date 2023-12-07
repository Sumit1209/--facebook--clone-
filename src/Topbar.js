import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LiaVideoSolid } from "react-icons/lia";
import { GoArchive } from "react-icons/go";
import { RiGroup2Line } from "react-icons/ri";
import { CgGames } from "react-icons/cg";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import "./Topbar.css";
import { FaFacebook } from "react-icons/fa";
function Topbar(){
    return(
        <>
        <div className="topbarcontanier">
            <div className="topbarleft">
                <div className="logo">
                    <span className="logo1"><FaFacebook /></span>
                </div>
                <div className="searchbar">
                    <IoIosSearch className="seachIcon"/>
                     <input type="text" className="searchinput"placeholder="search for friend or post"/> 
                </div> 
            </div>
            <div className="topbarCenter">
                <div className="topbarIconItems">
                <abbr title="Home" className="acronymTag"><IoHomeOutline /></abbr> 
                </div>
                <div className="topbarIconItems">
                   <abbr title="Video"><LiaVideoSolid /></abbr>
                </div>
                <div className="topbarIconItems">
                    <abbr title="Marketplace"><GoArchive /></abbr>
                </div>
                <div className="topbarIconItems">
                    <abbr title="Groups"><RiGroup2Line /></abbr>
                </div>
                <div className="topbarIconItems">
                    <abbr title="Gaming"><CgGames /></abbr> 
                </div>
            </div>

            <div className="topbarright">
                <div className="topbarRightIconItems">
                     <abbr title="Menu"><CgMenuGridO /></abbr>
                </div>
                 <div className="topbarRightIconItems">
                      <abbr title="Messanger"><AiFillMessage /></abbr>
                </div>
                <div className="topbarRightIconItems">
                      <abbr title="Notification"><IoNotifications /></abbr>
                </div>
                <div className="topbarRightIconItems">
                    <img src="image/sachine.jpg" alt="sumit" className="topbarImg" />
                </div>

            </div>
        </div>
        </>
    )
}
export default Topbar;