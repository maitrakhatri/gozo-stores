import { Link } from "react-router-dom";
import { Navbar } from "../components";
import "./css/auth.css"
import { useEffect } from "react"

export function LogIn() {

    useEffect(() => {
        document.title = "LogIn | gozo Stores";
    },[])

    return (
        <div className="login auth">
            <Navbar />

            <main>
                <div className="log-in-container">

                    <form action="" method="post">
                        <div className="card shadow">

                            <h3 className="title">Log In</h3>
                            <div className="input-group">
                                <label for="email">Email address</label>
                                <input type="email" name="email" id="emailid" placeholder="admin@gozo.com" required/>
                            </div>
                            <div className="input-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" required/>
                            </div>
                            <div className="login-options">
                                <input type="checkbox" name="TnC" id="remember-cred" />Remember me <br/>
                                <span>Forgot your Password?</span>
                            </div>
                            <button className="btn btn-lightblue">Login</button>
                            <Link to="/signup"> Create New account </Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}