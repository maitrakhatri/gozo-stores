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
                <div class="log-in-container">

                    <form action="" method="post">
                        <div class="card shadow">

                            <h3 class="title">Log In</h3>
                            <div class="input-group">
                                <label for="email">Email address</label>
                                <input type="email" name="email" id="emailid" placeholder="admin@gozo.com" required/>
                            </div>
                            <div class="input-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" required/>
                            </div>
                            <div class="login-options">
                                <input type="checkbox" name="TnC" id="remember-cred" />Remember me <br/>
                                <a>Forgot your Password?</a>
                            </div>
                            <button class="btn btn-lightblue">Login</button>
                            <Link to="/signup"> Create New account </Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}