import "./productsOut.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dapatProdukOut, hapusProdukOut } from "../../redux/apiCalls";
import ModalImage from "../../components/ModalImage";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function ProductsOut() {
  const [data, setData] = useState(productRows);
  const [modalOpen, setModalOpen] = useState(false);
  const [sumberGambar, setSumberGambar] = useState("");

  const handleClick = (gmb) => {
    setSumberGambar(gmb);
    setModalOpen(true);
  };

  const dispatch = useDispatch();

  const produkout = useSelector((state) => state.produkout.produkouts);

  useEffect(() => {
    dapatProdukOut(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    hapusProdukOut(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "produk",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.img}
              alt=""
              onClick={() => handleClick(params.row.img)}
            />
            {params.row.produk}
          </div>
        );
      },
    },
    {
      field: "kustomer",
      headerName: "Customer",
      width: 160,
    },
    { field: "qty", headerName: "Quantity", width: 200 },
    {
      field: "date",
      headerName: "Date",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/productsoutitem/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="productList">
          <DataGrid
            rows={produkout}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
          />
          <ModalImage
            open={modalOpen}
            handleClose={() => setModalOpen(false)}
            imageSrc={sumberGambar}
          />
        </div>
      </div>
    </>
  );
}
