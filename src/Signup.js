import {Link} from 'react-router-dom';
import "./Signup.css";

function Signup(){
    return(
        <>
        <div className="register">
            <div className="register_container">
                <h1>Sign up</h1>
                <p> it's quick and easy</p>
                <hr/>
               <div className="hr3"> 
            <from>
                <div className="row">
                    <input type="text" className="register_name"placeholder="First Name" required/>
                    <input type="text" className="register_name"placeholder="last Name" required/>

                </div>
                <center className="center">
                    <input type="email" placeholder="Email "reqired/>
                </center>
                <center className="center">
                    <input type="password" placeholder="Password"reqired/>
                </center>

                <h5 className="register_date">Date of Birth</h5>
                <div className="row">
                <div className="register_option">

                    <select className="register_date2">
                        <option value="Day">Day</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                        <option value='13'>13</option>
                        <option value='14'>14</option>
                        <option value='15'>15</option>
                        <option value='16'>16</option>
                        <option value='17'>17</option>
                        <option value='18'>18</option>
                        <option value='19'>19</option>
                        <option value='20'>20</option>
                        <option value='21'>21</option>
                        <option value='22'>22</option>
                        <option value='23'>23</option>
                        <option value='24'>24</option>
                        <option value='25'>25</option>
                        <option value='26'>26</option>
                        <option value='27'>27</option>
                        <option value='28'>28</option>
                        <option value='29'>29</option>
                        <option value='30'>30</option>
                        <option value='31'>31</option>
                    </select>
                    <select className="register_date2">
                        <option value='Day'>Month</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                        
                    </select>
                    <select className="register_date2">
                       <option value='Day'>Year</option>
                        <option value='2000'>2000</option>
                        <option value='1999'>1999</option>
                        <option value='1998'>1998</option>
                        <option value='1997'>1997</option>
                        <option value='1996'>1996</option>
                        <option value='1995'>1995</option>
                        <option value='1994'>1994</option>
                        <option value='1993'>1993</option>
                        <option value='1992'>1992</option>
                        <option value='1991'>1991</option>
                        <option value='1990'>1990</option>

                    </select>
                </div>
                </div>
                <h5 className="register_gender">Gender</h5>
                <div className="sizeing">
                    <div className="register_radiocontainer">
                        <div className="wrapper">
                            <label>Male</label>
                            <input type="radio" name="gender" value="Male"/>
                        </div>
                        <div className="wrapper">
                            <label>Female</label>
                            <input type="radio" name="gender" value="Female"/>
                        </div>
                        <div className="wrapper">
                            <label>other</label>
                            <input type="radio" name="gender" value="other"/>
                        </div>
                    </div>
                </div>
                <p className="register_policy">
                People who use our service may have uploaded your contact information to Facebook.<a href="#"> Learn more</a>.
                </p>
                <p className="register_policy">
                       By clicking Sign Up, you agree to our <span><a href="#"> Terms</a>, <a href="#">Privacy Policy</a></span> and <span> 
                      <a href="#"> Cookies Policy</a></span>. You may receive SMS notifications from us and can 
                       opt out at any time.
                </p>
                <center>
                    <button className="button" type="submit">Sign Up</button>
                </center>
                <center>
                    <Link to="/" href="#"><p className="register_login">Already Have an account?</p></Link>
                </center>
            </from>
            </div>
        </div>
        </div>
        </>
    )
}
export default Signup;