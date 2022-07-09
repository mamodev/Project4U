import Header from "./templates/Header";

import useUser from "api/useUser";
import { Box } from "@mui/system";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AboutMe from "./templates/AboutMe";
import ProjectCard from "components/modules/Cards/ProjectCard";
import Skills from "./templates/Skills";
import FormationPage from "./templates/Formation";
import { useEffect, useRef, useState } from "react";
import { Close, Email, LocationOn, School } from "@mui/icons-material";
import DateInput from "components/base/Inputs/DateInput";
import { LoadingButton } from "@mui/lab";
import usePatchUser from "api/usePatchUser";
import { formatDate } from "utils";
import ExternalProject from "./templates/ExternalProjects";
import useProjects from "api/useProjects";

export default function Profile() {
  const { data, isSuccess } = useUser();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const { data: projects } = useProjects();

  const openSettingsHandler = () => {
    setSettingsOpen(true);
  };
  const closeSettingsHandler = () => {
    setSettingsOpen(false);
  };

  return (
    <Box mb={10}>
      <Header openSettings={openSettingsHandler} />

      <Stack direction="row" justifyContent="space-between">
        <Stack sx={{ width: "40vw" }} spacing={4}>
          <InfoContainer title="Su di me">
            <AboutMe description={isSuccess ? data.description : ""} />
          </InfoContainer>
          <InfoContainer title="Progetti4U">
            {!(projects && projects.length > 0) ? (
              <Typography>Non partecipi ancora a nessun progetto!</Typography>
            ) : (
              <Stack spacing={2} mt={2}>
                {projects?.map?.((e, i) => (
                  <ProjectCard
                    key={i}
                    image={e.image}
                    name={e.name}
                    url={e.link_site}
                    description={e.description}
                  />
                ))}
              </Stack>
            )}
          </InfoContainer>
          <InfoContainer title="Progetti esterni">
            <ExternalProject />
          </InfoContainer>
        </Stack>
        <Stack sx={{ width: "25vw" }} spacing={4}>
          <InfoContainer title="Skills">
            <Skills skills={data?.skills} />
          </InfoContainer>
          <InfoContainer title="Formazione">
            <FormationPage education={data?.educations} />
          </InfoContainer>
        </Stack>
      </Stack>

      {settingsOpen && <SettingsDialog open={settingsOpen} onClose={closeSettingsHandler} />}
    </Box>
  );
}

function InfoContainer({ title, children, ...props }) {
  return (
    <Box
      {...props}
      sx={{
        bgcolor: "common.white",
        width: "100%",
        px: 4,
        py: 2,
        borderRadius: 4,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function SettingsDialog({ open, onClose: close }) {
  const [state, setState] = useState({
    email: "",
    location: "",
    date_birth: null,
    main_role: "",
  });
  const [edited, setEdited] = useState(false);
  console.log(edited);

  const { data, isSuccess } = useUser();

  const firstTimeRef = useRef(0);
  const { mutate, isLoading } = usePatchUser({ onSuccess: () => setEdited(false) });

  useEffect(() => {
    if (isSuccess) {
      setState({
        email: data.email,
        location: data.location ? data.location : "",
        date_birth: data.date_birth,
        main_role: data.main_role ? data.main_role : "",
      });
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isSuccess) {
      console.log(firstTimeRef.current);
      if (firstTimeRef.current >= 3) {
        setEdited(true);
      } else {
        firstTimeRef.current++;
      }
    }
  }, [state, isSuccess]);

  const handleSave = () =>
    mutate({
      email: state.email,
      date_birth: state.date_birth ? formatDate(state.date_birth) : null,
      location: state.location ? state.location : null,
      main_role: state.main_role ? state.main_role : null,
    });
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="h5">Impostazioni profilo</Typography>
          <IconButton onClick={close}>
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>Tipo account</Typography>{" "}
            <Typography
              variant="caption"
              fontWeight={500}
              sx={{ color: "white", bgcolor: "secondary2.main", px: 1, py: 0.5, borderRadius: 1 }}
            >
              {isSuccess ? data.type_user : "..."}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={8}>
            <Typography>Email</Typography>
            <TextField
              sx={{ width: 350 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Email />
                  </InputAdornment>
                ),
              }}
              value={state.email}
              onChange={(e) => setState((old) => ({ ...old, email: e.target.value }))}
              placeholder="Email"
              disabled={!isSuccess}
              autocomplete="false"
              type="email"
              size="small"
            />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={8}>
            <Typography autocomplete="false">Data di nascita</Typography>
            <DateInput
              inputProps={{ size: "small", sx: { width: 350 } }}
              value={state.date_birth}
              onChange={(val) => setState((old) => ({ ...old, date_birth: val }))}
              size="small"
            />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={8}>
            <Typography autocomplete="false">Città</Typography>
            <TextField
              sx={{ width: 350 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LocationOn />
                  </InputAdornment>
                ),
              }}
              value={state.location}
              onChange={(e) => setState((old) => ({ ...old, location: e.target.value }))}
              placeholder="Luogo"
              disabled={!isSuccess}
              autocomplete="false"
              size="small"
            />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={8}>
            <Typography autocomplete="false">Ruolo principale</Typography>
            <TextField
              sx={{ width: 350 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <School />
                  </InputAdornment>
                ),
              }}
              value={state.main_role}
              onChange={(e) => setState((old) => ({ ...old, main_role: e.target.value }))}
              placeholder="Ruolo principale"
              disabled={!isSuccess}
              autocomplete="false"
              size="small"
            />
          </Stack>
        </Stack>
      </DialogContent>
      {edited && (
        <DialogActions>
          <LoadingButton
            onClick={handleSave}
            loading={isLoading}
            color="secondary"
            variant="contained"
          >
            Salva
          </LoadingButton>
        </DialogActions>
      )}
    </Dialog>
  );
}
