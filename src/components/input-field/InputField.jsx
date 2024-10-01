// src/components/InputField.js
import { useController } from "react-hook-form";
import BasicTextInput from "../inputs/BasicTextInput.jsx";
import { useCallback } from "react";

function InputField({
  trigger = "onChange", // Default to onChange for event triggers
  blurTrigger = "onBlur", // Default to onBlur for blur events
  valuePropName = "value", // Default prop for value
  component: Component = BasicTextInput, // Default input component
  children,
  control,
  name,
  className,
  icons, // New icons prop passed for start and end adornments
  error, // Validation error message passed from the form
  debounceTime = 300, // Debounce time for input
  defaultValue = "", // Default value for input
  ...rest
}) {
  // Initialize field state using useController from react-hook-form
  const {
    field: { onBlur, onChange, value, ref },
  } = useController({
    control,
    name,
    defaultValue,
  });

  return (
    <Component
      {...{
        [valuePropName]: value,
        [trigger]: onChange,
        [blurTrigger]: onBlur,
      }}
      inputRef={ref}
      error={error} // Pass down validation error
      icons={icons} // Pass the icons prop for start and end adornments
      className={className} // Pass down custom class for styling
      {...rest} // Pass down other props like placeholder, type, etc.
    />
  );
}

export default InputField;
