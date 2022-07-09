import { useContext, useRef, useState } from "react";
import AuthContext from "context/AuthContext";
import { Avatar, Button, Fade, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import anime from "animejs";
import background from "Assets/background.svg";
import Planets from "./Svg";
import logo from "Assets/Icon/logo_social.png";

import rocket from "Assets/login_rocket.svg";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("marco.morozzi2002@gmail.com");
  const [password, setPassword] = useState("Kat45gp8kb");

  const planetsRef = useRef();
  const circleRef = useRef();
  const moonRef = useRef();
  const greyPlanetRef = useRef();
  const yellowPlanetRef = useRef();
  const bluePlanetRef = useRef();
  const backgroundRef = useRef();
  const rocketRef = useRef();
  const formRef = useRef();

  const handleLogin = () => {
    login(email, password);
  };

  const registerNavigate = () => {
    console.log(rocketRef.current);
    anime({
      targets: rocketRef.current,
      left: "50%",
      bottom: "45vh",
      scale: "1.3",
      duration: 600,
      easing: "linear",
      complete: () => navigate("/register"),
    });
    anime({
      targets: backgroundRef.current,
      width: "50%",
      height: "70vh",
      duration: 300,
      delay: 150,
      easing: "linear",
    });
    anime({
      targets: planetsRef.current,
      opacity: 0,
      duration: 10,
      delay: 150,
      easing: "linear",
    });

    anime({
      targets: formRef.current,
      opacity: 0,
      duration: 300,
      delay: 200,
      easing: "linear",
    });
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Fade in>
        <Box
          ref={planetsRef}
          sx={{
            position: "absolute",
            top: 30,
            left: 220,
            height: "90vh",
            zIndex: 100,
            opacity: 0.9,
          }}
        >
          <Planets
            circleRef={circleRef}
            bluePlanetRef={bluePlanetRef}
            moonRef={moonRef}
            greyPlanetRef={greyPlanetRef}
            yellowPlanetRef={yellowPlanetRef}
          />
        </Box>
      </Fade>

      <Box
        ref={rocketRef}
        sx={{
          position: "absolute",
          bottom: "-18vw",
          left: "-200px",
          zIndex: 1000,
          width: "100%",
        }}
      >
        <img src={rocket} alt="rocket" width="100%" />
      </Box>

      <Box
        ref={backgroundRef}
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          bgcolor: "primary.main",
        }}
      >
        <img
          src={background}
          alt="background"
          style={{
            width: "100vw",
            height: "110vh",
            objectFit: "cover",
            opacity: 0.8,
          }}
        />
      </Box>

      <Fade in>
        <Box ref={formRef} sx={{ position: "absolute", left: 80, bottom: 130, zIndex: 6000 }}>
          <Box>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar src={logo} sx={{ width: 80, height: 80 }} />
              <Typography variant="h4" sx={{ fontWeight: 500 }}>
                Accedi
              </Typography>
            </Stack>
            <Stack ml={12} sx={{ width: 340 }} spacing={3}>
              <Stack spacing={1.5}>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="standard"
                  label="Email"
                  fullWidth
                />

                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="standard"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </Stack>
              <Button color="secondary2" variant="contained" onClick={handleLogin}>
                Accedi
              </Button>
              <Typography
                onClick={registerNavigate}
                color="secondary"
                sx={{
                  cursor: "pointer",
                  transition: ".2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                    color: "secondary2.main",
                  },
                }}
              >
                Non hai ancora un account? <strong>Iscriviti ora</strong>
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
}
