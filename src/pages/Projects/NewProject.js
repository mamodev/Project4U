import { LoadingButton } from "@mui/lab";
import { Chip, Container, Stack, Typography, Box } from "@mui/material";
import { useContext, useState } from "react";
import RocketImageInput from "components/base/Inputs/RocketImageInput";
import Planets from "Assets/Images/planets.svg";
import ProjectContext from "context/ProjectContext";
import TextFieldRounded from "components/base/Inputs/TextFieldRounded";
import usePostProject from "api/usePostProject";

export default function NewProject() {
  const { addProject } = useContext(ProjectContext);

  const { mutate, isLoading } = usePostProject({
    onSuccess: (data) => addProject(data),
  });

  const [data, setData] = useState({
    image: undefined,
    name: "",
    description: "",
    link_site: "",
    tags: [],
  });
  const create = () => {
    mutate(data);
  };
  const keywordsKeyUpHandler = (e) => {
    if (e.key === " " || e.key === "Enter") {
      let world = e.target.value.replace(/\s+/g, "");
      if (data.tags.indexOf(world) === -1) {
        setData((old) => ({ ...old, tags: [...old.tags, world] }));
        e.target.value = "";
      } else {
        e.target.value = world;
      }
    }
  };

  const imageChangeHander = (e, file) => {
    setData((old) => ({ ...old, image: file }));
  };

  return (
    <>
      <Stack
        alignItems="center"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -10,
          opacity: 0.4,
        }}
      >
        {<img src={Planets} alt="planets" />}
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "100%",
          pt: 4,
          position: "relative",
        }}
      >
        <Stack spacing={20} direction="row" alignItems="center" mt={8}>
          <Stack spacing={2}>
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
              CREA PROGETTO
            </Typography>

            <TextFieldRounded
              autoComplete="off"
              placeholder="Nome*"
              value={data.name}
              onChange={(e) =>
                setData((old) => ({ ...old, name: e.target.value }))
              }
            />
            <TextFieldRounded
              autoComplete="off"
              placeholder="Descrizione*"
              multiline
              value={data.description}
              onChange={(e) =>
                setData((old) => ({ ...old, description: e.target.value }))
              }
            />
            <TextFieldRounded
              autoComplete="off"
              placeholder="Url"
              value={data.link_site}
              onChange={(e) =>
                setData((old) => ({ ...old, link_site: e.target.value }))
              }
            />
            <Stack
              spacing={1}
              direction="row"
              sx={{ width: "320px", flexWrap: "wrap", pt: 1 }}
            >
              {data.tags.length === 0 ? (
                <Typography>
                  <strong>
                    Inserisci almeno una parola chiave legata al progetto.
                  </strong>{" "}
                  (Dopo avela scritta premi spazio od invio per inserirla)
                </Typography>
              ) : (
                data.tags.map((e, i) => (
                  <Box key={i} sx={{ width: "fit-content", pb: 1 }}>
                    <Chip
                      label={e}
                      color="primary"
                      variant="outlined"
                      onDelete={() =>
                        setData((old) => ({
                          ...old,
                          tags: old.tags.filter((e, index) => index !== i),
                        }))
                      }
                    />
                  </Box>
                ))
              )}
            </Stack>
            <TextFieldRounded
              autoComplete="off"
              placeholder="Inserisci una parola chiave*"
              onKeyUp={keywordsKeyUpHandler}
            />

            <LoadingButton
              loading={isLoading}
              size="large"
              variant="contained"
              color="secondary2"
              sx={{ color: "white" }}
              onClick={create}
            >
              Inizia il tuo progetto
            </LoadingButton>
          </Stack>
          <Container sx={{ pb: 3 }}>
            <RocketImageInput onChange={imageChangeHander} />
          </Container>
        </Stack>
      </Stack>
    </>
  );
}
