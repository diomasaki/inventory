import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [kustomer, setKustomer] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("kustomer?new=true");
        setKustomer(res.data);
      } catch (err) {}
    };
    getUser();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Customer</span>
      <ul className="widgetSmList">
        {kustomer.map((kustomer) => (
          <li className="widgetSmListItem">
            <img
              src={
                kustomer.img ||
                "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{kustomer.username}</span>
              <span className="widgetSmUserTitle">{kustomer.email}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
