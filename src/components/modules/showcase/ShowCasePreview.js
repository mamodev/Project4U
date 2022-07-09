import { Avatar, AvatarGroup, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

const formatColor = (color) => {
  return color.startsWith("#") ? color : "#" + color;
};
export default function ShowCasePreview({
  variant,
  title,
  color,
  users_list = [],
  last_message,
  last_event,
  id,
}) {
  const users = users_list.map((user) => (
    <Avatar key={user.id} src={user.image} />
  ));

  return (
    <Box
      sx={{
        border: 3,
        p: 2,
        bgcolor: "white",
        color: color ? formatColor(color) : "primary.main",
        userSelect: "none",
        borderRadius: 6,
        position: "relative",
        cursor: "pointer",
        height: 100,
        transition: "0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      {variant !== 1 && (
        <Box sx={{ position: "absolute", right: 10, bottom: 5 }}>
          <AvatarGroup max={3}>{users}</AvatarGroup>
        </Box>
      )}

      <Typography color={color} variant="h6" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>

      {variant === 3 ? (
        <Stack direction="row">
          <Stack pt={2} sx={{ width: "60%" }}>
            <Typography>Non c'è nessun messaggio!</Typography>
          </Stack>

          <Stack ml={5} pt={2} sx={{ width: "40%" }}>
            {last_event ? (
              <div></div>
            ) : (
              <Typography>Non c'è nessun evento!</Typography>
            )}
          </Stack>
        </Stack>
      ) : (
        <Stack pt={2}>
          <Typography>Non c'è nessun messaggio!</Typography>
        </Stack>
      )}
    </Box>
  );
}
