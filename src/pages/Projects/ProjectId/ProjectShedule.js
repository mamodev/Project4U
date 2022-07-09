import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
  KeyboardDoubleArrowLeftRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";
import { Stack, Box, styled, Avatar, Typography, Checkbox } from "@mui/material";
import useProjectEvents from "api/useProjectEvents";
import useShowcases from "api/useShowcases";
import Calendar from "components/templates/Calendar/Calendar";
import { usePortal } from "context/PortalContext";
import ProjectContext from "context/ProjectContext";
import { useContext, useState } from "react";
import DatePicker from "react-calendar";

import "react-calendar/dist/Calendar.css";
import { useParams } from "react-router-dom";

//TODO add Showcase calendar filter
const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: 245,
  padding: 20,
  paddingLeft: 10,
  paddingRight: 10,
  backgroundColor: theme.palette.common.white,
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: "20px",
  overflow: "hidden",

  "& .react-calendar__year-view .react-calendar__tile": {
    padding: "19.5px 3px",
  },
  "& .react-calendar__navigation": {
    marginBottom: 0,
  },
  "& .react-calendar__navigation__label": {
    textTransform: "uppercase",
    transition: ".2s ease-in-out",
    "&:hover": {
      color: theme.palette.secondary2.main,
    },
  },
  "& .react-calendar__navigation__arrow": {
    transition: ".2s ease-in-out",
    "&:hover": {
      transform: "scale(1.3)",
    },
  },
  "& .react-calendar__navigation button:disabled": {
    backgroundColor: "transparent",
  },
  "& .react-calendar__navigation button:enabled:hover, .react-calendar__navigation button:enabled:focus":
    {
      background: "transparent",
    },
  "& .react-calendar": {
    border: "none",
    borderRadius: "20px",
    fontFamily: "Montserrat, sans-serif",
  },
  "& .react-calendar___tile:hover": {
    transform: "scale(1.1)",
  },

  "& .react-calendar__tile--active": {
    background: "transparent",
    color: theme.palette.common.black,
    position: "relative",
  },
  "& .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus": {
    background: "transparent",
    color: theme.palette.common.black,
  },

  "& .react-calendar__tile--active::before": {
    content: '""',
    position: "absolute",
    left: "50%",
    top: "50%",
    marginTop: -15,
    marginLeft: -15,
    width: 30,
    height: 30,
    border: "2px solid",
    borderRadius: "50%",
    borderColor: theme.palette.secondary2.main,
  },

  "& .react-calendar__tile--now:enabled:hover, .react-calendar__tile--now:enabled:focus": {
    background: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    borderRadius: "14px",
  },
  "& .react-calendar__tile--now": {
    background: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    borderRadius: "14px",
  },
  "& .react-calendar__tile:hover": {
    borderRadius: "14px",
  },

  "& .react-calendar__tile--hasActive": {
    color: theme.palette.secondary2.main,
    background: "transparent",
  },
  "& .react-calendar__tile--hasActive:enabled:hover, .react-calendar__tile--hasActive:enabled:focus":
    {
      color: theme.palette.secondary2.main,
      background: "transparent",
    },
}));

function getMaxDate() {
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  return maxDate;
}
function getMinDate() {
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 1);
  return minDate;
}

export default function ProjectSchedule() {
  const { getProjectId } = useContext(ProjectContext);
  const { projectId } = useParams();
  const { data: showcases, isSuccess } = useShowcases(getProjectId(projectId));
  const { data: events } = useProjectEvents(getProjectId(projectId));

  const [value, setValue] = useState(new Date());
  const [showcaseExclude, setShowcaseExclude] = useState([]);

  return (
    <Stack spacing={1}>
      <Typography variant="h3">Calendario</Typography>
      <Stack direction="row" spacing={2} sx={{ zIndex: 1000 }}>
        <Calendar
          sx={{
            border: 2,
            borderRadius: 4,
            bgcolor: "white",
            width: "50vw",
            height: "75vh",
            overflow: "hidden",
          }}
          events={events?.map((e) => ({
            title: e.name ? e.name : e.description,
            event: e,
            start: new Date(e.started_at),
            end: new Date(e.ended_at),
          }))}
          calendarProps={{ date: value, onNavigate: setValue }}
        />
        <Stack spacing={2} sx={{ maxWidth: "280px", maxHeight: "75vh" }}>
          <StyledBox>
            <DatePicker
              onChange={setValue}
              value={value}
              maxDate={getMaxDate()}
              minDate={getMinDate()}
              minDetail={"year"}
              nextLabel={<KeyboardArrowRightRounded />}
              next2Label={<KeyboardDoubleArrowRightRounded />}
              prevLabel={<KeyboardArrowLeftRounded />}
              prev2Label={<KeyboardDoubleArrowLeftRounded />}
            />
          </StyledBox>

          {isSuccess && (
            <Box
              sx={{
                width: "100%",
                bgcolor: "white",
                borderRadius: "20px",
                border: 2,
                p: 1,
                pb: 5,
                borderColor: "primary.main",
                maxHeight: "100%",
                overflow: "hidden",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                Bacheche
              </Typography>
              <Stack
                spacing={1}
                sx={{
                  overflow: "auto",
                  maxHeight: "100%",
                  "&::-webkit-scrollbar": { width: 10 },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "primary.main",
                    borderRadius: 20,
                  },
                  "&::-webkit-scrollbar-track": {
                    marginBottom: "10px",
                  },
                }}
              >
                {showcases?.map((e, i) => (
                  <Stack
                    direction="row"
                    key={i}
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar
                        sx={{
                          height: 30,
                          width: 30,
                          fontSize: 14,
                          bgcolor: e.color
                            ? e.color.startsWith("#")
                              ? e.color
                              : "#" + e.color
                            : "primary.main",
                        }}
                      >
                        {e.name[0]}
                        {e.name[1]}
                      </Avatar>
                      <Typography>{e.name}</Typography>
                    </Stack>
                    <Checkbox
                      checked={!showcaseExclude.some((showcase) => e.id === showcase)}
                      onChange={() =>
                        showcaseExclude.some((showcase) => e.id === showcase)
                          ? setShowcaseExclude((old) => old.filter((showcase) => showcase !== e.id))
                          : setShowcaseExclude((old) => [...old, e.id])
                      }
                    />
                  </Stack>
                ))}
              </Stack>
            </Box>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
