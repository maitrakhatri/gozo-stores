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
                <div class="sign-up-container">

                    <form action="" method="post">
                        <div class="card shadow">

                            <h3 class="title">Sign Up</h3>
                            <div class="input-group">
                                <label for="email">Email address</label>
                                <input type="email" name="email" id="emailid" placeholder="admin@gozo.com" required/>
                            </div>
                            <div class="input-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" required/>
                            </div>
                            <span class="checkbox">
                                <input type="checkbox" name="TnC" id="tnc" required />I accept all Terms & Conditions
                            </span>
                            <button class="btn btn-lightblue">Create New Account</button>
                            <Link to="/login"> Already have an account</Link>
                        </div>
                    </form>

                </div>
            </main>
        </div>
    )
}