import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { perbaruReseller } from "../../redux/apiCalls";
import "./reseller.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Reseller() {
  const location = useLocation();
  const resellerId = location.pathname.split("/")[2];

  const reseller = useSelector((state) =>
    state.reseller.resellers.find((reseller) => reseller._id === resellerId)
  );

  const dispatch = useDispatch();
  const prdname = reseller.username;
  const prdaddress = reseller.address;
  const prdemail = reseller.email;
  const prdphone = reseller.phone;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);

  const handleClick = () => {
    let nm = "";
    if (name === "") {
      nm = prdname;
    } else {
      nm = name;
    }
    let ad = "";
    if (address === "") {
      ad = prdaddress;
    } else {
      ad = address;
    }
    let em = "";
    if (email === "") {
      em = prdemail;
    } else {
      em = email;
    }
    let ph = 0;
    if (phone === 0) {
      ph = prdphone;
    } else {
      ph = phone;
    }

    window.location.reload(false);
    perbaruReseller(dispatch, resellerId, nm, ad, em, ph);
  };

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Edit Reseller</h1>
            <Link to="/newreseller">
              <button className="userAddButton">Create</button>
            </Link>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img src={reseller.img} alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">{reseller.username}</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIcon" />
                  <span className="userShowInfoTitle">{reseller.username}</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon" />
                  <span className="userShowInfoTitle">{reseller.phone}</span>
                </div>
                <div className="userShowInfo">
                  <MailOutline className="userShowIcon" />
                  <span className="userShowInfoTitle">{reseller.email}</span>
                </div>
                <div className="userShowInfo">
                  <LocationSearching className="userShowIcon" />
                  <span className="userShowInfoTitle">{reseller.address}</span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Reseller Name</label>
                    <input
                      name="username"
                      type="text"
                      placeholder={reseller.username}
                      className="userUpdateInput"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>New Address</label>
                    <input
                      name="address"
                      type="text"
                      placeholder={reseller.address}
                      className="userUpdateInput"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      name="email"
                      type="text"
                      placeholder={reseller.email}
                      className="userUpdateInput"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      name="phone"
                      type="number"
                      placeholder={reseller.phone}
                      className="userUpdateInput"
                      onChange={(e) => setPhone(e.target.value)}
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
      </div>
    </>
  );
}
