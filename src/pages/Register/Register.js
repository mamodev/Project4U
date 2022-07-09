import { Avatar, Button, Fade, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AuthContext from "context/AuthContext";
import { useContext, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "Assets/Icon/logo_social.png";
import illustration from "Assets/Images/register_illustration.png";
import rocket from "Assets/login_rocket.svg";
import background from "Assets/background.svg";

import anime from "animejs";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwd1, setPasswd1] = useState("");
  const [passwd2, setPasswd2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, passwd1, firstName, lastName);
  };

  //TODO sistemare meccanismo di validazione e di guida
  const isSubmittable = useMemo(() => {
    let valid = true;
    const messages = [];

    if (!email || !firstName || !lastName || !passwd1 || !passwd2) {
      valid = false;
      messages.push("Devi compilare tutti i campi");
    }

    if (passwd1 !== passwd2) {
      valid = false;
      messages.push("Le due password non coincidono");
    }
    return { submittable: valid, messages };
  }, [email, firstName, lastName, passwd1, passwd2]);

  const rocketRef = useRef();
  const backgroundRef = useRef();

  const navigateLogin = () => {
    anime({
      targets: rocketRef.current,
      bottom: "-18vw",
      left: -200,
      easing: "easeInQuad",
      duration: 600,
      complete: () => navigate("/login"),
    });

    anime({
      targets: backgroundRef.current,
      translateX: ["100%", 0],
      opacity: [0, 1],
      easing: "easeInQuad",
      duration: 600,
      complete: () => navigate("/login"),
    });
  };
  return (
    <Fade in>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={10}
          sx={{
            width: "100wh",
            height: "100vh",
            bgcolor: "secondary.light",
          }}
        >
          <Stack spacing={2}>
            <Box sx={{ position: "relative" }}>
              <Avatar
                src={logo}
                sx={{
                  width: 70,
                  height: 70,
                  position: "absolute",
                  top: -15,
                  left: -90,
                }}
              />
              <Stack>
                <Typography variant="h4" sx={{ fontWeight: 500 }}>
                  Crea un account
                </Typography>
                <Typography>Sei pronto a far decollare le tue idee?</Typography>
              </Stack>
            </Box>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.5}>
                <TextField
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  variant="standard"
                  id="first_namae"
                  label="Nome"
                />
                <TextField
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  variant="standard"
                  id="last_name"
                  label="Cognome"
                />
              </Stack>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="standard"
                id="email"
                label="Email"
                type="email"
              />
              <TextField
                value={passwd1}
                onChange={(e) => setPasswd1(e.target.value)}
                variant="standard"
                id="password"
                label="Password"
                type="password"
              />
              <TextField
                value={passwd2}
                onChange={(e) => setPasswd2(e.target.value)}
                variant="standard"
                id="password2"
                label="Conferma password"
                type="password"
              />
            </Stack>
            <Box pt={1}>
              <Stack py={0.5}>
                {isSubmittable.messages.map((e, i) => (
                  <Typography variant="caption" color="error" key={i}>
                    {e}
                  </Typography>
                ))}
              </Stack>
              <Button
                onClick={handleSubmit}
                disabled={!isSubmittable.submittable}
                variant="contained"
                color="secondary2"
                fullWidth
              >
                Iscriviti
              </Button>
            </Box>

            <Typography
              color="secondary"
              onClick={navigateLogin}
              sx={{
                cursor: "pointer",
                transition: ".2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                  color: "secondary2.main",
                },
              }}
            >
              Hai già un account? <strong>Accedi ora</strong>.
            </Typography>
          </Stack>
          <Box sx={{ opacity: 0.8 }}>
            <img width="100%" height="100%" src={illustration} alt="register_illustration" />
          </Box>
        </Stack>
        <Box
          ref={rocketRef}
          sx={{
            position: "absolute",
            bottom: "-100vh",
            left: "-100vw",
            width: "100%",
            zIndex: 1000,
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
            transform: "translateX(100%)",
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
      </Box>
    </Fade>
  );
}
