import { Close } from "@mui/icons-material";
import { Avatar, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import usePatchEventTask from "api/usePatchEventTask";
import usePostEventTask from "api/usePostEventTask";
import CheckListInput from "components/base/Inputs/CheckListInput";
import ProjectContext from "context/ProjectContext";
import { useContext, useState } from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

//FIXME Gli eveneti devono avere il creatore come infomazione e devono possedere la bacheca a cui appartengono
export default function EventDetails({
  event: { event, end, start },
  months,
  onClose: close,
}) {
  const [checkList, setCheckList] = useState({
    list: event.tasks,
    selected: event.tasks?.filter((e) => e.checked),
  });

  const { projectId } = useParams();
  const { getProjectId } = useContext(ProjectContext);

  const queryClient = useQueryClient();

  const { mutate: checkTask } = usePatchEventTask({
    onSuccess: (data) =>
      queryClient.invalidateQueries(
        queryClient.invalidateQueries([
          "projects",
          getProjectId(projectId),
          "events",
        ])
      ),
  });

  const { mutate: addTask } = usePostEventTask(event.id, {
    onSuccess: (data) => {
      setCheckList((old) => ({ ...old, list: [...old.list, data] }));
      queryClient.invalidateQueries([
        "projects",
        getProjectId(projectId),
        "events",
      ]);
    },
  });

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        p: 2,
        bgcolor: "white",
        width: "100%",
        height: "100%",
        zIndex: 2000,
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ position: "absolute", top: 10, right: 10 }}>
        <IconButton onClick={() => close()}>
          <Close />
        </IconButton>
      </Box>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar sx={{ width: 120, height: 120 }} src={event.image} />
        <Stack>
          <Typography variant="h5">{event.name || "Nome evento"}</Typography>
          <Typography variant="subtitle">{event.description}</Typography>
          <Typography variant="subtitle2">
            {" "}
            {start.getDate()} {months[start.getMonth()]} {start.getHours()}:
            {start.getMinutes()}
            {" - "}
            {end.getDate()} {months[end.getMonth()]} {end.getHours()}:
            {end.getMinutes()}
          </Typography>
        </Stack>
      </Stack>

      <Grid container mt={3} p={3}>
        <Grid item xs={6}>
          <Typography variant="h6">Partecipanti</Typography>

          <Grid cointainer>
            {event.partecipants.map((e, i) => (
              <Grid item key={i}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1.5}
                  sx={{
                    width: "fit-content",
                    border: 1,
                    borderRadius: 5,
                    pr: 2,
                    borderColor: "primary.main",
                  }}
                >
                  <Avatar src={e.image} sx={{ height: 30, width: 30 }} />
                  <Typography>
                    {e.first_name} {e.last_name}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {event?.tasks?.length > 0 && (
            <Stack>
              <Typography variant="h6">CheckList</Typography>
              <CheckListInput
                list={checkList.list}
                selected={checkList.selected}
                onAddList={(value) => addTask({ name: value })}
                onSelect={(value) => checkTask({ id: value.id, checked: true })}
                onDeselect={(value) =>
                  checkTask({ id: value.id, checked: false })
                }
                valueFormatter={(e) => e.name}
              />
            </Stack>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
