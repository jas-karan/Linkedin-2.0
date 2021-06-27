import React from 'react'
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("I made a clone", "Top news - it is great")}
            {newsArticle("Coronavirus updates", "Top news - 868 recovered")}
            {newsArticle("is redux too good?", "Code - 1200 readers")}
            {newsArticle("Tesla hits new highs", "Cars & autos - 380 readers")}
            {newsArticle("I am doing good", "Top news - it is great")}

        </div>

    )
}

export default Widgets
