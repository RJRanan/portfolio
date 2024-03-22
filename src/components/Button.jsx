// Customizable Button component
const Button = ({
  label,
  labelColor,
  bgColor,
  paddingX,
  paddingY,
  // iconURL,
  // iconHeight,
  // iconWidth,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${labelColor} ${bgColor} ${bgColor} flex justify-center items-center gap-2 border border-1  ${
        paddingY ? paddingY : "py-[9px]"
      } ${paddingX ? paddingX : "px-[26px]"}`}
    >
      {label}
    </button>
  );
};

export default Button;
