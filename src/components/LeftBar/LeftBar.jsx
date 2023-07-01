import { NavLink } from "react-router-dom";
import css from "./LeftBar.module.css";

const LeftBar = () => {
  return (
    <div className={css.leftBar}>
      <div className={css.container2}>
        <ul className={css.menu}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.item} ${css.active}` : `${css.item}`
              }
              to="/"
            >
              <img src={"home"} alt="" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tweets"
              className={({ isActive }) =>
                isActive ? `${css.item} ${css.active}` : `${css.item}`
              }
            >
              <img src={"Tweets"} alt="" />
              <span>Tweets</span>
            </NavLink>
          </li>
        </ul>
        <hr />
        <ul className={css.menu}>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? `${css.item} ${css.active}` : `${css.item}`
              }
            >
              <img src={"profile"} alt="" />
              <span>Profile</span>
            </NavLink>
          </li>

          <li className={css.item}>
            <NavLink
              to="/friends"
              className={({ isActive }) =>
                isActive ? `${css.item} ${css.active}` : `${css.item}`
              }
            >
              <img src={"friends"} alt="" />
              <span>Friends</span>
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className={css.menu}>
          <span>Others</span>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
