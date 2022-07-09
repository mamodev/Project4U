import { Add } from "@mui/icons-material";
import { Stack, Box, Typography } from "@mui/material";
import { useRef, useState } from "react";

export default function FileInput({
  onChange: changeValue,
  helpertext,
  size = 150,
  helperTextSpacing = 30,
  defaultImage = "",
  ...props
}) {
  const [image, setImage] = useState(defaultImage);
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

    changeValue(file);
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Stack
        {...props}
        justifyContent="center"
        alignItems="center"
        sx={{
          border: 2,
          borderColor: "primary.main",
          width: size,
          height: size,
          borderRadius: "50%",
          position: "relative",
          transition: ".2s ease-in-out",
          overflow: "hidden",
          "&:hover": {
            transform: "scale(1.05)",
            borderColor: "secondary2.main",
          },
        }}
      >
        {image && (
          <img
            ref={imgRef}
            alt="input"
            src={defaultImage}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
        <input
          onChange={newPhoto}
          ref={inputRef}
          type="file"
          style={{
            position: "absolute",
            cursor: "pointer",
            fontSize: "0px",
            opacity: "0",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            top: 0,
            left: 0,
          }}
        />
        {!image && (
          <Box
            sx={{
              width: 40,
              height: 40,
            }}
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ bgcolor: "secondary.main", p: 1, borderRadius: "50%" }}
            >
              <Add color="info" />
            </Stack>
          </Box>
        )}
      </Stack>
      {!!helpertext && (
        <Typography
          variant="subtitle2"
          sx={{
            position: "absolute",
            bottom: -helperTextSpacing,
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {helpertext}
        </Typography>
      )}
    </Box>
  );
}
