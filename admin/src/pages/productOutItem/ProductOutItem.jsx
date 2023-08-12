import { Link, useLocation } from "react-router-dom";
import "./productoutitem.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { updatePrdOut } from "../../redux/apiCalls";
import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function ProductOutItem() {
  const location = useLocation();
  const produkoutId = location.pathname.split("/")[2];

  const produkout = useSelector((state) =>
    state.produkout.produkouts.find(
      (produkout) => produkout._id === produkoutId
    )
  );

  const dispatch = useDispatch();
  const prdproduk = produkout.produk;
  const prdkustomer = produkout.kustomer;
  const prdquantity = produkout.qty;
  const prddate = produkout.date;

  const [produk, setProduk] = useState("");
  const [kustomer, setKustomer] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [date, setDate] = useState("");

  const handleClick = () => {
    let pr = "";
    if (produk === "") {
      pr = prdproduk;
    } else {
      pr = produk;
    }
    let kt = "";
    if (kustomer === "") {
      kt = prdkustomer;
    } else {
      kt = kustomer;
    }
    let qt = 0;
    if (quantity === 0) {
      qt = prdquantity;
    } else {
      qt = quantity;
    }
    let dt = "";
    if (date === "") {
      dt = prddate;
    } else {
      dt = date;
    }

    window.location.reload(false);
    updatePrdOut(dispatch, produkoutId, pr, kt, qt, dt);
  };

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newproductsout">
              <button className="productAddButton">Create</button>
            </Link>
          </div>
          <div className="productTop">
            <div className="productTopLeft">
              <Chart
                data={productData}
                dataKey="Sales"
                title="Sales Performance"
              />
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={produkout.img} alt="" className="productInfoImg" />
                <span className="productName">{produkout.produk}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">customer:</span>
                  <span className="productInfoValue">{produkout.kustomer}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">qty:</span>
                  <span className="productInfoValue">{produkout.qty}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">category:</span>
                  <span className="productInfoValue">{produkout.date}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="productBottom">
            <form className="productForm">
              <div className="productFormLeft">
                <label>Product Name</label>
                <input
                  type="text"
                  name="produk"
                  placeholder={produkout.produk}
                  onChange={(e) => setProduk(e.target.value)}
                />
                <label>Customer</label>
                <input
                  type="text"
                  name="kustomer"
                  placeholder={produkout.kustomer}
                  onChange={(e) => setKustomer(e.target.value)}
                />
                <label>Quantity</label>
                <input
                  type="number"
                  name="qty"
                  placeholder={produkout.qty}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <label>Date</label>
                <input
                  type="text"
                  name="date"
                  placeholder={produkout.date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img
                    src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className="productUploadImg"
                  />
                  <label for="file">
                    <Publish />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="productButton" onClick={() => handleClick()}>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
