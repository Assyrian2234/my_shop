import React, { Component } from 'react';
import "./style.css"
const Login = () =>{
    return (
        <div className="body">
           <section>
               <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>
                <div className="box">
                <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                <div className="container">
                    <div className="form">
                    <h2>Login Form</h2>
                        <form>
                            <div className="inputBox">
                                <input type="text" placeholder="Username"></input>
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder="Password"></input>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Login"></input>
                            </div>
                            <p className="forget">Forgot Password ?
                                <a href="#">Click Here</a>
                            </p>
                            <p className="forget">Don't have an account ?
                                <a href="#">Sign up</a>
                            </p>
                        </form>
                    </div>
                    </div>
                </div>
           </section>
        </div>
    )
}
export default Login;