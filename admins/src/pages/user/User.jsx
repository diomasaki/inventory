import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { perbaruUser } from "../../redux/apiCalls";
import "./user.css";

export default function User() {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const user = useSelector((state) =>
    state.user.users.find((user) => user._id === userId)
  );

  const dispatch = useDispatch();
  const prdname = user.username;
  const prdpassword = user.password;
  const prdemail = user.email;

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    let nm = "";
    if (name === "") {
      nm = prdname;
    } else {
      nm = name;
    }
    let ps = "";
    if (password === "") {
      ps = prdpassword;
    } else {
      ps = password;
    }
    let em = "";
    if (email === "") {
      em = prdemail;
    } else {
      em = email;
    }

    window.location.reload(false);
    perbaruUser(dispatch, userId, nm, ps, em);
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  name="username"
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>New Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="new password"
                  className="userUpdateInput"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button
                className="userUpdateButton"
                onClick={() => handleClick()}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
