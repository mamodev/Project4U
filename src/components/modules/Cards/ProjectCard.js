import { Avatar, Stack, Typography } from "@mui/material";

export default function ProjectCard({ image, name, url, description }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      sx={{
        bgcolor: "common.white",
        py: 2,
        px: 3,
        width: "80%",
        border: 2,
        borderColor: "primary.main",
        borderRadius: 4,
        cursor: "pointer",
        transition: ".2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Stack>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle2">{url}</Typography>
        <Typography>{description}</Typography>
      </Stack>
      <Avatar src={image} sx={{ width: 75, height: 75 }} />
    </Stack>
  );
}
