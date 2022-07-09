import { Box } from "@mui/system";
import { Avatar, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconTextButton from "components/base/IconTextButton";
import {
  DashboardRounded,
  Group,
  HomeRounded,
  Lightbulb,
  LocalActivity,
  QuestionAnswer,
  Settings,
  TodayRounded,
} from "@mui/icons-material";

export default function ProjectMenu({ project }) {
  const small = useMediaQuery("(min-width:1000px)");

  return (
    <Stack
      spacing={2}
      sx={{
        height: "fit-content",
        bgcolor: "white",
        p: 1.5,

        px: small ? 3 : 1.5,
        borderRadius: 3,
        boxShadow: 2,
        alignItems: small ? "left" : "center",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1} pb={2}>
        <Avatar
          src={project?.image}
          sx={{
            width: small ? 40 : 40,
            height: small ? 40 : 40,
            borderRadius: 3,
            borderColor: "primary.main",
          }}
        />
        {small && (
          <Box>
            <Typography color="primary" variant="h5" sx={{ lineHeight: 0.7, fontWeight: 500 }}>
              {project?.name}
            </Typography>
          </Box>
        )}
      </Stack>
      <Typography variant="caption" sx={{ fontWeight: 600 }}>
        GENERALE
      </Typography>
      <Menu small={small} />
      <Typography variant="caption" sx={{ fontWeight: 600 }}>
        COMMUNITY
      </Typography>
      <CommunityMenu small={small} />
    </Stack>
  );
}

function Menu({ small }) {
  const navigate = useNavigate();

  return (
    <>
      {small ? (
        <Stack spacing={1.5}>
          <IconTextButton
            to="/projects/:projectId"
            icon={<HomeRounded sx={{ fontSize: 30 }} />}
            text="Home"
            onClick={() => navigate("")}
          />
          <IconTextButton
            to="/projects/:projectId/calendar"
            onClick={() => navigate("calendar")}
            icon={<TodayRounded sx={{ fontSize: 30 }} />}
            text="Calendario"
          />
          <IconTextButton
            to="/projects/:projectId/showcases"
            onClick={() => navigate("showcases")}
            icon={<DashboardRounded sx={{ fontSize: 30 }} />}
            text="Bacheche"
          />

          <IconTextButton
            to="/projects/:projectId/settings"
            icon={<Settings sx={{ fontSize: 30 }} />}
            text="Impostazioni"
            onClick={() => navigate("settings")}
          />
        </Stack>
      ) : (
        <Stack>
          <IconButton onClick={() => ""}>
            <HomeRounded sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton onClick={() => "calendar"}>
            <TodayRounded sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton onClick={() => "showcases"}>
            <DashboardRounded sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton onClick={() => "settings"}>
            <Settings sx={{ fontSize: 30 }} />
          </IconButton>
        </Stack>
      )}
    </>
  );
}

function CommunityMenu({ small }) {
  const navigate = useNavigate();

  return (
    <>
      {small ? (
        <Stack spacing={1.5}>
          <IconTextButton
            to="/projects/:projectId"
            icon={<Group sx={{ fontSize: 30 }} />}
            text="Chi siamo"
            onClick={() => navigate("")}
          />
          <IconTextButton
            to="/projects/:projectId/calendar"
            onClick={() => navigate("calendar")}
            icon={<LocalActivity sx={{ fontSize: 30 }} />}
            text="Attivita"
          />
          <IconTextButton
            to="/projects/:projectId/showcases"
            onClick={() => navigate("showcases")}
            icon={<QuestionAnswer sx={{ fontSize: 30 }} />}
            text="Domande"
          />

          <IconTextButton
            to="/projects/:projectId/settings"
            icon={<Lightbulb sx={{ fontSize: 30 }} />}
            text="Idee"
            onClick={() => navigate("settings")}
          />
        </Stack>
      ) : (
        <Stack>
          <IconButton onClick={() => ""}>
            <HomeRounded sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton onClick={() => "calendar"}>
            <TodayRounded sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton onClick={() => "showcases"}>
            <DashboardRounded sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton onClick={() => "settings"}>
            <Settings sx={{ fontSize: 30 }} />
          </IconButton>
        </Stack>
      )}
    </>
  );
}
