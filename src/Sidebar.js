import { Avatar } from "@mui/material";
import React from "react";
import './Sidebar.css';
import Logo from "../src/images/Logo.png";
import Cover from "../src/images/cover.jpg"
import RecentItems from "./RecentItems";

function Sidebar (){
    
    return(
        <div className="sidebar">
            <div className="sidebar-top">
                <img className="sidebar-cover" src={Cover} alt="" />
                <Avatar className="sidebar-avatar" src={Logo}/>
                <h2>Profile Name</h2>
                <h4>profileemail@gmail.com</h4>
                
                <div className="sidebar-stat">
                    <p>Who viewed you?</p>
                    <p className="sidebar-statnumber">2,543</p>
                </div>
                <div className="sidebar-stat">
                    <p>Post Views</p>
                    <p className="sidebar-statnumber">1,234,234</p>
                </div>
            </div>
            <div className="sidebar-bottom">
                <h4>Recent Activities</h4>
                <RecentItems title="reactjs" />
                <RecentItems title="programming" />
                <RecentItems title="digital" />
                <RecentItems title="marketing" />
                <RecentItems title="web" />
            </div>
            
        </div>
    );
}

export default Sidebar;