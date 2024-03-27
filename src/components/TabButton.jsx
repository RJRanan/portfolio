// Customizable Button component
const TabButton = ({
  label,
  labelColor,
  labelThick,
  bgColor,
  border,
  animation,
  onClick,
  iconURL,
  iconHeight,
  iconWidth,
  paddingX,
  paddingY,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${labelColor} ${bgColor} ${bgColor} ${border}  ${animation} ${labelThick} 
      flex font-poppins items-center  text-sm  border border-1 rounded-full  ${
        paddingY ? paddingY : "py-1"
      } ${paddingX ? paddingX : "px-0"} `}
    >
      <img
        src={iconURL}
        width={iconWidth}
        height={iconHeight}
        className="mr-2"
      />
      {label}
    </button>
  );
};

export default TabButton;
