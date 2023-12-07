import { FaVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import "./Share.css";
function Share(){
    var style1={color:"red"};
    var style2={color:"green"};
    var style3={color:"orange"};

    return(
        <>
         <div className="share">
            <div className="sharewrapper">
                <div className="shareTop">
                    <img src="image/sachine.jpg"alt="Sumit" className="ShareProfileTag"/>
                    <input type="text" placeholder="what is in your mind ?" className="shareinputs"/>
                </div>
                <hr className="shareHr"></hr>
                <div className="sharebutton1">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <FaVideo style={style1}className="shareIcon" />
                            <span className="shareOptionText">Live video</span>
                        </div>

                        <div className="shareOption">
                            <IoMdPhotos style={style2} className="shareIcon" />
                            <span className="shareOptionText">Photo/video</span>
                        </div>

                        <div className="shareOption">
                            <MdOutlineEmojiEmotions style={style3} className="shareIcon" />
                            <span className="shareOptionText">Felling/activity</span>
                        </div>

                    </div>
                </div>

            </div>
         </div>
        </>
    )
}
export default Share;