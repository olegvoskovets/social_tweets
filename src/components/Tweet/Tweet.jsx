import css from "./Tweet.module.css";

const Tweet = () => {
  return (
    <div className={css.tweet}>
      <div className={css.top}></div>
      <div className={css.rectangle}></div>
      <div className={css.button_block}></div>
    </div>
  );
};

export default Tweet;
