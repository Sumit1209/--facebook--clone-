function listname{
    const person=[{id:1,name:"Chess Master",imgage1:"chess.jpeg",time:"5min ago",
    posttext:"hey i am good player of chess"},{id:2,name:"Candy",imgage1:"candy.jpeg",
    time:"1 hr ago",posttext:"I am Very sweet"},
    {id:3,name:"Sumit Kumar",imgage1:"20210822_123043.jpg",time:"5min ago",
    posttext:"hey i am Sumit kumar"}]

    const persondetails=person.map((person)=>{
        return 
    })
}


<div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="sachine.jpg" className="postProfileImg"/>
                        <div className="postuserDetail">
                           <span className="postUserName">Sachine Tendulkar</span><br></br>
                           <span className="postDate">10 mins ago</span>
                        </div>
                    </div>
                    <div className="postTopRight">
                         <MdOutlineMoreHoriz className="postTopRightmenu" />
                         <RxCross2 className="postTopRightmenu"/>
                    </div>
                </div>
                <hr className="hr3"></hr>

                <div className="postCenter">
                    <span className="postText">The only thing we have is the MOMENT</span>
                    <img src="sachine.jpg" alt="Sachine" className="postImg"/>
                </div>
                <hr className="hr3"></hr>

                <div className="postBottom1">
                    <div className="postButtonLeft1">
                          <AiFillLike  className="LikeButton"/>
                          <span className="postlikeCounter">256</span>
                    </div>
                    <div className="postButtonRight1">
                            <span className="postlikeCounter">2 comments</span>
                            <span className="postlikeCounter">5 share</span>
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
        