import {
  AccountBalance,
  Add,
  AddCircle,
  AddCircleRounded,
  AddRounded,
  Close,
  DeleteForeverRounded,
  EditOutlined,
  MenuBook,
  SchoolOutlined,
} from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Fade, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Formation from "components/base/Inputs/Formation";
import { useEffect, useState } from "react";

const translateMap = {
  Master: "Master",
  University: "Università",
  Course: "Corso",
  Highschool: "Superiori",
  Doctorate: "Dottorato",
  Other: "Altro",
};
export default function FormationPage({ education = [] }) {
  const [element, setElement] = useState([]);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);

  useEffect(() => setElement(education), []);

  const remove = (e) => {
    const API_KEY = "Jkkro3Nc.Tw4ZAsmNAAsBfFrbJVjxS1AA3VcMEvwD";
    const key = "Token " + window.localStorage.getItem("key");
    const config = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "X-Api-Key": API_KEY,
        Authorization: key,
      },
    };
    fetch("http://admin.project4u.it/api/user/educations/" + e.id + "/", config)
      .then(() => setElement(element.filter((el) => el !== e)))
      .catch((error) => console.log(error));
  };
  const add = (element) => {
    setElement((old) => [...old, element]);
  };

  const timeline =
    element &&
    element
      .sort((first, second) => {
        let df = Date.parse(first.started_at),
          dl = Date.parse(second.started_at);

        if (df > dl) return -1;
        if (df < dl) return 1;
        else return 0;
      })
      .map((e, i) => {
        let icon;
        switch (e.type) {
          case "Course":
            icon = <MenuBook color="secondary2" />;
            break;
          case "Highschool":
            icon = <AccountBalance color="secondary" />;
            break;
          default:
            icon = <SchoolOutlined color="secondary" />;
        }

        const start = new Date(e.started_at),
          end = e.ended_at && new Date(e.ended_at);
        return (
          <TimelineItem key={i}>
            <TimelineOppositeContent>
              <Stack sx={{ height: "70%" }} justifyContent="center">
                <Typography variant="subtitle2">
                  {`${start.getMonth()}/${start.getFullYear()} - ${
                    end ? `${end.getMonth()}/${end.getFullYear()}` : "ora"
                  }`}
                </Typography>
              </Stack>
            </TimelineOppositeContent>
            <TimelineSeparator>
              {editing ? (
                <IconButton onClick={() => remove(e)}>
                  <DeleteForeverRounded color="error" sx={{ fontSize: 30 }} />
                </IconButton>
              ) : (
                <TimelineDot variant="outlined" color="primary">
                  {icon}
                </TimelineDot>
              )}

              <TimelineConnector
                sx={{ height: i === element.length - 1 ? 30 : 20 }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <Stack sx={{ height: "70%" }} justifyContent="center">
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  {translateMap[e.type]}
                </Typography>
                <Typography>{e.description}</Typography>
              </Stack>
            </TimelineContent>
          </TimelineItem>
        );
      });
  return (
    <Box>
      {element && element.length === 0 ? (
        <Stack alignItems="center">
          <Typography mb={1}>
            Non hai ancora specificato nessun percorso di formazione
          </Typography>
          {!adding && (
            <Box sx={{ width: "fit-content" }}>
              <IconButton onClick={() => setAdding(true)}>
                <AddCircleRounded
                  sx={{ fontSize: 40, color: "primary.main" }}
                />
              </IconButton>
            </Box>
          )}
        </Stack>
      ) : (
        <Timeline position="alternate" sx={{ marginTop: 5 }}>
          {element && element.length > 0 && (
            <TimelineItem>
              <TimelineSeparator>
                {editing ? (
                  <IconButton
                    onClick={() => setEditing(false)}
                    sx={{ bgcolor: "error.main" }}
                  >
                    <Close sx={{ color: "common.white" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => setEditing(true)}
                    sx={{ bgcolor: "primary.main" }}
                  >
                    <EditOutlined sx={{ color: "common.white" }} />
                  </IconButton>
                )}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
          )}
          {timeline}

          {!adding && (
            <TimelineItem>
              <TimelineSeparator>
                <Fade in>
                  <IconButton
                    sx={{ bgcolor: "primary.main" }}
                    onClick={() => setAdding(true)}
                  >
                    <Add sx={{ color: "common.white" }} />
                  </IconButton>
                </Fade>
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
          )}
        </Timeline>
      )}

      {adding && <Formation add={add} abort={() => setAdding(false)} />}
    </Box>
  );
}
