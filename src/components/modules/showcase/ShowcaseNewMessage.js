import { AttachFileRounded, Send } from "@mui/icons-material";
import { Avatar, IconButton, Stack, styled, TextField } from "@mui/material";
import { Box } from "@mui/system";
import AuthContext from "context/AuthContext";
import { useContext, useState } from "react";
import useApiData from "hooks/useApiData";
import { useSearchParams } from "react-router-dom";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});

export default function ShowcaseNewMessage(props) {
  const [message, setMessage] = useState("");
  const { data: userData } = useContext(AuthContext);

  const [searchParams] = useSearchParams();
  const { loading, error, data, POST } = useApiData(
    `showcase/${searchParams.get("id")}/messages/text/`
  );

  const send = () => {
    POST({ text: message }, () => setMessage(""));
  };

  return (
    <Box sx={{ position: "relative", m: 2 }}>
      <Avatar
        src={userData.image}
        sx={{
          position: "absolute",
          width: 45,
          height: 45,
          top: -15,
          left: -15,
          boxShadow: 1,
        }}
      />
      <Box
        sx={{
          boxShadow: " 0px 5px 10px 0px rgba(0,0,0,0.1)",
          borderRadius: 5,
          p: 2,
        }}
      >
        <CssTextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Scrivi un messaggio..."
          fullWidth
          multiline
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="right"
          width="100%"
        >
          <IconButton>
            <AttachFileRounded />
          </IconButton>

          <IconButton color="primary" disabled={message === ""} onClick={send}>
            <Send />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
