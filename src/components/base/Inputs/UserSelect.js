import { Autocomplete, Avatar, Chip, TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function UserSelect({
  placeholder,
  users,
  value = [],
  onChange: setValue = () => {},
}) {
  return (
    <Autocomplete
      disabled={!users}
      multiple
      value={value}
      onChange={(e, val) => setValue(val)}
      options={
        users
          ? users
              .map((u) => ({
                ...u,
                label: `${u.first_name} ${u.last_name}`,
              }))
              .filter(
                (option) => !value.some((value) => value.id === option.id)
              )
          : []
      }
      disableCloseOnSelect
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            avatar={<Avatar alt={option.id} src={option.image} />}
            variant="outlined"
            label={option.label}
            {...getTagProps({ index })}
          />
        ))
      }
      renderOption={(props, option) => (
        <li {...props}>
          <Box pr={1}>
            <Avatar src={option.image} sx={{ width: 25, height: 25 }}></Avatar>
          </Box>
          {option.label}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={users ? "Seleziona utenti" : placeholder}
          placeholder={placeholder}
        />
      )}
    />
  );
}
