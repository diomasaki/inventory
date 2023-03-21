import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./widgetLg.css";

export default function WidgetLg() {
  const [reseller, setReseller] = useState([]);

  useEffect(() => {
    const getReseller = async () => {
      try {
        const res = await userRequest.get("reseller?new=true");
        setReseller(res.data);
      } catch (err) {}
    };
    getReseller();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">New Reseller</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Reseller</th>
          <th className="widgetLgTh">email</th>
          <th className="widgetLgTh">phone</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        {reseller.map((reseller) => (
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src={
                  reseller.img ||
                  "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                }
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">{reseller.username}</span>
            </td>
            <td className="widgetLgDate">{reseller.email}</td>
            <td className="widgetLgAmount">{reseller.phone}</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
