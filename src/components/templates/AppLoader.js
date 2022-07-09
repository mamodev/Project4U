import { Fade, Stack, Typography } from "@mui/material";
import logo from "Assets/Icon/logo_social.png";

export default function AppLoader({ open }) {
  return (
    <Fade in={open}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          bgcolor: "secondary.light",
          top: 0,
          left: 0,
          zIndex: 100000,
        }}
      >
        <img src={logo} alt="logo" style={{ width: 150, height: 150 }} />
        <Typography color="primary" variant="h3" sx={{ mt: 2 }}>
          Project4U
        </Typography>
      </Stack>
    </Fade>
  );
}
