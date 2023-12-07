import { FaUserFriends } from "react-icons/fa";
import { RiMemoriesFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import { RiGroup2Line } from "react-icons/ri";
import { PiVideoFill } from "react-icons/pi";
import { GoArchive } from "react-icons/go";
import { MdRssFeed } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import './Leftbar.css';

function Leftbar(){
    return (
        <>

        <div className="leftbar">
            <div className="leftbarwrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItems">
                        <img src="image/sachine.jpg" alt="sumit" className="leftbarProfileIcon" />
                        <span className="leftbarListItemText">Sumit Kumar</span>
                    </li>
                    <li className="leftbarListItems">
                        <FaUserFriends className="leftbarIcon" />
                        <span className="leftbarListItemText">friends</span>

                    </li>
                    <li className="leftbarListItems">
                        <RiMemoriesFill className="leftbarIcon" />
                        <span className="leftbarListItemText">Memories</span>
                    </li>
                    <li className="leftbarListItems">
                        <FaBookmark className="leftbarIcon" />
                        <span className="leftbarListItemText">Saved</span>
                    </li>
                    <li className="leftbarListItems">
                        <RiGroup2Line className="leftbarIcon" />
                        <span className="leftbarListItemText">Groups</span>
                    </li>
                    <li className="leftbarListItems">
                        <PiVideoFill  className="leftbarIcon" />
                        <span className="leftbarListItemText">Video</span>
                    </li>
                    <li className="leftbarListItems">
                        <GoArchive className="leftbarIcon" />
                        <span className="leftbarListItemText">market place</span>
                    </li>
                    <li className="leftbarListItems">
                        <MdRssFeed className="leftbarIcon" />
                        <span className="leftbarListItemText">Feeds</span>
                    </li>
                    <li className="leftbarListItems" >
                        <MdOutlineKeyboardArrowDown className="leftbarIcon2" />
                        <span className="leftbarListItemText">Show More</span>
                    </li>
                </ul>
                <hr className="leftbarhr"></hr>
                <h3>Your shortcuts</h3> 
                <ul className="leftbarList">
                    <li className="leftbarListItems">
                        <img src="image/chess.jpeg" alt="sumit" className="leftbarIcon" style={{width:"39px",height: "45px"}}/>
                        <span className="leftbarListItemText">Chess Online</span>
                    </li>
                    <li className="leftbarListItems">
                        <img src="image/candy.jpeg" alt="sumit" className="leftbarIcon" style={{width:"39px",height: "45px"}}/>
                        <span className="leftbarListItemText">Candy Crush Saga</span>
                    </li>
                    <li className="leftbarListItems">
                        <img src="image/oracle.jpeg" alt="sumit" className="leftbarIcon" style={{width:"39px",height: "45px"}}/>
                        <span className="leftbarListItemText">Oracle Institute</span>
                    </li>
                </ul>    
            </div>
        </div>
        </>
    )
}


export default Leftbar;