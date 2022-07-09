import { Avatar, AvatarGroup, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useShowcaseMessages from "api/useShowcaseMessages";
import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

export default function StreamPanel() {
  const [searchParams] = useSearchParams();
  const { data, isSuccess } = useShowcaseMessages(searchParams.get("id"));
  console.log(data);
  return (
    <Stack sx={{ maxHeight: "100%", overflowY: "auto" }}>
      {data?.results?.map((e, i) => {
        switch (e.type_message) {
          case "POLL":
            return (
              <StreamPoll
                key={i}
                image={e?.author?.image}
                text={e?.content?.name}
                options={e?.content?.options}
              />
            );
          case "TEXT":
            return (
              <StreamMessage
                key={i}
                image={e?.author?.image}
                text={e?.content?.text}
                first_name={e?.author?.first_name}
                last_name={e?.author?.last_name}
                date={e.updated_at}
              />
            );
          case "UPDATE":
            return (
              <StreamUpdate
                key={i}
                text={e.content.description}
                first_name={e.author.first_name}
                last_name={e.author.last_name}
              />
            );
          default:
            return null;
        }
      })}
    </Stack>
  );
}

function StreamUpdate({ first_name, last_name, text }) {
  return (
    <Typography>
      <strong>
        @{first_name} {last_name}
      </strong>{" "}
      {text}
    </Typography>
  );
}
function StreamPoll({ image, text, date: UTC_date, options }) {
  const date = new Date(UTC_date);
  const { data } = useContext(AuthContext);

  return (
    <Box sx={{ position: "relative", m: 2 }}>
      <Box
        sx={{
          boxShadow: 2,
          boxShadow: " 0px 5px 10px 0px rgba(0,0,0,0.1)",
          borderRadius: 5,
          p: 2,
          pl: 4,
        }}
      >
        <Avatar
          alt={image}
          src={image}
          sx={{ position: "absolute", left: -18, top: 7.5 }}
        ></Avatar>
        <Stack spacing={1}>
          <Stack direction="row" spacing={0.5}>
            <Typography>
              <strong>{text}</strong>
            </Typography>
          </Stack>

          <Stack>
            {options.map((e, i) => (
              <Stack
                sx={{
                  bgcolor: e.voters.some((e) => e.id === data.id)
                    ? "success.light"
                    : "white",
                  color: e.voters.some((e) => e.id === data.id)
                    ? "white"
                    : "black",
                  m: 2,
                  boxShadow: 1,
                  p: 1,
                  px: 2,
                  borderRadius: 3,
                  transition: ".2s ease-in-out",
                  cursor: "pointer",
                  "&:hover": { transform: "scale(1.05)" },
                }}
                key={i}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>{e.text}</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ minWidth: 150 }}
                >
                  <Typography>+{e.num_votes} voti</Typography>
                  <AvatarGroup>
                    {e.voters.map((e, i) => (
                      <Avatar key={i} src={e.image} />
                    ))}
                  </AvatarGroup>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
function StreamMessage({ image, text, first_name, last_name, date: UTC_date }) {
  const date = new Date(UTC_date);
  return (
    <Box sx={{ position: "relative", m: 2 }}>
      <Box
        sx={{
          boxShadow: 2,
          boxShadow: " 0px 5px 10px 0px rgba(0,0,0,0.1)",
          borderRadius: 5,
          p: 2,
          pl: 4,
        }}
      >
        <Avatar
          alt={image}
          src={image}
          sx={{ position: "absolute", left: -18, top: 7.5 }}
        ></Avatar>
        <Stack spacing={1}>
          <Stack direction="row" spacing={0.5}>
            <Typography>
              <strong>
                {first_name} {last_name}
              </strong>
            </Typography>
            <Typography>
              - {date.getDay()}/{date.getMonth()} {date.getHours()}:
              {date.getMinutes()}
            </Typography>
          </Stack>
          <Typography>{text}</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
