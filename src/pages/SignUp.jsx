import { Link } from "react-router-dom"
import { Navbar } from "../components"
import "./css/auth.css"
import { useEffect } from "react"
import { useAuth } from "../context"

export function SignUp() {

    useEffect(() => {
        document.title = "SignUp | gozo Stores";
    },[])

    const { dispatch, signupHandler } = useAuth();

    return(
        <div className="signup auth">
            <Navbar />
            <main>
                <div className="sign-up-container">

                    <form action="" method="post">
                        <div className="card shadow">

                            <h3 className="title">Sign Up</h3>
                            <div className="input-group">
                                <label for="email">First Name</label>
                                <input type="text" name="fname" id="fname" placeholder="Maitra" required onChange={(e) => dispatch({type: "FNAME", payload: e.target.value})}/>
                            </div>
                            <div className="input-group">
                                <label for="email">Last Name</label>
                                <input type="text" name="lname" id="lname" placeholder="Khatri" required onChange={(e) => dispatch({type: "LNAME", payload: e.target.value})}/>
                            </div>
                            <div className="input-group">
                                <label for="email">Email address</label>
                                <input type="email" name="email" id="emailid" placeholder="maitrakhatri@gozo.com" required  onChange={(e) => dispatch({type: "EMAIL", payload: e.target.value})}/>
                            </div>
                            <div className="input-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password"  onChange={(e) => dispatch({type: "PASS", payload: e.target.value})}/>
                            </div>
                            {/* <span className="checkbox">
                                <input type="checkbox" name="TnC" id="tnc" required />I accept all Terms & Conditions
                            </span> */}
                            <button className="btn btn-lightblue" onClick={(e) => signupHandler(e)}>Create New Account</button>
                            <Link to="/login"> Already have an account</Link>
                        </div>
                    </form>

                </div>
            </main>
        </div>
    )
}