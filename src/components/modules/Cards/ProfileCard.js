import { Circle, CircleOutlined } from "@mui/icons-material";
import { Avatar, Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import avatar from "Assets/Images/Avatar/avatar";

//TODO add main role
export default function ProfileCard({
  first_name = "Nome",
  last_name = "Cognome",
  image = avatar.marco,
  skills = [
    { name: "Inglese", level: 5 },
    { name: "React", level: 5 },
  ],
}) {
  return (
    <Stack
      alignItems="center"
      spacing={1}
      sx={{
        userSelect: "none",
        cursor: "pointer",
        border: 3,
        borderRadius: 5,
        bgcolor: "common.white",
        p: 2,
        width: 150,
        height: 220,
        transition: ".2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Avatar src={image} sx={{ width: 100, height: 100 }} />
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
          {first_name} {last_name}
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        {skills?.map((e, i) => (
          <Stack
            key={i}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Typography variant="subtitle2">{e.name}</Typography>
            <Rating
              readOnly
              icon={<Circle color="secondary" sx={{ fontSize: 20 }} />}
              emptyIcon={<CircleOutlined sx={{ fontSize: 20 }} />}
              value={3}
              precision={1}
            />
          </Stack>
        ))}

        {skills.length === 0 && (
          <Typography sx={{ textAlign: "center", marginTop: 2 }}>
            Non ha skill
          </Typography>
        )}
      </Box>
    </Stack>
  );
}
