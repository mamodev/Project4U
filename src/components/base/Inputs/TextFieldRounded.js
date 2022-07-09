import { TextField, styled } from "@mui/material";

const TextFieldRounded = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": { background: "white", borderRadius: 20 },
}));

export default TextFieldRounded;
