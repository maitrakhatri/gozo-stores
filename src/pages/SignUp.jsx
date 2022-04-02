import { Link } from "react-router-dom"
import { Navbar } from "../components"
import "./css/auth.css"
import { useEffect } from "react"

export function SignUp() {

    useEffect(() => {
        document.title = "SignUp | gozo Stores";
    },[])

    return(
        <div className="signup auth">
            <Navbar />
            <main>
                <div className="sign-up-container">

                    <form action="" method="post">
                        <div className="card shadow">

                            <h3 className="title">Sign Up</h3>
                            <div className="input-group">
                                <label for="email">Email address</label>
                                <input type="email" name="email" id="emailid" placeholder="admin@gozo.com" required/>
                            </div>
                            <div className="input-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" required/>
                            </div>
                            <span className="checkbox">
                                <input type="checkbox" name="TnC" id="tnc" required />I accept all Terms & Conditions
                            </span>
                            <button className="btn btn-lightblue">Create New Account</button>
                            <Link to="/login"> Already have an account</Link>
                        </div>
                    </form>

                </div>
            </main>
        </div>
    )
}