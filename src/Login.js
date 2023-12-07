import {Link} from 'react-router-dom';

import "./Login.css";
function Login(){
    return (
        <>
        <div className="Login">
            <div className="spacebook">
                <div className="spacebooktext">
                    Spacebook
                </div>
                <div className="title">
                     Facebook helps you connect and share <br></br>with the people in your life.
                </div>
            </div>
            <div className="xyz">
                <div className="Logincontainer">
                <div classNme="Logindetails">
                    <input type="email" placeholder="Email or phone number" name="email"></input>
                    <input type="password" placeholder="Password" name="password"></input>
                    <Link to="/home" className="btn"><strong>Log in</strong></Link>

                </div>
                <div className="forget">
                    <a href="#">Forgotten password?</a>
                    <hr/>
                    <Link to='/signup'className="btns">Create new account</Link>
                </div>
                
                </div>
                <div className="creatpage"> <a href="#">Create a Page </a> for  a celebrity, brand or business.
            
                </div>
                </div>
            
        </div>
        </>
    )
   
}
export default Login;