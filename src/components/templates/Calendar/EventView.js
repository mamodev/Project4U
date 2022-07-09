import * as dates from "date-arithmetic";
import { Avatar, Box, LinearProgress, Stack, Typography } from "@mui/material";
import { Navigate } from "react-big-calendar";
import { CheckCircle } from "@mui/icons-material";

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

function getValidTasks(tasks) {
  let count = 0;
  tasks.forEach((e) => {
    if (e.checked) count++;
  });

  return count;
}

function EventView({ date, events = [], ...props }) {
  return (
    <Stack p={2} spacing={2}>
      {events
        ?.filter?.((e) => e.end.getTime() > date.getTime())
        ?.map((e, i) => (
          <Stack
            onClick={() => {
              props.onSelectEvent(e);
            }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            key={i}
            sx={{
              px: 2,
              py: 1,
              boxShadow: 2,
              borderRadius: 2,
              cursor: "pointer",
              transition: ".2s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar src={e.event.image} />
              <Stack>
                <Typography sx={{ fontWeight: 500 }}>{e.title}</Typography>
                {e.event?.tasks?.length > 0 && (
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CheckCircle color="secondary" />
                    <Typography>
                      {getValidTasks(e.event.tasks)}/{e.event.tasks.length}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Stack>
            <Stack alignItems="flex-end">
              <Typography variant="subtitle2">
                {e.start.getDate()} {months[e.start.getMonth()]}{" "}
                {e.start.getHours()}:{e.start.getMinutes()}
                {" - "}
                {e.end.getDate()} {months[e.end.getMonth()]} {e.end.getHours()}:
                {e.end.getMinutes()}
              </Typography>
              {e.event?.tasks?.length > 0 && (
                <LinearProgress
                  variant="determinate"
                  sx={{ width: 400, height: 10, borderRadius: 5 }}
                  value={
                    (getValidTasks(e.event.tasks) * 100) / e.event.tasks.length
                  }
                />
              )}
            </Stack>
          </Stack>
        ))}
    </Stack>
  );
}

EventView.range = (date, { localizer, ...props }, props2, props3) => {
  const start = date;
  const end = dates.add(start, 2, "day");

  let current = start;
  const range = [];

  while (localizer.lte(current, end, "day")) {
    range.push(current);
    current = localizer.add(current, 1, "day");
  }

  return range;
};

EventView.navigate = (date, action, { localizer }) => {
  switch (action) {
    case Navigate.PREVIOUS:
      return localizer.add(date, -1, "day");

    case Navigate.NEXT:
      return localizer.add(date, 1, "day");

    default:
      return date;
  }
};

EventView.title = (date) => {
  return `Agenda dal ${date.getDate()} di ${months[date.getMonth()]}`;
};

export default EventView;
