import React from "react";
import "../assets/css/login.css";
import { Link } from "react-router-dom";

function Login(){
    return(
        <>
        <section className="login-section">
    <div className="container">
        <div className="luxury-card">

            <div className="form-title">LOGIN</div>

            <form>

                <div className="mb-4">
                    <label className="form-label text-warning">EMAIL ADDRESS</label>
                    <input type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="mb-4">
                    <label className="form-label text-warning">PASSWORD</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn luxury-btn w-100 py-2">
                    SIGN IN
                </button>

                <div className="login-links">
                    <p className="mt-3">
                        <a href="#">Forgot Password?</a>
                    </p>
                    <p>
                        Don’t have an account? 
                        <a href="regestration nav.html">Create Account</a>
                    </p>
                </div>

            </form>

        </div>
    </div>
</section>
        </>
    )
}
export default Login;