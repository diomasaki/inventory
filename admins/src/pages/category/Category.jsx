import "./category.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dapatCategory, hapusCategory } from "../../redux/apiCalls";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Category() {
  const [data, setData] = useState(productRows);

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
          <TransformWrapper
            defaultScale={1}
            defaultPositionX={100}
            defaultPositionY={200}
          >
            <TransformComponent>
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            </TransformComponent>
          </TransformWrapper>
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
    <div className="productList">
      <DataGrid
        rows={categorys}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
