import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  ArrowRight,
  ArrowLeft,
  BookSharp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { dapatUser } from "../../redux/apiCalls";

export default function Sidebar() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dapatUser(dispatch);
  }, [dispatch]);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/category" className="link">
              <li className="sidebarListItem">
                <BookSharp className="sidebarIcon" />
                Category
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/customerlist" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Customer
              </li>
            </Link>
            <Link to="/resellerlist" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Reseller
              </li>
            </Link>
            <Link to="/productsout" className="link">
              <li className="sidebarListItem">
                <ArrowLeft className="sidebarIcon" />
                Products Out
              </li>
            </Link>
            <Link to="/productsIn" className="link">
              <li className="sidebarListItem">
                <ArrowRight className="sidebarIcon" />
                Products In
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Users</h3>
          <ul className="sidebarList">
            <Link to={`/user/${user._id}`} className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                User
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
