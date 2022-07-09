import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  Grid,
  IconButton,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { DateTimePicker } from "@mui/x-date-pickers";
import useShowcases from "api/useShowcases";
import CheckListInput from "components/base/Inputs/CheckListInput";
import FileInput from "components/base/Inputs/FileInput";
import SelectShowcase from "components/base/Inputs/SelectShowcase";
import UserSelect from "components/base/Inputs/UserSelect";
import AuthContext from "context/AuthContext";
import ProjectContext from "context/ProjectContext";
import { toDate } from "date-fns";
import useApiData from "hooks/useApiData";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CreateEvent({ handleClose, open }) {
  const { data: userData } = useContext(AuthContext);

  const { projectId } = useParams();
  const { getProjectId } = useContext(ProjectContext);
  const { data, isSuccess } = useShowcases(getProjectId(projectId));

  const { loading, error, POSTFORM } = useApiData();

  const [name, setName] = useState("");
  const [showcase, setShowcase] = useState(null);
  const [desc, setDesc] = useState("");
  const [hasChecklist, setHasCheckList] = useState(false);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([userData]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    setName("");
    setShowcase(null);
    setDesc("");
    setHasCheckList(false);
    setDateFrom(null);
    setDateTo(null);
    setList([]);
    setUsers([]);
  }, [open]);

  useEffect(() => setUsers([]), [showcase]);

  //TODO add name to match endpoint
  const sendable = !!dateFrom && !!dateTo && !!showcase;

  const createEventHandler = () => {
    const data = {
      started_at: dateFrom.toISOString(),
      ended_at: dateTo.toISOString(),
      description: desc,
      parecipants: users.map((e) => e.id),
      image: image,
    };

    if (hasChecklist) data.tasks = list;

    POSTFORM(
      data,
      () => {
        handleClose();
      },
      `showcase/${showcase.id}/messages/event/`
    );
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          borderRadius: "20px",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          p: 5,
          border: 3,
          borderColor: "primary.main",
          minHeight: 500,
        },
      }}
    >
      <Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography mb={2} variant="h5">
            Crea evento
          </Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={6} sx={{ width: "fit-content" }}>
          <FileInput helpertext="Carica un'immagine" onChange={(img) => setImage(img)} />

          <Stack direction="row" alignItems="start" spacing={5}>
            <Stack spacing={2}>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="standard"
                label="Nome evento"
                autoComplete="off"
                sx={{ width: 300 }}
              />

              <DateTimePicker
                clearable
                value={dateFrom}
                onChange={(newValue) => setDateFrom(newValue)}
                renderInput={(props) => <TextField variant="standard" {...props} />}
                label="Inizio evento"
              />
              <DateTimePicker
                clearable
                value={dateTo}
                onChange={(newValue) => setDateTo(newValue)}
                renderInput={(props) => <TextField variant="standard" {...props} />}
                minDate={dateFrom ? dateFrom : undefined}
                label="Fine evento"
              />
            </Stack>
            <Stack spacing={2}>
              <SelectShowcase
                showcase={showcase}
                onChange={(v) => setShowcase(v)}
                options={isSuccess ? data.map((e) => ({ ...e, label: e.name })) : []}
              />
              <TextField
                sx={{ width: 300 }}
                label="Descrizione"
                variant="standard"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                multiline
              />
            </Stack>
          </Stack>
        </Stack>

        <Grid container mt={8} sx={{ width: "100%" }} columnSpacing={10} mb={2}>
          <Grid item xs={7}>
            <UserSelect
              value={users}
              onChange={(val) => setUsers(val)}
              users={showcase?.users.filter((user) => user.id !== userData.id)}
              placeholder={showcase ? "Scegli un utente" : "Prima seleziona una bacheca"}
            />
          </Grid>
          <Grid item xs={5}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="h6">Checklist</Typography>
              <Switch checked={hasChecklist} onChange={() => setHasCheckList((old) => !old)} />
            </Stack>
            <CheckListInput
              list={list}
              onChangeList={(val) => setList(val)}
              disabled={!hasChecklist}
              disableCheckbox={true}
            />
          </Grid>
        </Grid>
      </Box>
      <Button
        disabled={!sendable}
        variant="contained"
        color="secondary"
        sx={{ width: 200 }}
        onClick={createEventHandler}
      >
        Crea
      </Button>
    </Dialog>
  );
}
