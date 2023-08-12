import "./customerList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dapatKustomer, hapusKustomer } from "../../redux/apiCalls";
import ModalImage from "../../components/ModalImage";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function CustomerList() {
  const [data, setData] = useState(userRows);
  const [bukaGambar, setBukaGambar] = useState(false);
  const [pilihGambar, setPilihGambar] = useState("");

  const handleClick = (gambar) => {
    setPilihGambar(gambar);
    setBukaGambar(true);
  };

  const dispatch = useDispatch();

  const kustomer = useSelector((state) => state.customer.customers);

  useEffect(() => {
    dapatKustomer(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    hapusKustomer(id, dispatch);
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
            <Link to={"/customer/" + params.row._id}>
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
            rows={kustomer}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
          />
          <ModalImage
            open={bukaGambar}
            handleClose={() => setBukaGambar(false)}
            imageSrc={pilihGambar}
          />
        </div>
      </div>
    </>
  );
}
