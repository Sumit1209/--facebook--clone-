import Share from "./Share.js";
import Post from "./Post.js";
import "./Centerbar.css";

function Centerbar(){
    return(
        <>
          <div className="centerbar">
            <div className="centerbarwrapper">
              <Share/>
              <Post/>
             

            </div>
          </div>
        </>
    )
}
export default Centerbar;