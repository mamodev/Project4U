import { Autocomplete, Button, FormControlLabel, Stack, Switch, Zoom } from "@mui/material";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import { useTheme } from "@emotion/react";
import usePostEducation from "api/usePostEducation";
import { DatePicker } from "@mui/x-date-pickers";

export default function Formation({ add, abort }) {
  const [checked, setChecked] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [values, setValues] = useState({
    text: null,
    begin: null,
    end: null,
  });
  const { mutate } = usePostEducation({
    onSuccess: (data) => {
      add(data);
      abort();
    },
  });

  const [type, setType] = useState({ label: "", object: null });

  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setValues({ ...values, [id]: value });
  };
  const disabled = () => {
    return (
      values.text === null ||
      values.begin === null ||
      (values.end === null && !checked) ||
      type.object === null
    );
  };
  const submit = (e) => {
    mutate({
      type: type.object.value,
      description: values.text,
      started_at: values.begin.toISOString().split("T")[0],
      ended_at: values.end ? values.end.toISOString().split("T")[0] : undefined,
    });
  };

  const theme = useTheme();
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Stack spacing={2}>
      <Zoom in={animate} unmountOnExit>
        <Autocomplete
          fullWidth
          value={type.object}
          inputValue={type.label}
          onChange={(e, val) => setType((old) => ({ ...old, object: val }))}
          onInputChange={(e, val) => setType((old) => ({ ...old, label: val }))}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          options={[
            { label: "Università", value: "University" },
            { label: "Superiori", value: "Highschool" },
            { label: "Master", value: "Master" },
            { label: "Corso", value: "Course" },
            { label: "Dottorato", value: "Doctorate" },
            { label: "Altro", value: "Other" },
          ]}
          renderInput={(params) => <TextField {...params} label="Tipo" />}
        />
      </Zoom>

      <Zoom in={animate} style={{ transitionDelay: `${animate ? 200 : 0}ms` }}>
        <TextField
          required
          id="text"
          onChange={handleChange}
          label="Descrizione"
          autoComplete="off"
          variant="outlined"
        />
      </Zoom>

      <Zoom in={animate} style={{ transitionDelay: `${animate ? 400 : 0}ms` }}>
        <Stack direction="row" spacing={1}>
          <DatePicker
            label="Da"
            value={values.begin}
            onChange={(newValue) => {
              setValues({ ...values, begin: newValue });
            }}
            autoComplete="off"
            renderInput={(params) => <TextField {...params} />}
          />
          {!checked && (
            <DatePicker
              label="A"
              autoComplete="off"
              value={values.end}
              onChange={(newValue) => {
                setValues({ ...values, end: newValue });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Stack>
      </Zoom>

      <Zoom in={animate} style={{ transitionDelay: `${animate ? 600 : 0}ms` }}>
        <Stack direction="row" justifyContent="space-between">
          <FormControlLabel
            control={
              <Switch
                color="secondary"
                onChange={() => {
                  setChecked(!checked);
                }}
              />
            }
            label="In corso"
          />

          <Stack direction="row" spacing={2}>
            <Button
              color="secondary"
              variant="contained"
              disabled={disabled()}
              varinat="contained"
              onClick={() => submit()}
            >
              Aggiungi
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                setAnimate(false);
                setTimeout(abort, transitionDuration.exit);
              }}
            >
              Annulla
            </Button>
          </Stack>
        </Stack>
      </Zoom>
    </Stack>
  );
}
