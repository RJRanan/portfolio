// Customizable Button component
const Button = ({
  label,
  labelColor,
  bgColor,
  // paddingX,
  // paddingY,
  // iconURL,
  // iconHeight,
  // iconWidth,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${labelColor} ${bgColor} ${bgColor} flex justify-center items-center  text-base  border border-1 rounded-lg py-2 px-8  `}
    >
      {label}
    </button>
  );
};

export default Button;
