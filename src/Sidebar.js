import React from 'react'
import { Avatar } from "@material-ui/core";
import "./Sidebar.css"
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className=" sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1621570359764-f297bc0d471b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar">{user.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">3,153</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,409</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("Reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("dataStructures")}
            </div>
        </div>
    )
}

export default Sidebar
