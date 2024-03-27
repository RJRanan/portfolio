// Customizable Button component
const Button = ({
  label,
  labelColor,
  bgColor,
  border,
  paddingY,
  paddingX,
  animation,
  onClick,
  iconUrl,
  iconWidth,
  iconHeight,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${labelColor} ${bgColor} ${bgColor} ${border}  ${animation}  flex font-poppins items-center  text-base  border border-1 rounded-lg ${
        paddingY ? paddingY : "py-[9px]"
      } ${paddingX ? paddingX : "px-[26px]"}  `}
    >
      <img src={iconUrl} width={iconWidth} height={iconHeight} />
      {label}
    </button>
  );
};

export default Button;
