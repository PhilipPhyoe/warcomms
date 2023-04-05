import React from "react";
import "./RecentItems.css";

function RecentItems ({title}) {
    return (
        <div className="sidebar-recentItem">
            <p>#{title}</p>
        </div>
    );
}

export default RecentItems;