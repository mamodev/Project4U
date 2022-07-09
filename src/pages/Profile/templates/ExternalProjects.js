import { AddCircleRounded, Delete } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import useDeleteExternalProjects from "api/useDeleteExternalProject";
import useExternalProjects from "api/useExternalProject";
import usePostExternalProject from "api/usePostExternalProject";
import FileInput from "components/base/Inputs/FileInput";
import ProjectCard from "components/modules/Cards/ProjectCard";
import { useState } from "react";

export default function ExternalProject() {
  const [adding, setAdding] = useState(false);
  const { data, isSuccess } = useExternalProjects();
  const { mutate } = useDeleteExternalProjects();

  return (
    <Stack>
      {isSuccess ? (
        <>
          {data.length > 0 ? (
            <Stack spacing={2} mt={2}>
              {data.map((e, i) => (
                <Stack key={i} direction="row" justifyContent="space-between" alignItems="center">
                  <ProjectCard
                    name={e.name}
                    description={e.description}
                    url={e.link_site}
                    image={e.image}
                  ></ProjectCard>
                  <IconButton onClick={() => mutate({ id: e.id })}>
                    <Delete />
                  </IconButton>
                </Stack>
              ))}
            </Stack>
          ) : (
            <>{!adding && <Typography>Non hai ancora nessun progetto esterno</Typography>}</>
          )}
          {adding ? (
            <AddProject onAdd={() => setAdding(false)} />
          ) : (
            <Box sx={{ marginTop: 1, mx: "auto", width: "fit-content" }}>
              <IconButton onClick={() => setAdding(true)}>
                <AddCircleRounded color="primary" sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          )}
        </>
      ) : (
        <Typography textAlign="center">Caricamento...</Typography>
      )}
    </Stack>
  );
}

function AddProject({ onAdd }) {
  const [data, setData] = useState({ name: "", url: "", desc: "", img: null });
  const { mutate, isLoading } = usePostExternalProject({ onSuccess: onAdd });

  const handleAdd = () => {
    const newData = { link_site: data.url, name: data.name, description: data.desc };
    if (data.img) newData.image = data.img;
    mutate(newData);
  };
  return (
    <Box mt={2}>
      <Typography fontWeight={500}>Aggiungi progetto</Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-between" p={2} pr={10}>
        <Stack spacing={2}>
          <TextField
            value={data.name}
            onChange={(e) => setData((old) => ({ ...old, name: e.target.value }))}
            autocomplete="false"
            placeholder="Nome"
            size="small"
            sx={{ width: 250 }}
          />
          <TextField
            value={data.url}
            onChange={(e) => setData((old) => ({ ...old, url: e.target.value }))}
            autocomplete="false"
            placeholder="Sito web"
            size="small"
            sx={{ width: 250 }}
          />
          <TextField
            value={data.desc}
            onChange={(e) => setData((old) => ({ ...old, desc: e.target.value }))}
            autocomplete="false"
            placeholder="Descrizione"
            size="small"
            multiline
            sx={{ width: 250, maxWidth: 250 }}
          />
          <Stack direction="row" spacing={1}>
            <LoadingButton
              sx={{ flex: 1 }}
              variant="contained"
              loading={isLoading}
              color="secondary"
              onClick={handleAdd}
            >
              Crea
            </LoadingButton>
            <Button sx={{ flex: 1 }} color="secondary2">
              Annulla
            </Button>
          </Stack>
        </Stack>
        <Box pb={4}>
          <FileInput
            size={120}
            helpertext="Carica un'immagine"
            onChange={(img) => setData((old) => ({ ...old, img }))}
          />
        </Box>
      </Stack>
    </Box>
  );
}
