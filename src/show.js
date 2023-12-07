import { MdOutlineMoreHoriz } from "react-icons/md";
import { PiUserSwitch } from "react-icons/pi";
import { LiaBullhornSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";
import "./show.css"
function Show(){
    const Contact=[{id:201,name:"Amit Kumar",ContactImg:"image/sachine.jpg",alertImg:"Amit Kumar"},
    {id:202,name:"Chesaa master",ContactImg:"image/chess.jpeg",alertImg:"Chess master"},
    {id:202,name:"Chesaa master",ContactImg:"image/chess.jpeg",alertImg:"Chess master"},
    {id:202,name:"Chesaa master",ContactImg:"image/chess.jpeg",alertImg:"Chess master"},
    {id:202,name:"Chesaa master",ContactImg:"image/chess.jpeg",alertImg:"Chess master"},
    {id:202,name:"Chesaa master",ContactImg:"image/chess.jpeg",alertImg:"Chess master"},
    {id:202,name:"Chesaa master",ContactImg:"image/chess.jpeg",alertImg:"Chess master"},
    {id:202,name:"Chesaa master",ContactImg:"image/chess.jpeg",alertImg:"Chess master"},
    {id:202,name:"Chesaa master",ContactImg:"image/chess.jpeg",alertImg:"Chess master"}]
    const contactList=Contact.map((Contact)=>{
        return <div className="contactList">
        <ul className="leftbarList">
            <li className="leftbarListItems">
                <img src={Contact.ContactImg} alt={Contact.alterImg} className="leftbarProfileIcon" />
                <span className="leftbarListItemText">{Contact.name}</span>
            </li>
        </ul>
        
    </div>

    })
    return(
        <>
           <div className="showbar">
            <div className="showbarwrapper">
                <div className="showbarTop">
                    <div className="showbarTop1">
                        <div className="showbarTop1Left">
                             <span className="showbarTopHeadingText">Your Pages and Profiles</span>
                             <MdOutlineMoreHoriz className="showbarTopRightmenu" />
                        </div>
                        
                    </div>
                    
                    <ul className="showbarTop2">
                        <li className="showbarTop2Left">
                            <img src="image/sachine.jpg" alt="sachine" className="rightbarTopImg"/>
                            <span className="showbarTopSubHeadingText1">Oracle Insitute</span>
                        </li>
                        <li className="showbarTop2Left">
                            <PiUserSwitch className="showbar2LeftIcon" />
                            <span className="showbarTopSubHeadingText2">Switch into Page</span>
                        </li>
                        <li className="showbarTop2Left">
                            <LiaBullhornSolid className="showbar2LeftIcon" />
                            <span className="showbarTopSubHeadingText2">Create Promotion</span>
                        </li>
                      
                      </ul>
                    
                  
                    <hr className="hr4"></hr>
                    <h3 className="friendrequestHeadingText">Friend Request</h3>
                    <div className="FriendRequest">
                        <ul className="FrienRequestbar">
                            <li className="FriendRequestList">
                                <img src="image/sachine.jpg" alt="sachine" className="FriendRequestImg"/>
                                <li className="FriendRequestListInside">
                                     <span className="FriendRequestListText">Mohan</span>
                                     <li className="MutualFirend">
                                        <img src="image/sachine.jpg" alt="sachine" className="MutualFriendImg"/>
                                        <span className="mutualFriendText">1 mutual friend</span>

                                     </li>
                                     <li className="ButtonConfirmation">
                                        <button className="buttonConfirm">Confirm</button>
                                        <button className="buttonDelete">Delete</button>
                                     </li>
                                    
                                 </li>
                            </li>
                        </ul>
                    </div>
                    <hr className="hr4"></hr>
                    <div className="contact">
                        <h3 className="contactHeadText">Contacts</h3>
                        <IoIosSearch className="contactIcon" />

                        <MdOutlineMoreHoriz className="contactIcon"/>
                    </div>
                    {contactList}

                </div>
            </div>
        </div>
        </>
    )
}
export default Show;