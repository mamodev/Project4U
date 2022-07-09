import { Button, Stack, TextField, Typography, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ProjectCard from "components/modules/Cards/ProjectCard/ProjectCard";
import ImageInput from "./ImageInput";
const img = "Assets/Images/blank_image.png";

export default function ProjectForm(props) {
  const defaultData = {
    name: props.name,
    url: props.url,
    desc: props.desc,
    img: props.img,
  };
  const [data, setData] = useState(defaultData);

  const addImage = (formData, imgRef) => {
    const fr = new FileReader();
    fr.onload = function () {
      imgRef.current.src = fr.result;
      setData({ ...data, img: formData });
    };
    fr.readAsDataURL(formData.get("image"));
  };

  const isDisabled = () => !(data.name && data.url && data.desc);

  return (
    <Stack spacing={2}>
      {props.noCard ? (
        <ProjectCard name={data.name} desc={data.desc} url={data.url} />
      ) : (
        <Zoom in={props.open.animation}>
          <div>
            <ProjectCard name={data.name} desc={data.desc} url={data.url} />
          </div>
        </Zoom>
      )}
      <Zoom
        in={props.open.animation}
        style={{ transitionDelay: `${props.open.animation ? 200 : 0}ms` }}
      >
        <TextField
          defaultValue={defaultData.name}
          label="Nome progetto"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          variant="outlined"
        />
      </Zoom>
      <Zoom
        in={props.open.animation}
        style={{ transitionDelay: `${props.open.animation ? 400 : 0}ms` }}
      >
        <TextField
          defaultValue={defaultData.url}
          label="URL"
          variant="outlined"
          onChange={(e) => setData({ ...data, url: e.target.value })}
        />
      </Zoom>
      <Stack direction="row" spacing={4}>
        <Zoom
          in={props.open.animation}
          style={{ transitionDelay: `${props.open.animation ? 600 : 0}ms` }}
        >
          <textarea
            onChange={(e) => setData({ ...data, desc: e.target.value })}
            className="textarea-minimal"
            type="text"
            maxLength="256"
            placeholder="Descrizione max 256 caratteri"
            defaultValue={defaultData.desc}
          />
        </Zoom>
        <Zoom
          in={props.open.animation}
          style={{ transitionDelay: `${props.open.animation ? 800 : 0}ms` }}
        >
          <Box sx={{ textAlign: "center" }}>
            <ImageInput size={150} default={img} imageChange={addImage} />
            <Typography variant="subtitle1">Inserisci Logo</Typography>
          </Box>
        </Zoom>
      </Stack>
      <Zoom in={props.open.animation}>
        <Stack direction="row" spacing={2}>
          <Button
            disabled={isDisabled()}
            variant="contained"
            color="secondary"
            onClick={() => props.save(data, setData)}
          >
            {props.addBtn ? props.addBtn : "Aggiiungi"}
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={() => props.abort(data, setData)}
          >
            {props.abortBtn ? props.addBtn : "Annulla"}
          </Button>
        </Stack>
      </Zoom>
    </Stack>
  );
}
