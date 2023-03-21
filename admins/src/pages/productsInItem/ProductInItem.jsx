import { Link, useLocation } from "react-router-dom";
import "./productInItem.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { perbaruPrdIn } from "../../redux/apiCalls";
import { useState } from "react";

export default function ProductInItem() {
  const location = useLocation();
  const produkinId = location.pathname.split("/")[2];

  const produkin = useSelector((state) =>
    state.produkin.produkins.find((produkin) => produkin._id === produkinId)
  );

  const dispatch = useDispatch();
  const prdproduk = produkin.produk;
  const prdreseller = produkin.reseller;
  const prdquantity = produkin.qty;
  const prddate = produkin.date;

  const [produk, setProduk] = useState("");
  const [reseller, setReseller] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [date, setDate] = useState("");

  const handleClick = () => {
    let pr = "";
    if (produk === "") {
      pr = prdproduk;
    } else {
      pr = produk;
    }
    let rl = "";
    if (reseller === "") {
      rl = prdreseller;
    } else {
      rl = reseller;
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
    perbaruPrdIn(dispatch, produkinId, pr, rl, qt, dt);
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproductsin">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={produkin.img} alt="" className="productInfoImg" />
            <span className="productName">{produkin.produk}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">customer:</span>
              <span className="productInfoValue">{produkin.reseller}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">qty:</span>
              <span className="productInfoValue">{produkin.qty}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">category:</span>
              <span className="productInfoValue">{produkin.date}</span>
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
              placeholder={produkin.produk}
              onChange={(e) => setProduk(e.target.value)}
            />
            <label>Customer</label>
            <input
              type="text"
              name="reseller"
              placeholder={produkin.reseller}
              onChange={(e) => setReseller(e.target.value)}
            />
            <label>Quantity</label>
            <input
              type="number"
              name="qty"
              placeholder={produkin.qty}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <label>Date</label>
            <input
              type="text"
              name="date"
              placeholder={produkin.date}
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
  );
}
