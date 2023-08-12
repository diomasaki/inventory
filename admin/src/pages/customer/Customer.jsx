import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { perbaruKustomer } from "../../redux/apiCalls";
import "./customer.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Customer() {
  const location = useLocation();
  const customerId = location.pathname.split("/")[2];

  const customer = useSelector((state) =>
    state.customer.customers.find((customer) => customer._id === customerId)
  );

  const dispatch = useDispatch();
  const prdname = customer.username;
  const prdaddress = customer.address;
  const prdemail = customer.email;
  const prdphone = customer.phone;
  const prdgb = customer.gb;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [gambar, setGambar] = useState("");

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
    let gb = 0;
    if (gambar === "") {
      ph = prdgb;
    } else {
      ph = gb;
    }

    window.location.reload(false);
    perbaruKustomer(dispatch, customerId, nm, ad, em, ph, gb);
  };

  console.log(gambar);
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Edit Customer</h1>
            <Link to="/newcustomer">
              <button className="userAddButton">Create</button>
            </Link>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img src={customer.img} alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">{customer.username}</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIcon" />
                  <span className="userShowInfoTitle">{customer.username}</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon" />
                  <span className="userShowInfoTitle">{customer.phone}</span>
                </div>
                <div className="userShowInfo">
                  <MailOutline className="userShowIcon" />
                  <span className="userShowInfoTitle">{customer.email}</span>
                </div>
                <div className="userShowInfo">
                  <LocationSearching className="userShowIcon" />
                  <span className="userShowInfoTitle">{customer.address}</span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Customer Name</label>
                    <input
                      name="username"
                      type="text"
                      placeholder={customer.username}
                      className="userUpdateInput"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>New Address</label>
                    <input
                      name="address"
                      type="text"
                      placeholder={customer.address}
                      className="userUpdateInput"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      name="email"
                      type="text"
                      placeholder={customer.email}
                      className="userUpdateInput"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      name="phone"
                      type="number"
                      placeholder={customer.phone}
                      className="userUpdateInput"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img className="userUpdateImg" src={customer.img} alt="" />
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
