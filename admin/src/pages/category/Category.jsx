import "./category.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dapatCategory, hapusCategory } from "../../redux/apiCalls";
import ModalImage from "../../components/ModalImage";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Category() {
  const [data, setData] = useState(productRows);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const handleClick = (img) => {
    setSelectedImg(img);
    setModalOpen(true);
  };

  const dispatch = useDispatch();

  const categorys = useSelector((state) => state.category.categorys);

  useEffect(() => {
    dapatCategory(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    hapusCategory(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "name",
      headerName: "Name",
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
            {params.row.name}
          </div>
        );
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/categoryitem/" + params.row._id}>
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
            rows={categorys}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
          />
          <ModalImage
            open={modalOpen}
            handleClose={() => setModalOpen(false)}
            imageSrc={selectedImg}
          />
        </div>
      </div>
    </>
  );
}
