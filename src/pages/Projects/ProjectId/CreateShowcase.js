import { Close } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import {
  AppBar,
  ClickAwayListener,
  Dialog,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { LoadingButton } from "@mui/lab";
import ProjectContext from "context/ProjectContext";
import { useParams } from "react-router-dom";
import usePostShowcase from "api/usePostShowcase";
import { useQueryClient } from "react-query";
import { GithubPicker } from "react-color";
import TextFieldRounded from "components/base/Inputs/TextFieldRounded";
import UserSelect from "components/base/Inputs/UserSelect";
import useProject from "api/useProject";
import AuthContext from "context/AuthContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function getColor(color) {
  return color.hex ? color.hex : color;
}

function getContrastColor(color) {
  color = parseInt(color.substring(1), 16);
  const r = (color >> 16) & 0xff,
    g = (color >> 8) & 0xff,
    b = (color >> 0) & 0xff;
  const luma = (r + g + b) / 3;

  if (luma < 140) return "white";
  else return "#3D405B";
}

const pickerColors = [
  "#3D405B",
  "#048ABF",
  "#E6F8FE",
  "#F2055C",
  "#FFC32A",
  "#F8F4D9",
];
export default function CreateShowcase({ open, handleClose }) {
  const { projectId } = useParams();
  const { getProjectId } = useContext(ProjectContext);
  const queryClient = useQueryClient();

  const { mutate, isLoading } = usePostShowcase(getProjectId(projectId), {
    onSuccess: () => {
      handleClose();
      queryClient.invalidateQueries([
        "projects",
        getProjectId(projectId),
        "showcases",
      ]);
    },
  });
  const { data } = useProject(getProjectId(projectId));
  const { data: userData } = useContext(AuthContext);
  const theme = useTheme();

  const DEFAULT_STATE = {
    open: false,
    color: theme.palette.primary.main,
  };

  const [color, setColor] = useState(DEFAULT_STATE);
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState({ name: "", description: "" });

  const reset = () => {
    setColor(DEFAULT_STATE);
    setUsers([]);
    setInput({ name: "", description: "" });
  };

  const handleSubmit = () => {
    mutate({
      name: input.name,
      description: input.description,
      color: getColor(color.color).replace("#", ""),
      users: users.map((user) => user.id),
    });
  };

  const isSubmittable = input.name === "" || input.surname === "";

  return (
    <Dialog
      open={open}
      onClose={(e) => {
        handleClose();
        setTimeout(() => reset(), 300);
      }}
      TransitionComponent={Transition}
      PaperProps={{ sx: { overflow: "visible", borderRadius: "20px" } }}
      transitionDuration={{ enter: 600, exit: 300 }}
    >
      <AppBar
        sx={{
          position: "relative",
          bgcolor: getColor(color.color),
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            sx={{ color: getContrastColor(getColor(color.color)) }}
            onClick={() => handleClose()}
            aria-label="close"
          >
            <Close />
          </IconButton>
          <Typography
            sx={{
              ml: 2,
              flex: 1,
              color: getContrastColor(getColor(color.color)),
            }}
            variant="h6"
            component="div"
          >
            Crea bacheca
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack
        p={2}
        mt={1}
        alignItems="center"
        spacing={2}
        sx={{ minWidth: 500 }}
      >
        <Stack direction="column" spacing={2} sx={{ minWidth: "100%" }}>
          <TextFieldRounded
            value={input.name}
            onChange={(e) =>
              setInput((input) => ({ ...input, name: e.target.value }))
            }
            autoComplete="off"
            label="Nome"
          />

          <TextFieldRounded
            value={input.description}
            multiline
            rows={2}
            onChange={(e) =>
              setInput((input) => ({ ...input, description: e.target.value }))
            }
            label="Descrizione"
            autoComplete="off"
          />
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="right"
          >
            <Typography variant="body2">Colore</Typography>
            <Box
              sx={{
                width: 27,
                height: 27,
                borderRadius: 1,
                bgcolor: getColor(color.color),
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => setColor((old) => ({ ...old, open: true }))}
            >
              {color.open && (
                <ClickAwayListener
                  onClickAway={() =>
                    setColor((old) => ({ ...old, open: false }))
                  }
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 30,
                      left: -55,
                      zIndex: 100,
                    }}
                  >
                    <GithubPicker
                      color={color.color}
                      colors={pickerColors}
                      width="75px"
                      triangle="top-right"
                      onChange={(color) => setColor({ open: true, color })}
                    />
                  </Box>
                </ClickAwayListener>
              )}
            </Box>
          </Stack>
          <Box pb={2}>
            <Typography variant="h5" mb={2}>
              Utenti
            </Typography>
            <UserSelect
              users={data?.users?.filter((e) => e.id !== userData?.id)}
              value={users}
              onChange={(value) => setUsers((old) => value)}
            />
          </Box>
        </Stack>
        <LoadingButton
          loading={isLoading}
          variant="contained"
          size="large"
          color="secondary2"
          disabled={isSubmittable}
          onClick={handleSubmit}
          sx={{
            width: "fit-content",
            bgcolor: getColor(color.color),
          }}
        >
          Crea
        </LoadingButton>
      </Stack>
    </Dialog>
  );
}
