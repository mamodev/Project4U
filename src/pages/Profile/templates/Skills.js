import { useTheme } from "@emotion/react";
import {
  AddCircleRounded,
  Circle,
  CircleOutlined,
  CloseRounded,
} from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Grid,
  IconButton,
  Rating,
  Stack,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import SkillCard from "components/modules/Cards/SkillCard/SkillCard";
import useSkills from "api/useSkills";

export default function Skills({ skills = [] }) {
  const [state, setState] = useState();
  useEffect(() => setState(skills), []);
  const list = skills.map((e, i) => (
    <Grid mt={2} key={i} item xs={6}>
      <SkillCard id={e.id} name={e.skill} level={e.level} />
    </Grid>
  ));

  return (
    <Box mt={1}>
      {state?.lenght > 0 ? (
        <Grid sx={{ width: "90%", marginInline: "auto" }} container>
          {list}
        </Grid>
      ) : (
        <Typography>Aggiungi una skill</Typography>
      )}
      <Add add={() => {}} />
    </Box>
  );
}

function Add(props) {
  const theme = useTheme();
  const [adding, setAdding] = useState({ add: false, animation: false });
  const [skill, setSkill] = useState({ label: "", object: null });
  const [level, setLevel] = useState(1);

  const { data, isSuccess } = useSkills(skill.label, !skill.object);

  const abort = () => {
    const delay = theme.transitions.duration.leavingScreen;
    setTimeout(() => setAdding({ add: false, animation: false }), delay);
  };

  const add = () => {
    props.add();
  };

  return (
    <>
      {adding.add ? (
        <Box
          sx={{
            p: 2,
            borderRadius: 3,
            boxShadow: adding.animation ? 2 : 0,
            marginTop: 3,
          }}
        >
          <Stack spacing={2} direction={skill ? "row" : "column"}>
            <Zoom in={adding.animation} unmountOnExit>
              {skill?.object ? (
                <Box
                  sx={{
                    p: 1,
                    boxShadow: 2,
                    width: "fit-content",
                    borderRadius: 3,
                  }}
                >
                  <Stack direction="row" alignItems="center">
                    <Typography variant="h6">{skill.name}</Typography>
                    <IconButton onClick={() => setSkill(null)}>
                      <CloseRounded color="error" />
                    </IconButton>
                  </Stack>
                </Box>
              ) : (
                <Autocomplete
                  disableClearable
                  fullWidth
                  onChange={(e, v) =>
                    setSkill((old) => ({ ...old, object: v }))
                  }
                  onInputChange={(e, v) =>
                    setSkill((old) => ({ ...old, label: v }))
                  }
                  options={
                    isSuccess ? data?.map((e) => ({ ...e, label: e.name })) : []
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Cerca Skill" />
                  )}
                />
              )}
            </Zoom>
            {skill?.object && (
              <Zoom in={adding.animation} unmountOnExit>
                <Stack spacing={0} direction="column" alignItems="center">
                  <Typography variant="subtitle1">Quanto bene?</Typography>
                  <Rating
                    onChange={(e, v) => setLevel(v)}
                    icon={<Circle color="secondary" />}
                    emptyIcon={<CircleOutlined />}
                    defaultValue={1}
                    precision={1}
                  />
                </Stack>
              </Zoom>
            )}
          </Stack>

          <Zoom
            in={adding.animation}
            style={{ transitionDelay: adding.animation ? "200ms" : "0ms" }}
            unmountOnExit
          >
            <Stack spacing={2} direction="row" sx={{ marginTop: 2 }}>
              <Button variant="contained" color="secondary" onClick={add}>
                Aggiungi
              </Button>
              <Button variant="outlined" color="error" onClick={abort}>
                Annulla
              </Button>
            </Stack>
          </Zoom>
        </Box>
      ) : (
        <Box sx={{ marginTop: 1, mx: "auto", width: "fit-content" }}>
          <IconButton onClick={() => setAdding({ add: true, animation: true })}>
            <AddCircleRounded color="primary" sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
      )}
    </>
  );
}
