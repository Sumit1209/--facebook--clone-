import { MdOutlineMoreHoriz } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import "./Post.css"
function Post(){
    const person= [
        {id:1,name:"Chess Master",imgage1:"image/chess.jpeg",time:"5min ago",posttext:"hey i am good player of chess",Like:25,comment:1,share:5},
        {id:2,name:"Candy",imgage1:"image/candy.jpeg",time:"1 hr ago",posttext:"I am Very sweet",Like:125,comment:10,share:10},
        {id:3,name:"Sumit Kumar",imgage1:"image/DSC04194.JPG",time:"5min ago",posttext:"hey i am Sumit kumar",Like:225,comment:50,share:50}]

    const persondetails=person.map((person)=>{
        return <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={person.imgage1} className="postProfileImg"/>
                    <div className="postuserDetail">
                       <span className="postUserName">{person.name}</span><br></br>
                       <span className="postDate">{person.time}</span>
                    </div>
                </div>
                <div className="postTopRight">
                     <MdOutlineMoreHoriz className="postTopRightmenu" />
                     <RxCross2 className="postTopRightmenu"/>
                </div>
            </div>
            <hr className="hr3"></hr>

            <div className="postCenter">
                <span className="postText">{person.posttext}</span>
                <img src={person.imgage1} alt="Sachine" className="postImg"/>
            </div>
            <hr className="hr3"></hr>

            <div className="postBottom1">
                <div className="postButtonLeft1">
                      <AiFillLike  className="LikeButton"/>
                      <span className="postlikeCounter">{person.Like}</span>
                </div>
                <div className="postButtonRight1">
                        <span className="postlikeCounter">{person.comment} comments</span>
                        <span className="postlikeCounter">{person.share} share</span>
                </div>
            </div>

                <hr className="hr3"></hr>
                <div className="postBottom2">
                    <div className="postButtonLeft2">
                        <AiOutlineLike className="counterButton"/>
                        <span className="postlikeCounter">like</span>
                    </div>
                    <div className="postButtonCenter">
                         <FaRegComment className="counterButton"/>
                        <span className="postlikeCounter">comment</span>

                    </div>
                    <div className="postButtonRight2">
                         <PiShareFatThin className="counterButton"/>
                         <span className="postlikeCounter">share</span>

                    </div>
                </div>
                <hr className="hr3"></hr>

        </div>
    </div>
    })
    return(
        <>
        {persondetails}
        </>
    )
}
export default Post;