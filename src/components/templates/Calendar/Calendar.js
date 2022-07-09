import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { dateFnsLocalizer } from "react-big-calendar";
import { Calendar as CalendarComponent } from "react-big-calendar";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  Add,
  CalendarViewMonth,
  ChevronLeft,
  ChevronRight,
  Close,
  ViewDay,
  ViewListRounded,
  ViewWeek,
} from "@mui/icons-material";
import { useContext, useMemo, useState } from "react";
import CreateEvent from "components/modules/CreateEvent/CreateEvent";
import useProjectEvents from "api/useProjectEvents";
import { useParams } from "react-router-dom";
import ProjectContext from "context/ProjectContext";
import { views } from "react-big-calendar/lib/utils/constants";
import EventView from "./EventView";
import EventDetails from "./EventDetails";

const locales = {
  it: require("date-fns/locale/it"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const days = [
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
  "Domenica",
];

const months = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

function CustomToolbar({ label, onView, view, onNavigate, date, ...props }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={1}
      px={2}
    >
      <Stack direction="row">
        <IconButton onClick={() => onNavigate("PREV")}>
          <ChevronLeft />
        </IconButton>

        <Button onClick={() => onNavigate("TODAY")}>Oggi</Button>

        <IconButton onClick={() => onNavigate("NEXT")}>
          <ChevronRight />
        </IconButton>
      </Stack>
      <Typography>{label}</Typography>
      <ButtonGroup size="small">
        <Button
          variant={view === "agenda" ? "contained" : "outlined"}
          color={view === "agenda" ? "secondary2" : "primary"}
          onClick={() => onView("agenda")}
        >
          <ViewListRounded />
        </Button>
        <Button
          variant={view === "day" ? "contained" : "outlined"}
          color={view === "day" ? "secondary2" : "primary"}
          onClick={() => onView("day")}
        >
          <ViewDay />
        </Button>
        <Button
          variant={view === "week" ? "contained" : "outlined"}
          color={view === "week" ? "secondary2" : "primary"}
          onClick={() => onView("week")}
        >
          <ViewWeek />
        </Button>
        <Button
          variant={view === "month" ? "contained" : "outlined"}
          color={view === "month" ? "secondary2" : "primary"}
          onClick={() => onView("month")}
        >
          <CalendarViewMonth />
        </Button>
      </ButtonGroup>
    </Stack>
  );
}

export default function Calendar({ sx, calendarProps, events = [], ...props }) {
  const [selected, setSelected] = useState(null);

  const selectEventHandler = (event) => {
    setSelected(event);
  };

  const { formats, components } = useMemo(
    () => ({
      components: {
        toolbar: CustomToolbar,
        month: {
          header: ({ label }) => <Typography my={1}>{label}</Typography>,
        },
        week: {
          header: ({ label }) => <Typography mb={2}>{label}</Typography>,
        },
        agenda: {
          date: ({ label }) => <Typography>{label}</Typography>,
          event: ({ event }) => (
            <Typography sx={{ cursor: "pointer" }}>
              {event.title} {event.event.description}
            </Typography>
          ),
        },
      },
      formats: {
        dateFormat: "dd",
        agendaHeaderFormat: () => "Lista eventi",
        agendaTimeRangeFormat: ({ start, end }) =>
          `${start.getHours()}:${start.getMinutes()} - ${end.getHours()}:${end.getMinutes()}`,
        agendaDateFormat: (date) =>
          `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`,
        agendaTimeFormat: (date) => `${date.getHours()}:${date.getMinutes()}`,
        dayFormat: (date, culture, localizer) => days[date.getDay()],
        weekdayFormat: (date) => days[date.getDay()],
        timeGutterFormat: (date) => `${date.getHours()}:00`,
        monthHeaderFormat: (date) => months[date.getMonth()],
        dayHeaderFormat: (date) =>
          `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`,
        dayRangeHeaderFormat: ({ start, end }) =>
          `${days[start.getDay()]} ${start.getDate()} - ${
            days[end.getDay()]
          } ${end.getDate()}`,
      },
    }),
    []
  );

  return (
    <Box
      {...props}
      sx={{
        position: "relative",
        ...sx,
      }}
    >
      {selected && (
        <EventDetails
          event={selected}
          onClose={() => setSelected(null)}
          months={months}
        />
      )}
      <CalendarComponent
        views={{ month: true, week: true, day: true, agenda: EventView }}
        formats={formats}
        components={components}
        localizer={localizer}
        messages={{ date: "Data", time: "Ora", event: "Evento" }}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%", width: "100%" }}
        onSelectEvent={selectEventHandler}
        {...calendarProps}
      />
      <Box sx={{ position: "absolute", right: 10, bottom: 10 }}>
        <AddEvent />
      </Box>
    </Box>
  );
}

function AddEvent() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Fab size="small" color="secondary" onClick={handleOpen}>
        <Add />
      </Fab>
      <CreateEvent open={open} handleClose={handleClose} />
    </>
  );
}
