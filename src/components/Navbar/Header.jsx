import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <div className={`${css.container} ${css.header_position}`}>
        <div className="left">left</div>
        <div className="right">right</div>
      </div>
    </div>
  );
};

export default Header;
