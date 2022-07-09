import { CreateRounded, UploadFileRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import anime from "animejs";

export default function ImageInput({ size = 200, imageChange, upload, link, defaultImage }) {
  const input = useRef();
  const imgRef = useRef();
  const iconRef = useRef();

  const newPhoto = (e) => {
    const file = input.current.files[0];
    const formData = new FormData();
    formData.append("image", file);

    imageChange(formData, imgRef);
  };

  const hoverAnimate = (reverse) => {
    anime.remove(iconRef.current);
    anime.remove(imgRef.current);
    anime({
      targets: iconRef.current,
      opacity: reverse ? 0 : 1,
    });
    anime({
      targets: imgRef.current,
      filter: reverse ? "blur(0px)" : "blur(2px)",
    });
  };

  return (
    <Box
      sx={{ position: "relative", overflow: "hidden", borderRadius: "50%" }}
      onMouseEnter={() => hoverAnimate(false)}
      onMouseLeave={() => hoverAnimate(true)}
    >
      <input
        onChange={newPhoto}
        ref={input}
        style={{
          opacity: "0",
          top: "0",
          left: "0",
          width: size,
          height: size,
          backgroundColor: "white",
          fontSize: "0px",
          cursor: "pointer",
          position: "absolute",
          zIndex: 100,
        }}
        type="file"
      />

      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ position: "relative", width: size, height: size }}
      >
        <img
          ref={imgRef}
          src={link ? link : defaultImage}
          style={{
            position: "absolute",
            width: size,
            height: size,
            border: "1px solid black",
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
          alt="profile"
        />
        <Box ref={iconRef} sx={{ opacity: 0, zIndex: 10 }}>
          {upload ? (
            <UploadFileRounded ì sx={{ fontSize: 50, color: "white" }} />
          ) : (
            <CreateRounded sx={{ fontSize: 50, color: "white" }} />
          )}
        </Box>
      </Stack>
    </Box>
  );
}
