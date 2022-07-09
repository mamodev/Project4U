import {
  Autocomplete,
  Avatar,
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function SelectShowcase({
  showcase,
  onChange: setShowcase,
  options = [],
  width = 300,
}) {
  return (
    <Autocomplete
      value={showcase}
      onChange={(e, newValue) => setShowcase(newValue)}
      options={options}
      sx={{ width: width }}
      renderInput={(params) => (
        <TextField variant="standard" {...params} label="Bacheca" />
      )}
      renderOption={(props, option) => (
        <li {...props}>
          <Stack direction="row" alignItems="center">
            <Box sx={{ pr: 1 }}>
              <Avatar
                sx={{
                  width: 25,
                  height: 25,
                  fontSize: 12,
                  bgcolor: option.color ? "#" + option.color : "primary.main",
                }}
              >
                {option.label.toUpperCase()[0]}
              </Avatar>
            </Box>
            <Typography>{option.label}</Typography>
          </Stack>
        </li>
      )}
    />
  );
}
