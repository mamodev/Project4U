import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),

    h5: {
      letterSpacing: 1,
    },
  },

  palette: {
    primary: {
      main: "#3D405B",
    },
    secondary: {
      main: "#1A94C4",
      light: "#E6F8FE",
    },
    secondary2: {
      main: "#F2055C",
      contrastText: "white",
    },
    info: {
      main: "#FFF8E6",
    },
    text: {
      primary: "#3D405B",
    },
    error: {
      main: "#F2055C",
      dark: "#F2055C",
    },
  },

  shape: {
    borderRadius: 6,
  },

  transitions: {
    duration: {
      enteringScreen: 500,
      leavingScreen: 295,
    },
  },
});

const theme = createTheme({
  ...defaultTheme,
  components: {
    MuiTypography: {
      defaultProps: {
        color: "primary.main",
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "rounded", color: "primary" },
          style: {
            borderRadius: 30,
            paddingLeft: 20,
            paddingRight: 20,
            position: "relative",
            backgroundColor: defaultTheme.palette.primary.main,
            transition: ".2s ease-in-out",
            "&:hover": {
              backgroundColor: defaultTheme.palette.primary.main,
              transform: "scale(1.05)",
            },
          },
        },
        {
          props: { variant: "rounded", color: "secondary" },
          style: {
            borderRadius: 30,
            paddingLeft: 20,
            paddingRight: 20,
            position: "relative",
            backgroundColor: defaultTheme.palette.secondary.main,
            transition: ".2s ease-in-out",
            "&:hover": {
              backgroundColor: defaultTheme.palette.secondary.main,
              transform: "scale(1.05)",
            },
          },
        },
        {
          props: { variant: "rounded", color: "secondary2" },
          style: {
            borderRadius: 30,
            paddingLeft: 20,
            paddingRight: 20,
            position: "relative",
            backgroundColor: defaultTheme.palette.secondary2.main,
            transition: ".2s ease-in-out",
            "&:hover": {
              backgroundColor: defaultTheme.palette.secondary2.main,
              transform: "scale(1.05)",
            },
          },
        },
      ],
    },
  },
});

export default theme;
