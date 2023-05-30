import React from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
  ArrowBackOutlined,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { persistor } from "../../redux/admin";
import { Link } from "react-router-dom";

export default function Topbar() {
  const handleClick = () => {
    persistor.purge();
    window.location.reload(false);
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">inventory</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <button onClick={() => window.print()}>PDF</button>
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
          <button
            style={{
              marginLeft: "17px",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <ArrowBackOutlined
              style={{
                width: "10px",
                height: "10px",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
