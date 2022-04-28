import b from "./Button.module.css";

function Button({onClick}) {
  return (
    <button type="button" className={b.Button} onClick={onClick}>
      Load more
    </button>
  );
}
export default Button;
