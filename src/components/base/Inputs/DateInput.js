import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

function getMinDate() {
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 2);
  return minDate;
}
function getMaxDate() {
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() + 5);
  return minDate;
}

export default function DateInput({
  value,
  onChange: setValue,
  placeholder,
  inputProps,
  autocomplete = "off",
  helperText,
  error = false,
  ...props
}) {
  return (
    <DatePicker
      {...props}
      value={value}
      onChange={(newValue) => setValue(newValue)}
      maxDate={getMaxDate()}
      renderInput={(params) => (
        <TextField {...inputProps} {...params} autoComplete={autocomplete} label={placeholder} />
      )}
    />
  );
}
