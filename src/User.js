import React from "react";
import { selectUser } from "./userSlice";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import "./AppEntry.css";
import Header from "./Header";

export function User () {
    const user = useSelector(selectUser);

    return(
        <div>
            {!user ? (<Login />) : (
            <div className="AppEntry">
                <Header />
                <div className='appentry-body'>
                    <Sidebar />
                    <Feed />
                </div>
            </div>
            )}
        </div>
    );
}