// The function to render icons (react-icons or any custom icon)
export default function renderIcon(icons = {}) {
  const adornments = {};

  Object.entries(icons).forEach(
    ([position, { icon: Icon, onClick, buttonProps }]) => {
      const adornmentKey =
        position === "start" ? "startAdornment" : "endAdornment";

      adornments[adornmentKey] = (
        <span
          className={`flex items-center ${
            position === "start" ? "pl-2" : "pr-2"
          }`} // Tailwind positioning
          onClick={onClick} // Handle click event
          {...buttonProps} // Spread any additional buttonProps
        >
          {Icon}
        </span>
      );
    }
  );

  return adornments;
}
