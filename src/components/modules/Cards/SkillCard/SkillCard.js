import {
  Circle,
  CircleOutlined,
  CloseRounded,
  Delete,
  EditRounded,
} from "@mui/icons-material";
import { Button, IconButton, Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import useApiData from "hooks/useApiData";

//FIXME delete function, APIBUG?
//TODO add modify function

export default function SkillCard(props) {
  const [modify, setModify] = useState({ status: false, level: props.level });
  const [deleteData, deleteLoading, deleteError, deleteSend] = useApiData(
    `user/skill/${props.id}/`,
    "DELETE"
  );
  const [addData, addLoading, addError, addSend] = useApiData(
    `user/skill/${props.id}/`,
    "POST"
  );

  const oldLevel = useRef(props.level);

  const handleModify = () => {
    oldLevel.current = modify.level;
    setModify((v) => ({ ...v, status: true }));
  };

  const handleAbort = () => {
    setModify({ level: oldLevel.current, status: false });
  };

  const handleChange = (e, level) => {
    setModify({ status: false, level: level });
  };

  const handleDelete = () => {
    deleteSend();
  };
  return (
    <Box
      sx={{
        marginInline: "auto",
        width: "fit-content",
        p: 1,
        borderRadius: 3,
        boxShadow: 1,
      }}
    >
      <Stack spacing={1}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">{props.name}</Typography>
          {!modify.status ? (
            <IconButton onClick={handleModify}>
              <EditRounded sx={{ fontSize: 20 }} />
            </IconButton>
          ) : (
            <IconButton onClick={handleAbort}>
              <CloseRounded />
            </IconButton>
          )}
        </Stack>

        <Rating
          readOnly={!modify.status}
          icon={<Circle color={modify.status ? "primary" : "secondary"} />}
          emptyIcon={<CircleOutlined />}
          value={modify.level}
          onChange={handleChange}
          precision={1}
        />

        {modify.status && (
          <Button color="error" variant="outlined" onClick={handleDelete}>
            <Delete color="error" />
          </Button>
        )}
      </Stack>
    </Box>
  );
}
