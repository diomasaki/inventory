import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { updatePrd } from "../../redux/apiCalls";
import { useState } from "react";

export default function Product() {
  const location = useLocation();
  const produkId = location.pathname.split("/")[2];

  const produc = useSelector((state) =>
    state.prodak.produk.find((prodak) => prodak._id === produkId)
  );

  const dispatch = useDispatch();
  const prdname = produc.name;
  const prdprice = produc.price;
  const prdquantity = produc.qty;
  const prdcategory = produc.category;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState([]);

  const handleChange = (e) => {
    setCategory(e.target.value.split(","));
  };

  const handleClick = () => {
    let nm = "";
    if (name === "") {
      nm = prdname;
    } else {
      nm = name;
    }
    let pr = "";
    if (price === "") {
      pr = prdprice;
    } else {
      pr = price;
    }
    let qt = "";
    if (quantity === "") {
      qt = prdquantity;
    } else {
      qt = quantity;
    }
    let ct = "";
    if (category === "") {
      ct = prdcategory;
    } else {
      ct = category;
    }

    window.location.reload(false);
    updatePrd(dispatch, produkId, nm, pr, qt, ct);
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={produc.img} alt="" className="productInfoImg" />
            <span className="productName">{produc.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{produc._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">qty:</span>
              <span className="productInfoValue">{produc.qty}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">category:</span>
              <span className="productInfoValue">{produc.category}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">price:</span>
              <span className="productInfoValue">{produc.price}</span>
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
              name="name"
              placeholder={produc.name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Price</label>
            <input
              type="text"
              name="price"
              placeholder={produc.price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label>Quantity</label>
            <input
              type="text"
              name="qty"
              placeholder={produc.qty}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <label>Category</label>
            <input
              type="text"
              name="category"
              placeholder={produc.category}
              onChange={handleChange}
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
