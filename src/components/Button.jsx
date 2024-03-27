// Customizable Button component
const Button = ({
  label,
  labelColor,
  labelThick,
  bgColor,
  border,
  paddingY,
  paddingX,
  animation,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${labelColor} ${bgColor} ${bgColor} ${border}  ${animation} ${labelThick} flex font-poppins items-center  text-base  border border-1 rounded-lg ${
        paddingY ? paddingY : "py-[9px]"
      } ${paddingX ? paddingX : "px-[26px]"}  `}
    >
      {label}
    </button>
  );
};

export default Button;
