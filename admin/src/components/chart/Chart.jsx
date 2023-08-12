import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { userRequest } from "../../requestMethods";
import { useEffect, useState } from "react";

export default function Chart({ title, data, dataKey, grid }) {
  const [kustomer, setKustomer] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("kustomer");
        setKustomer(res.data);
      } catch (err) {}
    };
    getUser();
  }, []);


  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
