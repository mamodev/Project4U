import { Box, Stack, Typography } from "@mui/material";

export default function ProjectHome() {
  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h3">Home</Typography>
      <Stack spacing={4}>
        <Stack>
          <Typography variant="h6">Nuovi aggiornamenti</Typography>
          <Carousel>
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              .fill({ text: "testo di prova" })
              .map((e, i) => (
                <Box
                  key={i}
                  sx={{
                    border: 2,
                    borderColor: "priamry",
                    height: 160,
                    minWidth: 140,
                    borderRadius: 2,
                    bgcolor: "common.white",
                  }}
                >
                  {e.text}
                </Box>
              ))}
          </Carousel>
        </Stack>
        <Stack>
          <Typography variant="h6">Nuovi aggiornamenti</Typography>
          <Carousel>
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              .fill({ text: "testo di prova" })
              .map((e, i) => (
                <Box
                  key={i}
                  sx={{
                    border: 2,
                    borderColor: "priamry",
                    height: 160,
                    minWidth: 140,
                    borderRadius: 2,
                    bgcolor: "common.white",
                  }}
                >
                  {e.text}
                </Box>
              ))}
          </Carousel>
        </Stack>
        <Stack>
          <Typography variant="h6">Nuovi aggiornamenti</Typography>
          <Carousel>
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              .fill({ text: "testo di prova" })
              .map((e, i) => (
                <Box
                  key={i}
                  sx={{
                    border: 2,
                    borderColor: "priamry",
                    height: 160,
                    minWidth: 140,
                    borderRadius: 2,
                    bgcolor: "common.white",
                  }}
                >
                  {e.text}
                </Box>
              ))}
          </Carousel>
        </Stack>
        <Stack>
          <Typography variant="h6">Nuovi aggiornamenti</Typography>
          <Carousel>
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              .fill({ text: "testo di prova" })
              .map((e, i) => (
                <Box
                  key={i}
                  sx={{
                    border: 2,
                    borderColor: "priamry",
                    height: 160,
                    minWidth: 140,
                    borderRadius: 2,
                    bgcolor: "common.white",
                  }}
                >
                  {e.text}
                </Box>
              ))}
          </Carousel>
        </Stack>
      </Stack>
    </Box>
  );
}

function Carousel({ children }) {
  return (
    <Stack>
      <Stack direction="row" spacing={2} sx={{ maxWidth: "40%", flex: 1, overflowX: "auto" }}>
        {children}
      </Stack>
    </Stack>
  );
}
