import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useMatch, useResolvedPath } from "react-router-dom";

export default function IconTextButton({ icon, text, onClick, to }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      sx={{
        cursor: "pointer",
        userSelect: "none",
        transition: "0.15s ease-in-out",
        color: match ? "primary.main" : grey[600],
        "&:hover": { transform: "scale(1.05)", color: "secondary2.main" },
      }}
      onClick={onClick}
    >
      {icon}
      <Typography color={match ? "primary" : grey[500]} variant="body1">
        {text}
      </Typography>
    </Stack>
  );
}
