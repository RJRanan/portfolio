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
  url,
}) => {
  // Default padding values
  const defaultPaddingY = paddingY || "py-[9px]";
  const defaultPaddingX = paddingX || "px-[26px]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center text-base font-poppins border border-1 rounded-lg ${labelColor} ${bgColor} ${border} ${animation} ${labelThick} ${defaultPaddingY} ${defaultPaddingX}`}
      // Conditionally add href if url is provided
      {...(url && { href: url })}
    >
      {label}
    </button>
  );
};

export default Button;
