import { PersonAddAlt1Outlined, RemoveCircleOutlineRounded } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import useProject from "api/useProject";
import useProjectUsers from "api/useProjectUser";
import IconTextButton from "components/base/IconTextButton";
import FileInput from "components/base/Inputs/FileInput";
import TextFieldRounded from "components/base/Inputs/TextFieldRounded";
import ProjectContext from "context/ProjectContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function ProjectSettings() {
  const { projectId } = useParams();
  const { getProjectId } = useContext(ProjectContext);
  const { data: projectUsers } = useProjectUsers(getProjectId(projectId));
  const { data: project, isSuccess: isProjectSuccess } = useProject(getProjectId(projectId));

  return (
    <Box sx={{ flex: 1, pl: 2 }}>
      <Typography variant="h3">Impostazioni</Typography>
      <Typography variant="subtitle1">
        Cambia in questa pagina le informazioni principali del profilo del tuo progetto
      </Typography>
      <Stack
        spacing={4}
        sx={{
          p: 2,
          paddingBottom: 2,
          borderColor: "primary.main",
          borderRadius: 5,
        }}
      >
        <Box>
          <Typography variant="h5" mb={2}>
            Generale
          </Typography>
          {isProjectSuccess && (
            <Stack direction="row" alignItems="center" spacing={8}>
              <Stack spacing={2.5} sx={{ width: 350 }}>
                <TextFieldRounded size="small" label="Nome Progetto" defaultValue={project?.name} />
                <TextFieldRounded
                  size="small"
                  label="Descrizione"
                  multiline
                  defaultValue={project?.description}
                />
                <TextFieldRounded size="small" label="Tags" />
                <TextFieldRounded size="small" label="Url" defaultValue={project?.link_site} />
              </Stack>
              <Box pb={2}>
                <FileInput helpertext="Cambia immagine" defaultImage={project?.image} />
              </Box>
            </Stack>
          )}
        </Box>

        <Box>
          <Typography variant="h5">Membri</Typography>
          <List sx={{ maxWidth: 400 }} dense>
            {projectUsers?.map((e, i) => (
              <ListItem
                key={i}
                secondaryAction={
                  <IconButton color="error">
                    <RemoveCircleOutlineRounded />
                  </IconButton>
                }
              >
                <ListItemButton direction="row" alignItems="center" justifyContent="space-between">
                  <ListItemAvatar>
                    <Avatar src={e.user_detail.image} sx={{ height: 30, width: 30 }} />
                  </ListItemAvatar>

                  <ListItemText primary={e.user_detail.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button startIcon={<PersonAddAlt1Outlined />}>Aggiungi persona</Button>
        </Box>
        <Box>
          <Typography variant="h5">Ruoli</Typography>
          <Typography variant="subtitle1">Questa funzione non e' ancora presente</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
