import { Link, useLocation } from "react-router-dom";
import "./categoryItem.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { perbaruCategory } from "../../redux/apiCalls";
import { useState } from "react";

export default function CategoryItem() {
  const location = useLocation();
  const categoryId = location.pathname.split("/")[2];

  const categor = useSelector((state) =>
    state.category.categorys.find((category) => category._id === categoryId)
  );

  const dispatch = useDispatch();
  const prdname = categor.name;

  const [name, setName] = useState("");

  const handleClick = () => {
    let nm = "";
    if (name === "") {
      nm = prdname;
    } else {
      nm = name;
    }

    window.location.reload(false);
    perbaruCategory(dispatch, categoryId, nm);
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Category</h1>
        <Link to="/newcategory">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Category Name</label>
            <input
              type="text"
              name="name"
              placeholder={categor.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
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
