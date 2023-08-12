import { useState } from "react";
import "./newProductsIn.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { buatPrdIn } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function NewProductsIn() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const produkin = { ...inputs, img: downloadURL };
          buatPrdIn(produkin, dispatch);
        });
      }
    );
  };

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newProduct">
          <h1 className="addProductTitle">New Product In</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Image</label>
              <input
                name="img"
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="addProductItem">
              <label>Product Name</label>
              <input
                name="produk"
                type="text"
                placeholder="product name"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Reseller</label>
              <input
                name="reseller"
                type="text"
                placeholder="reseller name"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Quantity</label>
              <input
                name="qty"
                type="number"
                placeholder="qty"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Date</label>
              <input
                name="date"
                type="text"
                placeholder="date"
                onChange={handleChange}
              />
            </div>
            <button className="addProductButton" onClick={handleClick}>
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
