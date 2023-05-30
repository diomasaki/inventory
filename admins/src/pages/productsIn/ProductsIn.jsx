import "./productsIn.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dapatPrdIn, hapusPrdIn } from "../../redux/apiCalls";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ProductsIn() {
  const [data, setData] = useState(productRows);

  const dispatch = useDispatch();

  const produkins = useSelector((state) => state.produkin.produkins);

  useEffect(() => {
    dapatPrdIn(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    hapusPrdIn(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "produk",
      headerName: "Product",
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
                {params.row.produk}
              </div>
            </TransformComponent>
          </TransformWrapper>
        );
      },
    },
    {
      field: "reseller",
      headerName: "Reseller",
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
            <Link to={"/productsinitem/" + params.row._id}>
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
        rows={produkins}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
