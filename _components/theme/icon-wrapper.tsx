const IconWrapper = (icon: string) => {
  const svgPath = `<path d="${icon}"/>`;

  const Icon = ({
    size = 28,
    color = "currentColor",
    fill = "",
    strokeWidth = 2,
  }) => {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        strokeWidth={strokeWidth}
        fill={fill ? fill : "none"}
        stroke={fill === "none" ? color : "currentColor"}
        dangerouslySetInnerHTML={{ __html: svgPath }}
        aria-hidden="true"
      />
    );
  };

  return Icon;
};

export default IconWrapper;
