import { Add, DeleteRounded } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

export default function CheckListInput({
  disabled,
  disableCheckbox,
  list = [],
  onAddList: addList = () => {},
  onRemoveList: removeList = () => {},
  onSelect: select = () => {},
  onDeselect: deselect = () => {},
  selected = [],
  valueFormatter = (e) => e,
  ...props
}) {
  const handleSelect = (value) => () => {
    if (disableCheckbox) return;
    const search = selected.indexOf(value);
    if (search === -1) select(value);
    else deselect(value);
  };

  const handleCreate = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value !== "") {
      addList(value);
      e.target.value = "";
    }
  };
  const handleRemove = (e) => () => {
    removeList(e);
    deselect(e);
  };

  return (
    <Stack>
      <List
        dense
        sx={{
          width: "100%",
          maxWidth: 400,
          maxHeight: 200,
          overflow: "auto",
        }}
      >
        {list.map((e, i) => (
          <ListItem
            key={i}
            disablePadding
            secondaryAction={
              <IconButton
                disabled={disabled}
                edge="end"
                aria-label="comments"
                sx={{ "&:hover": { color: "error.main" } }}
                onClick={handleRemove(e)}
              >
                <DeleteRounded />
              </IconButton>
            }
          >
            <ListItemButton disabled={disabled} onClick={handleSelect(e)}>
              <ListItemIcon>
                <Checkbox
                  disabled={disabled}
                  checked={selected.indexOf(e) !== -1}
                  onClick={handleSelect(e)}
                />
              </ListItemIcon>
              <Typography>{valueFormatter(e)}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ display: "flex", alignItems: "flex-start", maxWidth: 400 }}>
        <Add
          sx={{ color: disabled ? grey[400] : "primary.main", mr: 1, mt: 0.5 }}
        />
        <TextField
          sx={{ width: "100%" }}
          disabled={disabled}
          variant="standard"
          placeholder="Aggiungi..."
          autoComplete="off"
          helperText="Premi invio per aggiungere alla lista"
          inputProps={{
            onKeyUp: handleCreate,
          }}
        />
      </Box>
    </Stack>
  );
}
