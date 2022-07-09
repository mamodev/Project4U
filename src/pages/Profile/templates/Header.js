import { IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useUser from "api/useUser";
import ImageInput from "components/base/Inputs/ImageInput";
import defaultUserImage from "Assets/Icon/blank_user.png";
import usePatchProfileImage from "api/usePatchProfileImage";
import { Settings } from "@mui/icons-material";

//FIXME add funciton
function getAge(dateString) {
  return 20;
}

export default function Header({ openSettings }) {
  const { data, isSuccess } = useUser();
  const { mutate } = usePatchProfileImage({
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const sendData = (formData) => {
    mutate(formData);
  };

  return (
    <Box sx={{ position: "relative" }}>
      {isSuccess && (
        <Stack direction="row" alignItems="center" spacing={2}>
          <ImageInput
            size={160}
            link={data.image}
            defaultImage={defaultUserImage}
            imageChange={sendData}
          />

          <Stack sx={{ color: "primary.main" }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h4" sx={{ fontWeight: 500 }}>
                {data.first_name} {data.last_name}
              </Typography>

              <IconButton color="inherit" onClick={openSettings}>
                <Settings />
              </IconButton>
              <Typography
                variant="caption"
                fontWeight={500}
                sx={{
                  color: "white",
                  bgcolor: "secondary2.main",
                  px: 1,
                  py: 0.2,
                  borderRadius: 1,
                  width: "fit-content",
                }}
              >
                {data.type_user}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              {data.location && (
                <Typography>{`${data.location}${data.date_birth ? "," : ""}`}</Typography>
              )}

              <Typography>{getAge(data.date_birth) + " anni"}</Typography>
            </Stack>

            {data.main_role && (
              <Typography
                variant="caption"
                fontWeight={500}
                sx={{
                  color: "white",
                  bgcolor: "secondary.main",
                  px: 1,
                  py: 0.2,
                  mt: 1,
                  borderRadius: 1,
                  width: "fit-content",
                }}
              >
                {data.main_role}
              </Typography>
            )}
          </Stack>
        </Stack>
      )}
    </Box>
  );
}
