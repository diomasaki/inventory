import "./resellerList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dapatReseller, hapusReseller } from "../../redux/apiCalls";
import ModalImage from "../../components/ModalImage";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function CustomerList() {
  const [data, setData] = useState(userRows);
  const [modalOpen, setModalOpen] = useState(false);
  const [sumberGambar, setSumberGambar] = useState("");
  const dispatch = useDispatch();

  const handleClick = (gambar) => {
    setSumberGambar(gambar);
    setModalOpen(true);
  };

  const reseller = useSelector((state) => state.reseller.resellers);

  useEffect(() => {
    dapatReseller(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    hapusReseller(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "username",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={params.row.img}
              alt=""
              onClick={() => handleClick(params.row.img)}
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 220 },
    { field: "address", headerName: "Address", width: 220 },
    { field: "phone", headerName: "Phone", width: 220 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/reseller/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
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
        <div className="userList">
          <DataGrid
            rows={reseller}
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
