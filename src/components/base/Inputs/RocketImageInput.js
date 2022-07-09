import { Add } from "@mui/icons-material";
import { Stack, Typography, Box } from "@mui/material";
import { useRef, useState } from "react";
import rocket from "../../../Assets/Images/rocket.svg";

export default function RocketImageInput(props) {
  const [image, setImage] = useState(false);

  const inputRef = useRef();
  const imgRef = useRef();

  const newPhoto = (e) => {
    const file = inputRef.current.files[0];
    var fr = new FileReader();
    fr.onload = function () {
      imgRef.current.src = fr.result;
    };
    fr.readAsDataURL(file);
    setImage(true);

    props.onChange(e, file);
  };
  return (
    <Box
      sx={{
        background: "white",
        height: 85,
        width: 85,
        borderRadius: "50%",
        border: 5,
        borderColor: "primary.main",
        position: "relative",
      }}
    >
      <Box
        sx={{
          top: 0,
          left: 0,
          height: 85,
          width: 85,
          position: "absolute",
          opacity: image ? 1 : 0,
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          alt="icon"
          ref={imgRef}
        />
      </Box>
      <Box
        style={{
          position: "absolute",
          left: -87,
          top: -73,
          zIndex: -10,
          opacity: "0.7",
        }}
        height="500px"
        width="500px"
      >
        <img src={rocket} alt="rocket" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: -45,
          left: 20,
          width: 300,
        }}
      >
        {!image && (
          <Box
            sx={{
              bgcolor: "white",
              p: 1,
              width: "fit-content",
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -3,
                left: 11,
                bgcolor: "white",
                height: 10,
                width: 10,
                transform: "rotate(45deg)",
              }}
            ></Box>

            <Typography sx={{ width: "fit-content" }}>
              Inserisci un logo!
            </Typography>
          </Box>
        )}
      </Box>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: "50%",
        }}
      >
        {!image && (
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ bgcolor: "secondary.main", p: 1, borderRadius: "50%" }}
          >
            <Add color="info" />
          </Stack>
        )}
        <input
          onChange={newPhoto}
          ref={inputRef}
          type="file"
          style={{
            cursor: "pointer",
            fontSize: "0px",
            width: "100%",
            height: "100%",
            opacity: "0",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </Stack>
    </Box>
  );
}
