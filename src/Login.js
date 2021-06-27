import "./Login.css";
import React, { useState } from 'react'
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) return alert("Please enter a full name!");

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoUrl: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic,
                        }))
                    })
            }).catch(error => alert(error.message))

    };

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,
                }))
            }).catch(error => alert(error));
    };

    return (
        <div className="login">
            <img src="http://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />
            <form>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name (required If registering)" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="email" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="Password" placeholder="Password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
